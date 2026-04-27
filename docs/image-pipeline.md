# Pipeline de imágenes editoriales

Flujo reutilizable para generar imágenes con Replicate (Nano Banana, Flux, Recraft…) en paralelo, revisarlas en un contact sheet y servirlas desde `public/`. Diseñado para sitios editoriales (ADAF, entre-brokers, narrativa, prime-advisor) donde el set de imágenes es chico (5–20) y la consistencia estética importa.

## Componentes

| Archivo | Rol |
|---|---|
| `scripts/images.manifest.json` | Fuente de verdad. Cada slot describe `id`, `subject`, `tone`, `aspect`, `prompt`, `filename` y `status`. |
| `scripts/gen-images.mjs` | Lee el manifiesto, llama Replicate en paralelo, descarga outputs a `public/editorial/`, actualiza status. |
| `scripts/build-contact-sheet.mjs` | Genera `public/editorial/index.html` con todas las imágenes y prompts para revisión. |
| `public/editorial/*.png` | Imágenes generadas. Tests (`test-*.png`) están gitignored; finales sí se commitean. |

## Setup (una vez por máquina/proyecto)

1. Genera token en https://replicate.com/account/api-tokens (botón "Create token", nombre libre, scopes default).
2. Pégalo en `.env.local` del proyecto:
   ```
   REPLICATE_API_TOKEN=r8_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```
   (`.env.local` ya está gitignored por Next.js.)
3. Verifica acceso: `npm run img:gen` (debería decir "Nada que generar" si todos los slots están done).

## Flujo de trabajo

### 1 · Definir el manifiesto

Edita `scripts/images.manifest.json` agregando los slots que necesitas. Schema mínimo por slot:

```json
{
  "id": "frontera-banner",
  "title": "Banda frontera (Hero → Areas)",
  "subject": "Frontera Tijuana — vista cenital",
  "tone": "navy",
  "aspect": "21:9",
  "filename": "frontera.png",
  "status": "pending",
  "prompt": "<prompt completo en el estilo aprobado>"
}
```

Campos opcionales:
- `model` — sobrescribe el `model` global del manifiesto para ese slot (ej. `recraft-ai/recraft-v3`).
- `input` — si el modelo necesita params extra (ej. `{ "size": "1820x1024", "style": "digital_illustration" }`), van aquí. El `prompt` siempre se inyecta dentro de `input`.

### 2 · Generar

```bash
npm run img:gen                       # genera todos los slots con status pending|failed
npm run img:gen -- --id=frontera-A    # solo un slot
npm run img:gen -- --tag=test-        # filtra por prefijo de id (útil para tests A/B)
npm run img:gen -- --force            # regenera TODO el manifiesto
```

El script corre todas las llamadas en paralelo con `Promise.allSettled`. Cada slot guarda su `status`, `lastPredictionId` y `lastGeneratedAt`. Los fallos quedan con `status: "failed"` y `lastError` para diagnóstico.

### 3 · Revisar en contact sheet

```bash
npm run img:sheet
```

Genera `public/editorial/index.html`. Ábrelo en navegador:
- Con dev server corriendo: <http://localhost:3000/editorial/>
- Sin dev server: abre el archivo directo.

El sheet muestra cada slot con su imagen, tono (dot de color), aspect ratio, prompt expandible y el comando exacto para regenerarla.

### 4 · Iterar hasta aprobar

Si un slot no convence:
1. Edita su `prompt` en el manifiesto.
2. `npm run img:gen -- --id=<slot-id> --force`
3. `npm run img:sheet` (refresca el HTML).

### 5 · Atajo combinado

```bash
npm run img:flow
```
Corre generación + contact sheet en una sola línea.

## Convenciones

- **Tests A/B/C** → prefijo `test-` en `id` y `filename`. Quedan gitignored para no inflar el repo.
- **Imágenes finales** → sin prefijo, se commitean a `public/editorial/<nombre-semantico>.png`.
- **Tonos válidos** → `navy` · `burgundy` · `olive` (la paleta de ADAF). El contact sheet renderiza el dot del color.
- **Aspectos comunes** → `21:9` (banner ultra-wide), `16:9` (banner estándar), `4:3` (card de blog), `3:4` (vertical de columna), `1:1` (avatar/spot).
- **Prompts** siempre en inglés (mejores resultados con la mayoría de modelos), pero con instrucciones explícitas: `no text, no readable lettering, no logos, no people` para evitar slop.

## Modelos sugeridos

| Modelo | Cuándo usarlo |
|---|---|
| `google/nano-banana` | Default. Rápido, barato, buen entendimiento de instrucciones complejas. |
| `recraft-ai/recraft-v3` | Cuando necesitas estilos predefinidos (engraving, vector_illustration) y control de tamaño exacto. Cambia `model` y agrega `input.size` + `input.style`. |
| `black-forest-labs/flux-1.1-pro` | Para fotografía documental / duotono donde Nano Banana se queda corto. |
| `ideogram-ai/ideogram-v2-turbo` | Si por alguna razón necesitas TEXTO legible en la imagen (no es nuestro caso). |

Para cambiar el modelo global edita `manifest.model`. Para cambiar uno solo agrega `"model": "..."` al slot.

## Portar a otro proyecto

El sistema es portable a cualquier proyecto Next.js (o cualquiera con Node 18+):

1. Copia `scripts/gen-images.mjs` y `scripts/build-contact-sheet.mjs`.
2. Crea `scripts/images.manifest.json` con tus slots.
3. Agrega los tres scripts (`img:gen`, `img:sheet`, `img:flow`) a tu `package.json`.
4. Agrega `REPLICATE_API_TOKEN` a `.env.local`.
5. Agrega al `.gitignore`:
   ```
   public/editorial/index.html
   public/editorial/test-*.png
   ```

No depende de Next; es Node puro con `fetch` nativo.

## Troubleshooting

- **`Replicate 401`** → token mal pegado o expirado. Regenera en replicate.com/account/api-tokens.
- **`Predicción falló (failed)`** → revisa `lastError` en el manifiesto. Common: prompt rechazado por safety filters (reformula), o modelo en error temporal (reintenta).
- **Imagen sale con texto en inglés** → agrega al final del prompt: `absolutely zero letters or numbers anywhere in the image`.
- **Imagen sale demasiado detallada/old-school** → cambia las referencias del prompt: en vez de `1850s encyclopedia` o `Victorian engraving`, usa `WSJ hedcut` o `contemporary editorial illustration`.
- **Contact sheet vacío para slots done** → el archivo `.png` no está. Re-corre `npm run img:gen -- --id=<slot-id> --force`.
