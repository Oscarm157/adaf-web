# Desarrollo sitio web ADAF · Bitácora PM

> Documento de gestión: qué se construyó, qué pediste tú, qué correcciones aplicaste, qué quedó pendiente.
> Última actualización: 2026-04-27 (cierre de sesión post-auditorías go-live)

---

## 1. Resumen ejecutivo

ADAF es el sitio público del despacho **Asesoría y Defensa Aduanera Fiscal** (Tijuana). Construido en Next.js 16 + Tailwind v4 + Motion 12, con un lenguaje editorial (numerales romanos, hairlines, italianas) y paleta vino · azul marino · olivo sobre crema.

Estado actual: producción en `main`, desplegado en Vercel. Tipografía escalada mobile-first, menú móvil funcional, formularios conectados a Resend, pipeline de imágenes con Replicate (`google/nano-banana`), 10 servicios + 3 notas + páginas institucionales completas.

---

## 2. Arquitectura del proyecto

### Stack
- **Next.js 16.2.4** (Turbopack, App Router, RSC + client islands)
- **React 19.2.4**, **TypeScript 5**
- **Tailwind v4** con `@theme inline` y CSS variables
- **Motion 12** (motion.dev) para animaciones — staggered reveals, drawers, CountUp
- **Source Serif 4** (display) + **Inter** (body) vía `next/font`
- **lucide-react** para iconografía
- **Resend + zod** en endpoints `/api/contacto` y `/api/lead-magnet`
- **Replicate** + scripts node propios para generación de imágenes editoriales

### Estructura
```
src/
  app/
    api/
      contacto/route.ts          # Formulario completo
      lead-magnet/route.ts       # Captura nombre + email guía
    blog/[slug]/page.tsx
    servicios/[slug]/page.tsx
    nosotros, faq, resultados, contacto, recursos/72-horas, ...
  components/
    site/      # Hero, Areas, Pillars, Metodo, Resultados, Notas, LeadMagnet, CTAFinal, Header, Footer, Masthead, WhatsAppFloat
    page/      # PageHero, Prose, ChapterMark
    service/   # ServicePage (template materias)
    blog/      # TableOfContents
    forms/     # ContactForm, LeadMagnetForm
    visual/    # EditorialBand, CoverageMap, ProcedureTimeline
    motion/    # Reveal, Stagger, CountUp
  lib/
    posts.ts           # Datos blog + slugify
    seo.ts             # JSON-LD, metadata
    whatsapp.ts        # Mensaje contextual por ruta
scripts/
  gen-images.mjs           # Orquestador Replicate (parallel + sequential)
  build-contact-sheet.mjs  # HTML de revisión visual
  images.manifest.json     # Source of truth de slots
```

---

## 3. Línea de tiempo del trabajo

### Fase 0 — Foundation (sesiones previas)
- Plan completo aprobado: paleta, tipografía, IA arquitectura, 10 servicios, 3 notas, navegación.
- Stitch como base visual.
- Build inicial: Home + servicios + páginas institucionales.
- Endpoint `/api/contacto` con Resend + validación zod.
- JSON-LD: LegalService, Article, FAQPage.
- ChapterMark, EditorialBand, ProcedureTimeline, CoverageMap (todos custom SVG/divs editoriales).

### Fase 1 — Imágenes editoriales (Pipeline Replicate)

**Lo que pediste:**
> "como podremos hacerle para que tu hagas las llamadas a replicate ahi lo uso y ahi puedo ver lo que crees en paralelo y poderte decir cuales si y ucales no para que el flujo se mas rapido, y dehoc me gustaria documentar este flujo, con esto termino de automatizar la creaicon de sitios web"

**Lo que se construyó:**
- `scripts/gen-images.mjs` — toma manifiesto JSON, llama a Replicate en paralelo, descarga PNGs a `public/editorial/`.
- `scripts/build-contact-sheet.mjs` — genera HTML para revisar todas las imágenes lado a lado.
- `scripts/images.manifest.json` — single source of truth (slot, prompt, modelo, dimensiones).
- `npm run img:gen`, `img:sheet`, `img:flow` (genera + sheet).
- Documentado en `docs/image-pipeline.md` (reusable en otros proyectos).

**Iteraciones de estilo (correcciones tuyas):**
1. Inicial: viejo oeste / desert. → ❌ "estamos en tijuana, la frontera"
2. Linocut Tijuana literal con colonias. → ❌ "se ve pobreza"
3. Abstracto corporativo (Burtynsky, Tadao Ando). → ❌ "cada vez peor"
4. **Final:** Linocut para 3 cards de blog · Fotografía editorial real (estilo Wallpaper · Hélène Binet) para 4 banners del Home. → ✅

**Issues técnicos resueltos:**
- 429 rate limit con créditos < $10: bajé burst limit; se cambió a generación secuencial con sleeps.
- `nano-banana-pro` saturado: vuelta a `nano-banana`.
- Mapa de Baja confundía a NanoBanana (entregaba todo México) → reemplazado por balanza de justicia en ese slot.

### Fase 2 — Auditoría UX/UI (10 puntos)

**Lo que pediste:** auditoría externa de 10 hallazgos.

**Lo que se corrigió:**
| # | Hallazgo | Fix |
|---|---|---|
| 1 | Calendly placeholder visible | Columna eliminada, `#agendar` redirige a WhatsApp |
| 2 | Sección "Equipo" decía "se incorporará..." | Sección IV removida con TODO |
| 3 | Reseñas "Google Reviews en proceso" | Sección V de `/resultados` removida |
| 4 | Numerales romanos leídos por screen readers | `aria-hidden="true"` en ~30 spans (script bulk) |
| 5 | Blog sin TOC | `TableOfContents.tsx` (≥4 H2 → render); `slugify()` exportado |
| 6 | WhatsApp con copy genérico | `lib/whatsapp.ts` con map por ruta; pre-llena mensaje contextual |
| 7 | LeadMagnet `<form>` sin `onSubmit` | (postergado a Fase 4) |
| 8 | Microcopy ambigua | Ajustado en CTAs, formularios, hero |
| 9 | Imágenes faltantes | Resuelto en Fase 1 |
| 10 | Faltaba JSON-LD en blog post | Article schema agregado en `blog/[slug]/page.tsx` |

### Fase 3 — UX/UI Audit (responsive)

**Lo que pediste:**
> "Puedes hacer una revisión completa del sitio, qiuero que primero lo audites y estaba viendo que es cero responsivo, necesito que ajustes esa parte tambien, haz un plan"

**Hallazgos del audit responsive:**
- ~50 archivos con `px-12` hardcoded (96px de padding lateral en mobile = 25% del viewport útil).
- 22 spots con tipografía sin escala mobile (`text-[60px]`, `text-[148px]` desbordando).
- Header sin menú móvil — usuarios sub-`lg` no tenían NINGUNA navegación.
- `<form>` sin `onSubmit` (LeadMagnet).
- `<Link>` con URLs externas en 5 archivos (Next.js Link es solo rutas internas).
- Grids `gap-12` excesivos en mobile apilado.
- 7 PNGs editoriales > 100KB sin convertir a WebP (pendiente).

### Fase 4 — Responsive overhaul (commit `c3787cb`)

**A1. Padding sistema** — Bulk script Node: 49 reemplazos en 24 archivos.
`px-12` → `px-6 md:px-10 lg:px-12` en todos los `max-w-[1280px]` wrappers.

**A2. Header mobile drawer** — Refactor completo de `Header.tsx`:
- Botón hamburger `lg:hidden` con icono `Menu`.
- Drawer lateral con `motion`/`AnimatePresence`, spring stiffness 320, damping 36.
- Width `w-[88%] max-w-[400px]`, slide desde la derecha.
- Body scroll lock con `document.body.style.overflow`.
- Auto-cierre al cambiar de ruta (`useEffect` sobre `usePathname`).
- Incluye nav links + CTA + WhatsApp + teléfono directo.

**A3. Tipografía escalada** — Bulk regex script (18 archivos):
| Elemento | Antes | Después |
|---|---|---|
| Hero CountUp | `text-[148px]` | `text-[88px] md:text-[120px] lg:text-[148px]` |
| Hero H1 | `text-[60px]` | `text-[36px] md:text-[48px] lg:text-[60px]` |
| PageHero H1 | `text-[48px]` | `text-[36px] md:text-[48px] lg:text-[56px]` |
| Blog post H1 | `text-[44px]` | `text-[32px] md:text-[44px] lg:text-[50px]` |
| H2 sección | `text-[42px]` | `text-[28px] md:text-[36px] lg:text-[42px]` |
| H2 sub-bloque | `text-[36px]` | `text-[26px] md:text-[30px] lg:text-[34/36px]` |
| Stats CountUp | `text-[60px]` | `text-[44px] md:text-[60px]` |
| Prose H2 | `text-[34px]` | `text-[24px] md:text-[28px] lg:text-[34px]` |
| CTAFinal H2 | `text-[40px]` | `text-[28px] md:text-[32px] lg:text-[40px]` |

**A4. Grids responsive** — Bulk script (27 reemplazos en 13 archivos):
- `gap-12` → `gap-y-10 gap-x-6 md:gap-12` para que el spacing vertical en mobile no sea excesivo.
- `ContactForm`: `grid-cols-2` → `grid-cols-1 sm:grid-cols-2` (teléfono + email).
- `Hero`: `gap-x-12 gap-y-16` → `gap-x-6 md:gap-x-12 gap-y-12 md:gap-y-16`.

**A5. Componentes visuales:**
- `CoverageMap`: legend `grid-cols-2` → `grid-cols-1 sm:grid-cols-2`.
- `Hero` "25" block: `py-9` → `py-7 md:py-9`.

**A6. `<Link>` externo → `<a>`** — 5 archivos (CTAFinal, nosotros, blog/[slug], faq, resultados).

**B1. LeadMagnet form funcional:**
- Endpoint `/api/lead-magnet` con Resend + zod (nombre + email).
- `LeadMagnetForm.tsx` cliente con estados `idle | submitting | ok | error`, prop `withConsent` para variante con aviso de privacidad.
- `LeadMagnet` en Home + `/recursos/72-horas` ahora reusan el componente.
- Confirmación visual al enviar.

**B2. Build verificado:** `npm run build` ✓ 17s, 30 páginas, 0 errores TS.

---

## 4. Decisiones de producto que tú tomaste

| Decisión | Tu razón |
|---|---|
| Linocut solo en blog cards, foto editorial real en Home | "en el blog me gusto pero en la pagina web no, mejor quiero una foto normal" |
| Pivote desde "viejo oeste" a Tijuana real | "estamos en tijuana, la frontera" |
| No mostrar pobreza en imágenes | "se ve pobreza" en colonias |
| Quitar Calendly hasta tenerlo real | Decisión estética: no placeholders en producción |
| Sin equipo / sin reseñas hasta tener data | Mismo principio anti-AI-slop |
| `veinticinco años` en lede del Hero, `25` numérico en stats | Editorial vs data — coexisten |
| 1 PR bundle vs múltiples chicos | Por estética del flujo de commits |
| Documentar pipeline de imágenes para reusar | Automatización de sitios web |

---

## 5. Feedback que me diste y guardo en memoria

- **No AI slop:** nunca inventar data, testimonios, servicios, navegación en idioma equivocado o stock photos. Citar copy literal en Stitch.
- **Tono directo:** copy de marca formal, factual, sin agencia ni didáctica.
- **No over-planning:** ir directo a ejecución, valor por token.
- **Verificar todo el path:** al remover features, revisar todas las rutas afectadas; usar spacing compacto.
- **Diagnóstico antes de revertir:** no devolver patrones funcionando; identificar root cause CSS primero.
- **Customizer output:** prompts para Claude Code, no código crudo.
- **Cuidado de diseño:** en frontend, calidad visual sobre velocidad de scaffold; Motion + interactividad desde v1.

---

## 6. Pre go-live · Estado y pendientes (post-auditorías)

**Resumen:** se corrieron dos auditorías independientes (técnica + contenido) sin contexto de las sesiones previas. Ambas dieron luz verde a la base; lo que queda son cosas que el despacho tiene que firmar/proveer, no fixes de código.

### ✅ Resueltos en esta sesión (commit responsive overhaul + audit fixes)

- Disclaimers `[Pendiente de validación legal]` removidos de aviso de privacidad, T&C y posts.ts.
- Lead magnet copy verídico: "Te enviaremos la guía en horario hábil" (en vez de prometer envío automático que no existe).
- `portada-72-horas.png` 4.3 MB → JPG 124 KB optimizado con sharp.
- `og-default.png` (no existía) eliminado de layout/seo.ts; ahora todo apunta a `/opengraph-image` route que sí genera dinámicamente.
- Mapa Google con coordenadas placeholder en `/contacto` reemplazado por card que abre Google Maps real.
- "Agendar 20 min" (que apuntaba a WhatsApp) → "Hablar por WhatsApp" en 6 archivos; deduplicados los CTAs.
- Newsletter forms muertos (Footer + `/blog`) reemplazados por links a `/blog` y CTAs a contacto.
- Heading hierarchy /blog: cards de notas h3 → h2.
- `/not-found` numeral romano IV·O·IV con `aria-hidden`.
- 15 anchors externos (`wa.me`, `tel:`, `mailto:`, `maps.app`) con `target="_blank" rel="noopener noreferrer"`.
- Console.log con datos personales en API routes → `console.warn` sin payload.
- 10 metaDescriptions de servicios recortadas a ≤155 chars (de 159–208 a 132–149).
- `error.tsx` global con marca ADAF.
- Logo duplicado `logo-adaf-source.jpg` eliminado.
- `.env.example` documentado: usar `onboarding@resend.dev` mientras el dominio no esté verificado.
- Schema.org `sameAs` deja una sola FB page (la del 664 647 5018), no dos contradictorias.
- Em-dashes residuales con doble espacio en alts de Notas corregidos.
- Servicios mobile en accordion, Header sin desbordamiento.

### 🟡 Pendientes para el despacho (no programáticos — son input humano)

- [ ] **Validar plazos legales** (~14 puntos identificados por auditor de contenido). Todos están razonablemente bien citados según legislación vigente, pero requieren firma técnica del abogado responsable. Lista detallada en el reporte del auditor de contenido (cluster V1–V14). Especialmente sensibles: porcentaje 130% multas aduaneras, 48 mensualidades parcialidades IMSS, plazos COEPRIS BC (estatal vs federal).
- [ ] **PDF "Las primeras 72 horas"** — guía real de 12 páginas que el lead magnet promete. Cuando exista, subir a `public/72-horas.pdf` y modificar `/api/lead-magnet/route.ts` para mandar segundo email al lead con attachment.
- [ ] **Dominio `adafsolucionesfiscales.com`** — confirmar control y propagar DNS. Verificar dominio en Resend para enviar desde `contacto@adafsolucionesfiscales.com` (mientras tanto se usa el sandbox `onboarding@resend.dev`).
- [ ] **Bios del equipo** (sección IV `/nosotros`) — TODO comentado en código. Cuando lleguen, restaurar la sección.
- [ ] **Reseñas / casos** (`/resultados` sección V) — TODO comentado. Decidir si se levantan testimonios reales con consentimiento o se omite definitivamente.
- [ ] **Consolidación de Facebook** — el diagnóstico identifica 2 FB pages duplicadas (ADAFSC y ADAFdespachojuridico) con teléfonos contradictorios. El sitio ya solo enlaza una; el despacho debe decidir cuál se mantiene activa.
- [ ] **Calendly** — botones ahora dicen "Hablar por WhatsApp"; si el despacho quiere agenda real con calendario, integrar Calendly o cal.com en una iteración posterior.
- [ ] **Aviso de privacidad y T&C** — la estructura LFPDPPP está completa, los disclaimers internos están limpios; el abogado responsable solo necesita leer y firmar.

### 🟢 Mejoras opcionales post-launch
- [ ] Lighthouse mobile ≥ 90 en Home (medir post-deploy).
- [ ] Smoke manual en mobile real (no solo devtools).
- [ ] WebP de las 7 imágenes editoriales del Home (actualmente PNG 88–187 KB, ya razonables).
- [ ] Limpiar `test-frontera-*.png` (gitignored, sin impacto en prod).
- [ ] `EditorialBand` con prop `mobileAspect` opcional.
- [ ] `ProcedureTimeline` overflow safety en pantallas muy estrechas.
- [ ] Smoke tests con Playwright (al menos status 200 en sitemap + 10 servicios + 3 posts).
- [ ] README real (sigue el template de create-next-app).

---

## 7. Comandos útiles

```bash
# Dev
npm run dev

# Build verificado
npm run build

# Imágenes editoriales
npm run img:gen      # Genera según manifest
npm run img:sheet    # Genera HTML contact sheet
npm run img:flow     # gen + sheet

# QA responsive
grep -rn "px-12" src/ | grep -v "md:px-12\|lg:px-12"  # debería estar vacío
grep -rn 'href="https://' src/ | grep '<Link'         # debería estar vacío
```

---

## 8. Archivos críticos del último commit

```
src/components/site/Header.tsx           — Mobile drawer completo
src/components/forms/LeadMagnetForm.tsx  — Cliente con estado
src/app/api/lead-magnet/route.ts         — Endpoint Resend
src/components/site/Hero.tsx             — Tipografía + gap responsive
src/components/visual/CoverageMap.tsx    — Legend responsive
src/components/forms/ContactForm.tsx     — Grid mobile
+24 archivos con padding/tipografía escalada
```

---

## 9. Métricas del trabajo (auditoría → commit `c3787cb`)

- **29 archivos** modificados o creados
- **529 líneas** insertadas, 247 eliminadas
- **49 reemplazos** de padding (`px-12` → `px-6 md:px-10 lg:px-12`)
- **27 reemplazos** de gap (`gap-12` → responsive)
- **5 fixes** de `<Link>` externo → `<a>`
- **18 archivos** con tipografía escalada (regex bulk)
- **30 páginas** estáticas/dinámicas en build
- **0 errores** TypeScript
- **17s** build time (Turbopack)
