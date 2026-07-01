import { pgTable, uuid, text, boolean, timestamp, jsonb, integer } from "drizzle-orm/pg-core";

export type UserRole = "admin" | "agent" | "viewer";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  passwordHash: text("password_hash").notNull(),
  role: text("role").$type<UserRole>().default("agent").notNull(),
  active: boolean("active").default(true).notNull(),
  mustChangePassword: boolean("must_change_password").default(true).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export type User = typeof users.$inferSelect;

// ===== CRM core (leads + pipeline + audit + archivos) =====

export type LeadQualification = {
  service?: string;
  company?: string;
  industry?: string;
  monthlyVolume?: string;
  paymentTerms?: string;
  timeInBusiness?: string;
  urgency?: string;
};

export type TranscriptMessage = { role: string; content: string };

export type LeadSource = "bot" | "form" | "manual";

export type LeadStatus =
  | "new"
  | "contacted"
  | "following_up"
  | "proposal"
  | "won"
  | "lost";

export type ArticleStatus = "draft" | "scheduled" | "published";

export const leads = pgTable("leads", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name"),
  email: text("email"),
  phone: text("phone"),
  locale: text("locale").default("es"),
  sourceUrl: text("source_url"),
  qualification: jsonb("qualification").$type<LeadQualification>(),
  // Transcript completo del chat (si viene de bot); el CRM muestra el summary, no esto.
  transcript: jsonb("transcript").$type<TranscriptMessage[]>(),
  summary: text("summary"),
  source: text("source").$type<LeadSource>().default("form").notNull(),
  status: text("status").$type<LeadStatus>().default("new").notNull(),
  utmSource: text("utm_source"),
  utmCampaign: text("utm_campaign"),
  utmMedium: text("utm_medium"),
  assignedTo: uuid("assigned_to").references(() => users.id, { onDelete: "set null" }),
  valueAmount: integer("value_amount"),
  closedAt: timestamp("closed_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

export const leadComments = pgTable("lead_comments", {
  id: uuid("id").primaryKey().defaultRandom(),
  leadId: uuid("lead_id")
    .notNull()
    .references(() => leads.id, { onDelete: "cascade" }),
  userId: uuid("user_id").references(() => users.id, { onDelete: "set null" }),
  body: text("body").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const leadEvents = pgTable("lead_events", {
  id: uuid("id").primaryKey().defaultRandom(),
  leadId: uuid("lead_id")
    .notNull()
    .references(() => leads.id, { onDelete: "cascade" }),
  userId: uuid("user_id").references(() => users.id, { onDelete: "set null" }),
  kind: text("kind").notNull(),
  detail: text("detail").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const leadFiles = pgTable("lead_files", {
  id: uuid("id").primaryKey().defaultRandom(),
  leadId: uuid("lead_id")
    .notNull()
    .references(() => leads.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  url: text("url").notNull(),
  pathname: text("pathname").notNull(),
  contentType: text("content_type"),
  size: integer("size"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

// Blog / noticias — bilingüe (es/en). Cuerpo en Markdown. Módulo opcional.
export const articles = pgTable("articles", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").notNull().unique(),
  status: text("status").$type<ArticleStatus>().default("draft").notNull(),
  titleEs: text("title_es").notNull(),
  titleEn: text("title_en").notNull(),
  excerptEs: text("excerpt_es"),
  excerptEn: text("excerpt_en"),
  bodyEs: text("body_es"),
  bodyEn: text("body_en"),
  recommendationsEs: text("recommendations_es"),
  recommendationsEn: text("recommendations_en"),
  sourceName: text("source_name"),
  sourceUrl: text("source_url"),
  sourceDate: text("source_date"),
  category: text("category"),
  // Numeración editorial de marca (ej. "Art. 004") y SEO propio del blog de ADAF,
  // distinto del excerpt. Nullable: solo lo usa el blog público de ADAF.
  folio: text("folio"),
  metaTitleEs: text("meta_title_es"),
  metaDescriptionEs: text("meta_description_es"),
  coverUrl: text("cover_url"),
  coverPathname: text("cover_pathname"),
  authorId: uuid("author_id").references(() => users.id, { onDelete: "set null" }),
  featured: boolean("featured").default(false).notNull(),
  publishedAt: timestamp("published_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

// ===== Comentarios del sitio (anotaciones tipo BugHerd) =====

export type FeedbackStatus = "open" | "resolved";

// Enlaces de feedback: un token por cliente/ronda. El widget del sitio público solo
// aparece si la URL trae un token activo. Se crean y revocan desde el panel admin.
export const feedbackLinks = pgTable("feedback_links", {
  id: uuid("id").primaryKey().defaultRandom(),
  token: text("token").notNull().unique(),
  label: text("label").notNull(),
  active: boolean("active").default(true).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

// Notas que deja el cliente al hacer click en el sitio. Anónimas, con contexto del
// elemento clicado y posición en el documento para poder ubicar el pin.
export const feedbackNotes = pgTable("feedback_notes", {
  id: uuid("id").primaryKey().defaultRandom(),
  linkId: uuid("link_id")
    .notNull()
    .references(() => feedbackLinks.id, { onDelete: "cascade" }),
  path: text("path").notNull(),
  note: text("note").notNull(),
  selector: text("selector"),
  elementText: text("element_text"),
  xPct: integer("x_pct"),
  yPct: integer("y_pct"),
  viewportW: integer("viewport_w"),
  pageTitle: text("page_title"),
  status: text("status").$type<FeedbackStatus>().default("open").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});
