// Modelo de bloques del blog de ADAF y su convención markdown determinista.
// El cuerpo se guarda en `articles.bodyEs` como markdown con esta convención fija
// y se reconstruye a BodyBlock[] para reutilizar `renderBlock()` + Prose en las
// páginas públicas sin tocarlas. No es markdown genérico: solo lo que sale de aquí.

export type BodyBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "blockquote"; text: string; cite?: string }
  | { type: "note"; title: string; text: string };

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // quita diacríticos
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// BodyBlock[] -> markdown. Solo para la migración (una vez) y para el editor.
export function blocksToMarkdown(blocks: BodyBlock[]): string {
  return blocks.map(blockToMarkdown).join("\n\n");
}

function blockToMarkdown(b: BodyBlock): string {
  switch (b.type) {
    case "h2":
      return `## ${b.text}`;
    case "h3":
      return `### ${b.text}`;
    case "p":
      return b.text;
    case "ul":
      return b.items.map((i) => `- ${i}`).join("\n");
    case "blockquote":
      return b.cite ? `> ${b.text} —${b.cite}` : `> ${b.text}`;
    case "note":
      return `:::note ${b.title}\n${b.text}\n:::`;
  }
}

// markdown -> BodyBlock[]. Se usa siempre en las páginas públicas y el preview.
export function markdownToBlocks(md: string): BodyBlock[] {
  const blocks: BodyBlock[] = [];
  const lines = (md ?? "").split("\n");
  let para: string[] = [];
  let i = 0;

  const flushPara = () => {
    if (para.length) {
      blocks.push({ type: "p", text: para.join(" ").trim() });
      para = [];
    }
  };

  while (i < lines.length) {
    const t = lines[i].trimEnd();

    if (t.trim() === "") {
      flushPara();
      i++;
      continue;
    }

    if (t.startsWith(":::note ")) {
      const closeIdx = lines.findIndex((l, idx) => idx > i && l.trim() === ":::");
      if (closeIdx === -1) {
        // Fence sin cerrar: no te tragues el resto del documento, trátala
        // como texto suelto para que el error se note en vez de desaparecer contenido.
        para.push(t);
        i++;
        continue;
      }
      flushPara();
      const title = t.slice(":::note ".length).trim();
      const text = lines.slice(i + 1, closeIdx).join("\n").trim();
      blocks.push({ type: "note", title, text });
      i = closeIdx + 1;
      continue;
    }

    if (t.startsWith("### ")) {
      flushPara();
      blocks.push({ type: "h3", text: t.slice(4).trim() });
      i++;
      continue;
    }

    if (t.startsWith("## ")) {
      flushPara();
      blocks.push({ type: "h2", text: t.slice(3).trim() });
      i++;
      continue;
    }

    if (t.startsWith("- ")) {
      flushPara();
      const items: string[] = [];
      while (i < lines.length && lines[i].trimEnd().startsWith("- ")) {
        items.push(lines[i].trimEnd().slice(2).trim());
        i++;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    if (t.startsWith("> ")) {
      flushPara();
      const raw = t.slice(2).trim();
      const idx = raw.lastIndexOf(" —");
      if (idx >= 0) {
        blocks.push({
          type: "blockquote",
          text: raw.slice(0, idx).trim(),
          cite: raw.slice(idx + 2).trim(),
        });
      } else {
        blocks.push({ type: "blockquote", text: raw });
      }
      i++;
      continue;
    }

    para.push(t);
    i++;
  }

  flushPara();
  return blocks;
}
