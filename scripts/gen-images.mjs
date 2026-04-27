#!/usr/bin/env node
// Orquestador del pipeline de imágenes editoriales — ADAF web.
// Lee scripts/images.manifest.json, dispara llamadas a Replicate en paralelo,
// descarga los outputs a public/editorial/<filename>, y actualiza el manifiesto
// con status. El manifiesto es la fuente de verdad.
//
// Uso:
//   node scripts/gen-images.mjs                     # genera todos los pendientes
//   node scripts/gen-images.mjs --id=<slot-id>      # solo un slot
//   node scripts/gen-images.mjs --force             # re-genera todos
//   node scripts/gen-images.mjs --tag=test-frontera # filtra por prefijo de id

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, "..");
const MANIFEST_PATH = join(__dirname, "images.manifest.json");

// Cargar .env.local manualmente (Next.js no se ha levantado aquí)
async function loadDotEnv() {
  const envPath = join(PROJECT_ROOT, ".env.local");
  if (!existsSync(envPath)) return;
  const content = await readFile(envPath, "utf8");
  for (const line of content.split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m && !process.env[m[1]]) {
      process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  }
}
await loadDotEnv();

const TOKEN = process.env.REPLICATE_API_TOKEN;
if (!TOKEN) {
  console.error(
    "❌ Falta REPLICATE_API_TOKEN. Pégalo en .env.local así:\n" +
      "   REPLICATE_API_TOKEN=r8_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  );
  process.exit(1);
}

const argv = process.argv.slice(2);
const onlyId = argv.find((a) => a.startsWith("--id="))?.slice(5);
const tagFilter = argv.find((a) => a.startsWith("--tag="))?.slice(6);
const force = argv.includes("--force");

const manifest = JSON.parse(await readFile(MANIFEST_PATH, "utf8"));

const todo = manifest.slots.filter((s) => {
  if (onlyId) return s.id === onlyId;
  if (tagFilter) return s.id.startsWith(tagFilter);
  return force || s.status === "pending" || s.status === "failed";
});

if (todo.length === 0) {
  console.log("Nada que generar. Usa --force para regenerar todo.");
  process.exit(0);
}

console.log(`→ Generando ${todo.length} imagen(es) en paralelo…\n`);

async function callReplicate(slot) {
  const model = slot.model ?? manifest.model;
  const [owner, name] = model.split("/");
  const url = `https://api.replicate.com/v1/models/${owner}/${name}/predictions`;

  const inputBody = slot.input
    ? { input: { ...slot.input, prompt: slot.prompt } }
    : { input: { prompt: slot.prompt } };

  const createRes = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
      Prefer: "wait=60",
    },
    body: JSON.stringify(inputBody),
  });

  if (!createRes.ok) {
    const txt = await createRes.text();
    throw new Error(`Replicate ${createRes.status}: ${txt.slice(0, 240)}`);
  }

  let prediction = await createRes.json();

  // Poll si el modelo tarda más que el wait
  while (
    prediction.status === "starting" ||
    prediction.status === "processing"
  ) {
    await new Promise((r) => setTimeout(r, 2500));
    const pollRes = await fetch(prediction.urls.get, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
    prediction = await pollRes.json();
  }

  if (prediction.status !== "succeeded") {
    throw new Error(
      `Predicción falló (${prediction.status}): ${JSON.stringify(prediction.error ?? "").slice(0, 240)}`,
    );
  }

  const out = prediction.output;
  const urls = Array.isArray(out) ? out : [out];
  return { url: urls[0], predictionId: prediction.id };
}

async function downloadTo(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(dirname(dest), { recursive: true });
  await writeFile(dest, buf);
}

async function processSlot(slot) {
  const t0 = Date.now();
  try {
    process.stdout.write(`  ${slot.id} … `);
    const { url, predictionId } = await callReplicate(slot);
    const dest = join(PROJECT_ROOT, manifest.outputDir, slot.filename);
    await downloadTo(url, dest);
    slot.status = "done";
    slot.lastGeneratedAt = new Date().toISOString();
    slot.lastPredictionId = predictionId;
    delete slot.lastError;
    const ms = Date.now() - t0;
    console.log(`✓  ${slot.filename} (${(ms / 1000).toFixed(1)}s)`);
    return true;
  } catch (err) {
    slot.status = "failed";
    slot.lastError = String(err).slice(0, 500);
    console.log(`✗  ${err}`);
    return false;
  }
}

const results = await Promise.allSettled(todo.map(processSlot));
await writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");

const ok = results.filter((r) => r.status === "fulfilled" && r.value).length;
console.log(`\n${ok}/${todo.length} OK · manifiesto actualizado.`);
console.log(
  `→ Contact sheet: node scripts/build-contact-sheet.mjs && abre public/editorial/index.html`,
);
