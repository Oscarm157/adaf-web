#!/usr/bin/env node
// Genera public/editorial/index.html — un contact sheet de todos los slots
// del manifiesto, para revisión visual en el navegador.
//
// Uso: node scripts/build-contact-sheet.mjs
// Después: abre http://localhost:3000/editorial/  (con npm run dev corriendo)
//          o el archivo public/editorial/index.html directo.

import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, "..");
const MANIFEST_PATH = join(__dirname, "images.manifest.json");

const manifest = JSON.parse(await readFile(MANIFEST_PATH, "utf8"));

function escape(s) {
  return String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function aspectStyle(aspect) {
  const [w, h] = aspect.split(":").map(Number);
  return `aspect-ratio: ${w} / ${h};`;
}

const cards = manifest.slots
  .map((s) => {
    const imgPath = `./${s.filename}`;
    const exists =
      s.status === "done" &&
      existsSync(join(PROJECT_ROOT, manifest.outputDir, s.filename));

    const toneDot =
      s.tone === "navy"
        ? "#0F2A47"
        : s.tone === "burgundy"
          ? "#7A1F38"
          : s.tone === "olive"
            ? "#9B8F2E"
            : "#888";

    const status =
      s.status === "done"
        ? `<span class="pill ok">✓ Listo</span>`
        : s.status === "failed"
          ? `<span class="pill fail">✗ Falló</span>`
          : `<span class="pill pending">… pendiente</span>`;

    const errorBlock = s.lastError
      ? `<details class="err"><summary>Error</summary><pre>${escape(s.lastError)}</pre></details>`
      : "";

    return `
<article class="card" id="${escape(s.id)}">
  <header>
    <div class="meta">
      <span class="dot" style="background:${toneDot}"></span>
      <span class="id">${escape(s.id)}</span>
      ${status}
    </div>
    <h2>${escape(s.title)}</h2>
    <p class="sub">${escape(s.subject ?? "")} · <em>${escape(s.tone)}</em> · ${escape(s.aspect)}</p>
  </header>
  <div class="frame" style="${aspectStyle(s.aspect)}">
    ${
      exists
        ? `<img src="${imgPath}" alt="${escape(s.title)}" loading="lazy" />`
        : `<div class="empty">${s.status === "failed" ? "fallo · regenerar" : "pendiente"}</div>`
    }
  </div>
  <details class="prompt">
    <summary>Prompt</summary>
    <pre>${escape(s.prompt)}</pre>
  </details>
  ${errorBlock}
  <footer class="actions">
    <code>node scripts/gen-images.mjs --id=${escape(s.id)} --force</code>
  </footer>
</article>
`;
  })
  .join("\n");

const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8" />
<title>Contact sheet · ADAF editorial</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex,nofollow" />
<style>
  :root {
    --navy: #0F2A47;
    --burgundy: #7A1F38;
    --olive: #9B8F2E;
    --bg: #FAFAF7;
    --warm: #F1EFEA;
    --rule: #E2DED5;
    --muted: #5A5853;
    --fg: #111418;
  }
  * { box-sizing: border-box; }
  html, body { background: var(--bg); color: var(--fg); }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Inter", system-ui, sans-serif;
    margin: 0;
    padding: 48px 32px 96px;
    font-size: 14px;
    line-height: 1.5;
  }
  h1 {
    font-family: "Source Serif 4", "Iowan Old Style", Georgia, serif;
    font-weight: 600;
    font-size: 38px;
    letter-spacing: -0.012em;
    color: var(--navy);
    margin: 0 0 4px;
  }
  .lede {
    color: var(--muted);
    font-size: 14px;
    max-width: 720px;
    margin: 0 0 40px;
  }
  .lede code {
    background: var(--warm);
    padding: 2px 6px;
    border-radius: 2px;
    font-size: 12.5px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
    gap: 28px;
  }
  .card {
    background: white;
    border: 1px solid var(--rule);
    padding: 18px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .card header { padding-bottom: 4px; }
  .meta {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--muted);
    margin-bottom: 8px;
  }
  .dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
  .id { font-family: ui-monospace, "JetBrains Mono", Menlo, monospace; text-transform: none; letter-spacing: 0; }
  .pill {
    margin-left: auto;
    padding: 2px 8px;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.16em;
  }
  .pill.ok { background: rgba(155,143,46,0.12); color: var(--olive); }
  .pill.fail { background: rgba(122,31,56,0.1); color: var(--burgundy); }
  .pill.pending { background: var(--warm); color: var(--muted); }
  h2 {
    font-family: "Source Serif 4", "Iowan Old Style", Georgia, serif;
    font-weight: 600;
    font-size: 19px;
    line-height: 1.25;
    color: var(--navy);
    margin: 0;
  }
  .sub {
    color: var(--muted);
    font-size: 12.5px;
    margin: 4px 0 0;
  }
  .sub em { font-family: "Source Serif 4", Georgia, serif; font-style: italic; color: var(--olive); }
  .frame {
    background: var(--warm);
    width: 100%;
    overflow: hidden;
    border: 1px solid var(--rule);
  }
  .frame img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .empty {
    width: 100%; height: 100%;
    display: flex; align-items: center; justify-content: center;
    color: var(--muted);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }
  details.prompt summary, details.err summary {
    cursor: pointer;
    color: var(--navy);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    padding: 6px 0;
  }
  details pre {
    font-family: ui-monospace, "JetBrains Mono", Menlo, monospace;
    font-size: 11.5px;
    line-height: 1.5;
    background: var(--warm);
    padding: 12px;
    white-space: pre-wrap;
    border-left: 2px solid var(--olive);
    color: var(--fg);
    max-height: 320px;
    overflow: auto;
  }
  details.err pre { border-left-color: var(--burgundy); }
  footer.actions code {
    font-family: ui-monospace, "JetBrains Mono", Menlo, monospace;
    font-size: 11px;
    background: var(--warm);
    padding: 4px 8px;
    color: var(--muted);
    user-select: all;
  }
  .head-meta {
    display: flex; gap: 24px; flex-wrap: wrap;
    color: var(--muted); font-size: 12px;
    margin-bottom: 32px;
  }
  .head-meta strong { color: var(--navy); font-weight: 600; }
</style>
</head>
<body>
  <h1>Contact sheet — pipeline editorial ADAF</h1>
  <p class="lede">Cada tarjeta muestra un slot del manifiesto. Para regenerar uno, copia el comando del pie y pégalo en terminal. Para refrescar este sheet: <code>node scripts/build-contact-sheet.mjs</code>.</p>
  <div class="head-meta">
    <span><strong>Modelo:</strong> ${escape(manifest.model)}</span>
    <span><strong>Output:</strong> ${escape(manifest.outputDir)}/</span>
    <span><strong>Slots:</strong> ${manifest.slots.length}</span>
    <span><strong>Generados:</strong> ${manifest.slots.filter((s) => s.status === "done").length}</span>
    <span><strong>Fallidos:</strong> ${manifest.slots.filter((s) => s.status === "failed").length}</span>
  </div>
  <div class="grid">
    ${cards}
  </div>
</body>
</html>
`;

const out = join(PROJECT_ROOT, manifest.outputDir, "index.html");
await writeFile(out, html);
console.log(`✓ Contact sheet → ${out}`);
console.log(
  `  Abrir en: http://localhost:3000/editorial/  (con npm run dev)\n` +
    `  o: file://${out}`,
);
