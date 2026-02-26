"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  RefreshCcw,
  Send,
  Sparkles,
  Wand2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 * ARC ScopeBot — Requirements Wizard (robust + minimal AI where needed)
 * - Deterministic wizard for collecting requirements
 * - AI used only for:
 *   1) structuring “Other notes” into structured notes + missing questions
 *   2) polishing final summary (with Continue if truncated)
 * - Sends deterministic or AI summary to WhatsApp via click-to-chat
 */

const BOT_NAME = "ARC ScopeBot";
const STORAGE_KEY = "arc_scopebot_requirements_v1";

// StaffArc WhatsApp numbers (digits only, international format)
const WHATSAPP_QUOTE_PRIMARY = "918639619426";
const WHATSAPP_QUOTE_SECONDARY = "917842932428";

const END_MARKER = "<<END>>";

type WebsiteType =
  | "static"
  | "business"
  | "ecommerce"
  | "booking"
  | "portfolio"
  | "custom";

type BuildPlatform = "code" | "wordpress" | "shopify" | "not_sure";

type Timeline =
  | "asap"
  | "1_2_weeks"
  | "2_4_weeks"
  | "1_2_months"
  | "2_3_months"
  | "flexible";

type BudgetRange =
  | "under_10k"
  | "10k_25k"
  | "25k_50k"
  | "50k_1l"
  | "1l_plus"
  | "not_sure";

type PaymentProvider =
  | "razorpay"
  | "phonepe"
  | "stripe"
  | "paypal"
  | "cash_on_delivery"
  | "not_sure";

type Hosting =
  | "already_have"
  | "need_recommendation"
  | "cloudflare"
  | "vercel"
  | "aws"
  | "other";

type ContentOwner = "client" | "staffarc" | "mixed" | "not_sure";

type StepId =
  | "intro"
  | "type"
  | "platform"
  | "features"
  | "ecommerce"
  | "pages_content"
  | "design"
  | "integrations"
  | "timeline_budget"
  | "contact"
  | "review";

type Feature =
  | "seo"
  | "analytics"
  | "contact_forms"
  | "chat_widget"
  | "performance_optimization"
  | "security_hardening"
  | "multi_language"
  | "cms"
  | "blog"
  | "admin_panel"
  | "payment_gateway"
  | "whatsapp_add_to_cart"
  | "product_catalog"
  | "inventory"
  | "coupon_discounts"
  | "shipping_integration"
  | "gst_invoices"
  | "user_accounts"
  | "wishlist"
  | "reviews_ratings"
  | "booking_calendar"
  | "lead_capture";

type AIJson = {
  structuredNotes?: string[];
  missingQuestions?: string[];
  extractedFeatures?: string[];
  assumptions?: string[];
  suggestedWebsiteType?: WebsiteType | null;
  suggestedPlatform?: BuildPlatform | null;
};

type Requirements = {
  websiteType: WebsiteType | null;
  platform: BuildPlatform | null;

  businessName: string;
  businessIndustry: string;
  targetAudience: string;
  referenceWebsites: string;
  notesOther: string;

  features: Feature[];

  ecommerce: {
    sellPhysical: boolean | null;
    sellDigital: boolean | null;
    productsCountApprox: string;

    adminPanel: boolean | null;

    paymentGateway: boolean | null;
    paymentProviders: PaymentProvider[];
    codEnabled: boolean | null;

    whatsappCart: boolean | null;
    whatsappNumber: string;
    whatsappCartMessagePreference: "simple" | "with_items" | "not_sure";

    shippingIntegration: boolean | null;
    shippingProvider: string;

    gstInvoices: boolean | null;
  };

  pages: {
    pagesCountApprox: string;
    pagesNeeded: string;

    blogNeeded: boolean | null;
    cmsNeeded: boolean | null;

    contentOwner: ContentOwner | null;
    hasLogo: boolean | null;
    hasBrandColors: boolean | null;
  };

  design: {
    style: "modern" | "minimal" | "premium" | "bold" | "corporate" | "not_sure";
    colorPreferences: string;
    animations: "none" | "light" | "rich" | "not_sure";
  };

  integrations: {
    domain: "already_have" | "need" | "not_sure";
    hosting: Hosting | null;
    email: "need_business_email" | "already_have" | "not_sure";
    analytics: boolean | null;
    seoSetup: boolean | null;
    crm: "none" | "zoho" | "hubspot" | "other" | "not_sure";
    crmOther: string;
  };

  plan: {
    timeline: Timeline | null;
    budget: BudgetRange | null;
    support: "one_time" | "monthly" | "not_sure";
  };

  contact: {
    name: string;
    phone: string;
    email: string;
    preferredContact: "whatsapp" | "call" | "email";
    city: string;
  };

  ai: {
    structuredNotes: string[];
    aiQuestions: string[];
    aiSummary: string;
    aiSummaryIncomplete: boolean;
    lastAiRunAt: number | null;
  };
};

const DEFAULT_REQ: Requirements = {
  websiteType: null,
  platform: null,

  businessName: "",
  businessIndustry: "",
  targetAudience: "",
  referenceWebsites: "",
  notesOther: "",

  features: ["seo", "contact_forms", "performance_optimization"],

  ecommerce: {
    sellPhysical: null,
    sellDigital: null,
    productsCountApprox: "",

    adminPanel: null,

    paymentGateway: null,
    paymentProviders: [],
    codEnabled: null,

    whatsappCart: null,
    whatsappNumber: "",
    whatsappCartMessagePreference: "with_items",

    shippingIntegration: null,
    shippingProvider: "",

    gstInvoices: null,
  },

  pages: {
    pagesCountApprox: "",
    pagesNeeded: "",

    blogNeeded: null,
    cmsNeeded: null,

    contentOwner: null,
    hasLogo: null,
    hasBrandColors: null,
  },

  design: {
    style: "modern",
    colorPreferences: "",
    animations: "light",
  },

  integrations: {
    domain: "not_sure",
    hosting: "need_recommendation",
    email: "not_sure",
    analytics: null,
    seoSetup: null,
    crm: "not_sure",
    crmOther: "",
  },

  plan: {
    timeline: null,
    budget: null,
    support: "not_sure",
  },

  contact: {
    name: "",
    phone: "",
    email: "",
    preferredContact: "whatsapp",
    city: "",
  },

  ai: {
    structuredNotes: [],
    aiQuestions: [],
    aiSummary: "",
    aiSummaryIncomplete: false,
    lastAiRunAt: null,
  },
};

const quickActions = [
  "Static website",
  "Business website",
  "E-commerce + Admin",
  "E-commerce + Payment",
  "Booking website",
];

function uniq<T>(arr: T[]) {
  return Array.from(new Set(arr));
}

function normalizeWhitespace(s: string) {
  return s
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function formatPhoneDigitsOnly(input: string) {
  return input.replace(/[^\d]/g, "");
}

function stripEndMarker(text: string) {
  return text.replace(new RegExp(`\\s*${END_MARKER}\\s*$`), "").trimEnd();
}

function hasEndMarker(text: string) {
  return new RegExp(`${END_MARKER}\\s*$`).test(text.trim());
}

function safeParseJson<T>(text: string): T | null {
  try {
    return JSON.parse(text) as T;
  } catch {
    return null;
  }
}

// --- SSE helpers (if /api/chat passes through Workers AI SSE) ---
function extractSseEvents(buffer: string): { events: string[]; rest: string } {
  const events: string[] = [];
  let idx = buffer.indexOf("\n\n");
  while (idx !== -1) {
    events.push(buffer.slice(0, idx));
    buffer = buffer.slice(idx + 2);
    idx = buffer.indexOf("\n\n");
  }
  return { events, rest: buffer };
}

function getDataFromSseEvent(eventBlock: string): string | null {
  const lines = eventBlock.split("\n");
  const dataLines = lines
    .filter((l) => l.startsWith("data:"))
    .map((l) => l.slice(5).trim());
  if (dataLines.length === 0) return null;
  return dataLines.join("\n");
}

async function readAIResponseAsText(
  res: Response,
  signal?: AbortSignal,
): Promise<string> {
  const contentType = res.headers.get("content-type") || "";

  if (!res.body) return normalizeWhitespace(await res.text());

  if (contentType.includes("text/event-stream")) {
    const reader = res.body.getReader();
    const decoder = new TextDecoder();

    let sseBuffer = "";
    let out = "";

    while (true) {
      if (signal?.aborted) break;
      const { done, value } = await reader.read();
      if (done) break;

      sseBuffer += decoder.decode(value, { stream: true });
      const { events, rest } = extractSseEvents(sseBuffer);
      sseBuffer = rest;

      for (const ev of events) {
        const data = getDataFromSseEvent(ev);
        if (!data) continue;
        if (data === "[DONE]") return normalizeWhitespace(out);

        const parsed = safeParseJson<{ response?: string }>(data);
        if (parsed?.response) out += parsed.response;
      }
    }

    return normalizeWhitespace(out);
  }

  return normalizeWhitespace(await res.text());
}

// -------------------- UI atoms --------------------

function SectionTitle({ title, desc }: { title: string; desc?: string }) {
  return (
    <div className="mb-3">
      <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      {desc ? <p className="text-sm text-gray-500 mt-1">{desc}</p> : null}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-sm font-semibold text-gray-700">{children}</label>
  );
}

function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400",
        "focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all",
        props.className,
      )}
    />
  );
}

function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        "w-full min-h-[110px] rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400",
        "focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all",
        props.className,
      )}
    />
  );
}

function Pill({
  selected,
  onClick,
  children,
}: {
  selected?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "px-3 py-2 rounded-xl border text-sm font-semibold transition-all",
        selected
          ? "bg-orange-50 border-orange-300 text-orange-700"
          : "bg-white border-gray-200 text-gray-600 hover:border-orange-200 hover:text-orange-600",
      )}
    >
      {children}
    </button>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1500);
      }}
      className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-600 hover:text-orange-600 hover:border-orange-200 transition-all"
      title="Copy"
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-600" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

// -------------------- Summary builder (deterministic) --------------------

function humanWebsiteType(t: WebsiteType | null) {
  switch (t) {
    case "static":
      return "Static / Landing website";
    case "business":
      return "Business website";
    case "ecommerce":
      return "E-commerce website";
    case "booking":
      return "Booking / Appointment website";
    case "portfolio":
      return "Portfolio website";
    case "custom":
      return "Custom website/app";
    default:
      return "Not decided";
  }
}

function humanPlatform(p: BuildPlatform | null) {
  switch (p) {
    case "code":
      return "Custom-coded (Next.js/React etc.)";
    case "wordpress":
      return "WordPress";
    case "shopify":
      return "Shopify";
    case "not_sure":
      return "Not sure (recommend)";
    default:
      return "Not decided";
  }
}

function buildDeterministicSummary(r: Requirements) {
  const lines: string[] = [];

  lines.push(`*${BOT_NAME} — Website Requirements Summary*`);
  lines.push("");

  lines.push(`1) Client info`);
  lines.push(`- Name: ${r.contact.name || "-"}`);
  lines.push(`- Phone: ${r.contact.phone || "-"}`);
  lines.push(`- Email: ${r.contact.email || "-"}`);
  lines.push(`- City: ${r.contact.city || "-"}`);
  lines.push("");

  lines.push(`2) Project basics`);
  lines.push(`- Website type: ${humanWebsiteType(r.websiteType)}`);
  lines.push(`- Build platform: ${humanPlatform(r.platform)}`);
  lines.push(`- Business name: ${r.businessName || "-"}`);
  lines.push(`- Industry: ${r.businessIndustry || "-"}`);
  lines.push(`- Target audience: ${r.targetAudience || "-"}`);
  if (r.referenceWebsites.trim())
    lines.push(`- Reference websites: ${r.referenceWebsites.trim()}`);
  lines.push("");

  lines.push(`3) Pages & content`);
  lines.push(`- Pages count (approx): ${r.pages.pagesCountApprox || "-"}`);
  lines.push(`- Pages needed: ${r.pages.pagesNeeded || "-"}`);
  lines.push(
    `- Blog: ${r.pages.blogNeeded === null ? "-" : r.pages.blogNeeded ? "Yes" : "No"}`,
  );
  lines.push(
    `- CMS: ${r.pages.cmsNeeded === null ? "-" : r.pages.cmsNeeded ? "Yes" : "No"}`,
  );
  lines.push(`- Content provided by: ${r.pages.contentOwner || "-"}`);
  lines.push(
    `- Logo available: ${r.pages.hasLogo === null ? "-" : r.pages.hasLogo ? "Yes" : "No"}`,
  );
  lines.push(
    `- Brand colors available: ${
      r.pages.hasBrandColors === null
        ? "-"
        : r.pages.hasBrandColors
          ? "Yes"
          : "No"
    }`,
  );
  lines.push("");

  lines.push(`4) Design preferences`);
  lines.push(`- Style: ${r.design.style}`);
  lines.push(`- Colors: ${r.design.colorPreferences || "-"}`);
  lines.push(`- Animations: ${r.design.animations}`);
  lines.push("");

  lines.push(`5) Features`);
  lines.push(`- Selected: ${r.features.length ? r.features.join(", ") : "-"}`);
  if (r.ai.structuredNotes.length) {
    lines.push(`- Structured notes:`);
    for (const n of r.ai.structuredNotes.slice(0, 10)) lines.push(`  - ${n}`);
  }
  lines.push("");

  if (r.websiteType === "ecommerce") {
    lines.push(`6) E-commerce specifics`);
    lines.push(
      `- Physical products: ${r.ecommerce.sellPhysical === null ? "-" : r.ecommerce.sellPhysical ? "Yes" : "No"}`,
    );
    lines.push(
      `- Digital products: ${r.ecommerce.sellDigital === null ? "-" : r.ecommerce.sellDigital ? "Yes" : "No"}`,
    );
    lines.push(
      `- Products count (approx): ${r.ecommerce.productsCountApprox || "-"}`,
    );
    lines.push(
      `- Admin panel: ${r.ecommerce.adminPanel === null ? "-" : r.ecommerce.adminPanel ? "Yes" : "No"}`,
    );
    lines.push(
      `- Payment gateway: ${
        r.ecommerce.paymentGateway === null
          ? "-"
          : r.ecommerce.paymentGateway
            ? "Yes"
            : "No"
      }`,
    );
    if (r.ecommerce.paymentProviders.length) {
      lines.push(
        `- Payment providers: ${r.ecommerce.paymentProviders.join(", ")}`,
      );
    }
    lines.push(
      `- COD: ${r.ecommerce.codEnabled === null ? "-" : r.ecommerce.codEnabled ? "Yes" : "No"}`,
    );
    lines.push(
      `- WhatsApp add-to-cart: ${
        r.ecommerce.whatsappCart === null
          ? "-"
          : r.ecommerce.whatsappCart
            ? "Yes"
            : "No"
      }`,
    );
    if (r.ecommerce.whatsappCart) {
      lines.push(`- WhatsApp number: ${r.ecommerce.whatsappNumber || "-"}`);
      lines.push(
        `- WhatsApp message preference: ${r.ecommerce.whatsappCartMessagePreference}`,
      );
    }
    lines.push(
      `- Shipping integration: ${
        r.ecommerce.shippingIntegration === null
          ? "-"
          : r.ecommerce.shippingIntegration
            ? "Yes"
            : "No"
      }`,
    );
    if (
      r.ecommerce.shippingIntegration &&
      r.ecommerce.shippingProvider.trim()
    ) {
      lines.push(`- Shipping provider: ${r.ecommerce.shippingProvider.trim()}`);
    }
    lines.push(
      `- GST invoices: ${r.ecommerce.gstInvoices === null ? "-" : r.ecommerce.gstInvoices ? "Yes" : "No"}`,
    );
    lines.push("");
  }

  lines.push(`7) Integrations`);
  lines.push(`- Domain: ${r.integrations.domain}`);
  lines.push(`- Hosting: ${r.integrations.hosting || "-"}`);
  lines.push(`- Business email: ${r.integrations.email}`);
  lines.push(
    `- Analytics setup: ${r.integrations.analytics === null ? "-" : r.integrations.analytics ? "Yes" : "No"}`,
  );
  lines.push(
    `- SEO setup: ${r.integrations.seoSetup === null ? "-" : r.integrations.seoSetup ? "Yes" : "No"}`,
  );
  lines.push(
    `- CRM: ${r.integrations.crm}${
      r.integrations.crm === "other"
        ? ` (${r.integrations.crmOther || "-"})`
        : ""
    }`,
  );
  lines.push("");

  lines.push(`8) Timeline & budget`);
  lines.push(`- Timeline: ${r.plan.timeline || "-"}`);
  lines.push(`- Budget: ${r.plan.budget || "-"}`);
  lines.push(`- Support: ${r.plan.support}`);
  lines.push("");

  if (r.notesOther.trim()) {
    lines.push(`9) Other notes`);
    lines.push(r.notesOther.trim());
    lines.push("");
  }

  lines.push("Please share a quote & next steps.");

  return normalizeWhitespace(lines.join("\n"));
}

// -------------------- AI prompts (minimal usage) --------------------

function buildAIJsonPrompt(r: Requirements) {
  const context = buildDeterministicSummary(r);

  return `
You are a senior website solutions consultant.

Task:
Convert the client's free-text notes into structured requirements and missing questions.

Return STRICT JSON ONLY (no markdown, no backticks), with fields:
{
  "structuredNotes": string[],
  "missingQuestions": string[],
  "extractedFeatures": string[],
  "assumptions": string[],
  "suggestedWebsiteType": "static"|"business"|"ecommerce"|"booking"|"portfolio"|"custom"|null,
  "suggestedPlatform": "code"|"wordpress"|"shopify"|"not_sure"|null
}

Rules:
- Keep questions short and actionable.
- Extract only what is supported by context.
- If unclear, add to missingQuestions.
- Do not invent client details.

Client context:
${context}
`.trim();
}

function buildAISummaryPrompt(r: Requirements, mode: "summary" | "continue") {
  const base = `
You are ${BOT_NAME}, a requirements analyst for StaffArc.
Write a clean, professional summary for a WhatsApp quote.
Use bullet points, keep it compact but complete, and include all key requirements.
Do NOT add marketing fluff.
Do NOT repeat the same point.
`.trim();

  if (mode === "summary") {
    return `
${base}
End your final output with ${END_MARKER} on its own line. Do not mention the marker.

Use this deterministic summary as source-of-truth:
${buildDeterministicSummary(r)}
`.trim();
  }

  return `
${base}
Continue EXACTLY from where the previous summary stopped.
Do not repeat any text.
End your output with ${END_MARKER} on its own line.
`.trim();
}

async function callAIJson(prompt: string): Promise<AIJson | null> {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 20000);

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        messages: [
          { role: "system", content: prompt },
          { role: "user", content: "Return JSON only." },
        ],
      }),
    });

    if (!res.ok) return null;

    const raw = await readAIResponseAsText(res, controller.signal);

    const first = raw.indexOf("{");
    const last = raw.lastIndexOf("}");
    if (first === -1 || last === -1) return null;

    const jsonText = raw.slice(first, last + 1);
    return safeParseJson<AIJson>(jsonText);
  } catch {
    return null;
  } finally {
    window.clearTimeout(timeoutId);
  }
}

async function callAIText(prompt: string, abortMs = 25000) {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), abortMs);

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        messages: [
          { role: "system", content: prompt },
          { role: "user", content: "Proceed." },
        ],
      }),
    });

    if (!res.ok) throw new Error("AI request failed");

    const raw = await readAIResponseAsText(res, controller.signal);
    return {
      text: stripEndMarker(raw),
      complete: hasEndMarker(raw),
      raw,
    };
  } finally {
    window.clearTimeout(timeoutId);
  }
}

// -------------------- Step helpers --------------------

function stepTitle(id: StepId) {
  switch (id) {
    case "intro":
      return "Start";
    case "type":
      return "Website type";
    case "platform":
      return "Platform";
    case "features":
      return "Features";
    case "ecommerce":
      return "E-commerce";
    case "pages_content":
      return "Pages & content";
    case "design":
      return "Design";
    case "integrations":
      return "Integrations";
    case "timeline_budget":
      return "Timeline & budget";
    case "contact":
      return "Contact";
    case "review":
      return "Review & send";
  }
}

function validateStep(id: StepId, r: Requirements) {
  switch (id) {
    case "type":
      return !!r.websiteType;
    case "platform":
      return !!r.platform;
    case "pages_content":
      return !!r.pages.pagesCountApprox && !!r.pages.contentOwner;
    case "timeline_budget":
      return !!r.plan.timeline && !!r.plan.budget;
    case "contact":
      return !!r.contact.name && !!r.contact.phone;
    default:
      return true;
  }
}

// -------------------- Page --------------------

export default function GetRequirementsPage() {
  const [req, setReq] = useState<Requirements>(DEFAULT_REQ);
  const [step, setStep] = useState<StepId>("intro");

  const [busyAI, setBusyAI] = useState(false);
  const [aiError, setAiError] = useState("");

  const [aiSummaryLoading, setAiSummaryLoading] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  // Load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Requirements;
      setReq((p) => ({ ...p, ...parsed }));
    } catch {
      // ignore
    }
  }, []);

  // Persist
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(req));
  }, [req]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  const steps: StepId[] = useMemo(() => {
    const base: StepId[] = [
      "intro",
      "type",
      "platform",
      "features",
      "ecommerce",
      "pages_content",
      "design",
      "integrations",
      "timeline_budget",
      "contact",
      "review",
    ];
    return base.filter((s) =>
      s === "ecommerce" ? req.websiteType === "ecommerce" : true,
    );
  }, [req.websiteType]);

  const stepIndex = steps.indexOf(step);

  const deterministicSummary = useMemo(
    () => buildDeterministicSummary(req),
    [req],
  );

  const goNext = () => {
    if (!validateStep(step, req)) return;
    const next = steps[stepIndex + 1];
    if (next) setStep(next);
  };

  const goBack = () => {
    const prev = steps[stepIndex - 1];
    if (prev) setStep(prev);
  };

  const resetAll = () => {
    localStorage.removeItem(STORAGE_KEY);
    setReq(DEFAULT_REQ);
    setStep("intro");
    setAiError("");
  };

  const toggleFeature = (f: Feature) => {
    setReq((p) => {
      const has = p.features.includes(f);
      return {
        ...p,
        features: has ? p.features.filter((x) => x !== f) : [...p.features, f],
      };
    });
  };

  const sendToWhatsApp = (number: string, text: string) => {
    const phone = formatPhoneDigitsOnly(number);
    const message = normalizeWhitespace(text);
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const runAIExtract = async () => {
    setAiError("");
    setBusyAI(true);

    try {
      const json = await callAIJson(buildAIJsonPrompt(req));
      if (!json) throw new Error("AI could not produce valid JSON.");

      setReq((p) => ({
        ...p,
        ai: {
          ...p.ai,
          structuredNotes: uniq([
            ...(p.ai.structuredNotes || []),
            ...(json.structuredNotes || []),
          ]),
          aiQuestions: uniq([
            ...(p.ai.aiQuestions || []),
            ...(json.missingQuestions || []),
          ]),
          lastAiRunAt: Date.now(),
        },
        websiteType: json.suggestedWebsiteType ?? p.websiteType,
        platform: json.suggestedPlatform ?? p.platform,
      }));

      // Best-effort mapping of extractedFeatures -> our feature enums
      const extracted = (json.extractedFeatures || []).map((x) =>
        x.toLowerCase(),
      );

      setReq((p) => {
        const next = new Set(p.features);

        if (extracted.some((x) => x.includes("seo"))) next.add("seo");
        if (extracted.some((x) => x.includes("analytic")))
          next.add("analytics");
        if (extracted.some((x) => x.includes("payment")))
          next.add("payment_gateway");
        if (extracted.some((x) => x.includes("admin"))) next.add("admin_panel");
        if (extracted.some((x) => x.includes("whatsapp")))
          next.add("whatsapp_add_to_cart");
        if (extracted.some((x) => x.includes("blog"))) next.add("blog");
        if (extracted.some((x) => x.includes("cms"))) next.add("cms");
        if (extracted.some((x) => x.includes("shipping")))
          next.add("shipping_integration");
        if (extracted.some((x) => x.includes("gst"))) next.add("gst_invoices");

        return { ...p, features: Array.from(next) };
      });
    } catch (e: any) {
      setAiError(e?.message || "AI failed");
    } finally {
      setBusyAI(false);
    }
  };

  const runAISummary = async () => {
    setAiError("");
    setAiSummaryLoading(true);

    try {
      const { text, complete } = await callAIText(
        buildAISummaryPrompt(req, "summary"),
        25000,
      );
      setReq((p) => ({
        ...p,
        ai: {
          ...p.ai,
          aiSummary: text,
          aiSummaryIncomplete: !complete,
        },
      }));
    } catch (e: any) {
      setAiError(e?.message || "AI summary failed");
    } finally {
      setAiSummaryLoading(false);
    }
  };

  const continueAISummary = async () => {
    setAiError("");
    setAiSummaryLoading(true);

    try {
      const prompt =
        buildAISummaryPrompt(req, "continue") +
        `\n\nPrevious partial summary:\n${req.ai.aiSummary}\n`;

      const { text, complete } = await callAIText(prompt, 25000);

      setReq((p) => ({
        ...p,
        ai: {
          ...p.ai,
          aiSummary: normalizeWhitespace(`${p.ai.aiSummary}\n${text}`),
          aiSummaryIncomplete: !complete,
        },
      }));
    } catch (e: any) {
      setAiError(e?.message || "AI continue failed");
    } finally {
      setAiSummaryLoading(false);
    }
  };

  const renderStepBody = () => {
    switch (step) {
      case "intro":
        return (
          <div className="space-y-4">
            <SectionTitle
              title={`${BOT_NAME} — Website Requirements`}
              desc="Answer a few questions. At the end, you can send the summary to WhatsApp for a quote."
            />

            <div className="rounded-2xl border border-orange-100 bg-orange-50/60 p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-orange-100">
                  <Bot className="h-5 w-5 text-orange-600" />
                </div>
                <div className="text-sm text-gray-700 leading-relaxed">
                  <p className="font-semibold text-gray-900">How this works</p>
                  <p className="mt-1">
                    You’ll pick website type, platform, features, pages,
                    integrations, timeline, budget, and contact details.
                  </p>
                  <p className="mt-1">
                    AI is used only to structure “Other notes” and optionally
                    polish the final summary.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-4">
              <p className="text-sm font-bold text-gray-900">Quick start</p>
              <p className="text-sm text-gray-600 mt-1">Pick one:</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {quickActions.map((action) => (
                  <Pill
                    key={action}
                    onClick={() => {
                      if (action.startsWith("Static")) {
                        setReq((p) => ({ ...p, websiteType: "static" }));
                        setStep("type");
                      } else if (action.startsWith("Business")) {
                        setReq((p) => ({ ...p, websiteType: "business" }));
                        setStep("type");
                      } else if (action.startsWith("E-commerce + Admin")) {
                        setReq((p) => ({
                          ...p,
                          websiteType: "ecommerce",
                          features: uniq([
                            ...p.features,
                            "product_catalog",
                            "admin_panel",
                          ]),
                          ecommerce: { ...p.ecommerce, adminPanel: true },
                        }));
                        setStep("type");
                      } else if (action.startsWith("E-commerce + Payment")) {
                        setReq((p) => ({
                          ...p,
                          websiteType: "ecommerce",
                          features: uniq([
                            ...p.features,
                            "product_catalog",
                            "admin_panel",
                            "payment_gateway",
                          ]),
                          ecommerce: {
                            ...p.ecommerce,
                            adminPanel: true,
                            paymentGateway: true,
                          },
                        }));
                        setStep("type");
                      } else if (action.startsWith("Booking")) {
                        setReq((p) => ({
                          ...p,
                          websiteType: "booking",
                          features: uniq([...p.features, "booking_calendar"]),
                        }));
                        setStep("type");
                      }
                    }}
                  >
                    {action}
                  </Pill>
                ))}
              </div>
            </div>
          </div>
        );

      case "type":
        return (
          <div className="space-y-4">
            <SectionTitle title="What kind of website do you need?" />

            <div className="flex flex-wrap gap-2">
              {(
                [
                  ["static", "Static / Landing"],
                  ["business", "Business"],
                  ["portfolio", "Portfolio"],
                  ["booking", "Booking / Appointments"],
                  ["ecommerce", "E-commerce"],
                  ["custom", "Custom (explain later)"],
                ] as Array<[WebsiteType, string]>
              ).map(([id, label]) => (
                <Pill
                  key={id}
                  selected={req.websiteType === id}
                  onClick={() =>
                    setReq((p) => ({
                      ...p,
                      websiteType: id,
                      features: uniq([
                        ...p.features,
                        ...(id === "ecommerce"
                          ? (["product_catalog", "admin_panel"] as Feature[])
                          : []),
                      ]),
                    }))
                  }
                >
                  {label}
                </Pill>
              ))}
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div>
                <Label>Target audience (optional)</Label>
                <TextInput
                  value={req.targetAudience}
                  onChange={(e) =>
                    setReq((p) => ({ ...p, targetAudience: e.target.value }))
                  }
                  placeholder="e.g., local customers, B2B clients, etc."
                />
              </div>
              <div>
                <Label>Reference websites (optional)</Label>
                <TextInput
                  value={req.referenceWebsites}
                  onChange={(e) =>
                    setReq((p) => ({ ...p, referenceWebsites: e.target.value }))
                  }
                  placeholder="Paste 1–3 URLs"
                />
              </div>
            </div>

            {!validateStep("type", req) ? (
              <p className="text-sm font-semibold text-orange-700">
                Please choose a website type to proceed.
              </p>
            ) : null}
          </div>
        );

      case "platform":
        return (
          <div className="space-y-4">
            <SectionTitle
              title="How should we build it?"
              desc="If you’re unsure, select Recommend."
            />

            <div className="flex flex-wrap gap-2">
              {(
                [
                  ["code", "Custom coding"],
                  ["wordpress", "WordPress"],
                  ["shopify", "Shopify"],
                  ["not_sure", "Recommend"],
                ] as Array<[BuildPlatform, string]>
              ).map(([id, label]) => (
                <Pill
                  key={id}
                  selected={req.platform === id}
                  onClick={() => setReq((p) => ({ ...p, platform: id }))}
                >
                  {label}
                </Pill>
              ))}
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-4 space-y-3">
              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <Label>Business name (optional)</Label>
                  <TextInput
                    value={req.businessName}
                    onChange={(e) =>
                      setReq((p) => ({ ...p, businessName: e.target.value }))
                    }
                    placeholder="e.g., ABC Traders"
                  />
                </div>
                <div>
                  <Label>Industry (optional)</Label>
                  <TextInput
                    value={req.businessIndustry}
                    onChange={(e) =>
                      setReq((p) => ({
                        ...p,
                        businessIndustry: e.target.value,
                      }))
                    }
                    placeholder="e.g., Restaurants, Clothing, IT Services"
                  />
                </div>
              </div>

              <div>
                <Label>Other notes (optional)</Label>
                <TextArea
                  value={req.notesOther}
                  onChange={(e) =>
                    setReq((p) => ({ ...p, notesOther: e.target.value }))
                  }
                  placeholder="Anything special: multi-language, roles, invoice format, etc."
                />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  disabled={busyAI || !req.notesOther.trim()}
                  onClick={runAIExtract}
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-700 disabled:opacity-50"
                  title="Use AI to structure your notes + list missing questions"
                >
                  <Wand2 className="h-4 w-4" />
                  Structure notes with AI
                </button>
                {busyAI ? (
                  <span className="text-sm text-gray-500">Working…</span>
                ) : null}
              </div>

              {aiError ? (
                <p className="text-sm font-semibold text-red-600">{aiError}</p>
              ) : null}

              {req.ai.structuredNotes.length ? (
                <div className="rounded-xl border border-orange-100 bg-orange-50 p-3">
                  <p className="text-sm font-bold text-gray-900">
                    Structured notes
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                    {req.ai.structuredNotes.slice(0, 10).map((x, i) => (
                      <li key={i}>{x}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {req.ai.aiQuestions.length ? (
                <div className="rounded-xl border border-gray-200 bg-white p-3">
                  <p className="text-sm font-bold text-gray-900">
                    Missing questions (AI)
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                    {req.ai.aiQuestions.slice(0, 12).map((q, i) => (
                      <li key={i}>{q}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            {!validateStep("platform", req) ? (
              <p className="text-sm font-semibold text-orange-700">
                Please select a platform to proceed.
              </p>
            ) : null}
          </div>
        );

      case "features":
        return (
          <div className="space-y-4">
            <SectionTitle
              title="Which features do you need?"
              desc="Select what’s needed (you can change later)."
            />

            <div className="rounded-2xl border border-gray-200 bg-white p-4 space-y-4">
              <div>
                <p className="text-sm font-bold text-gray-900">Core</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(
                    [
                      ["seo", "SEO basics"],
                      ["analytics", "Analytics"],
                      ["contact_forms", "Contact forms"],
                      ["chat_widget", "Chat widget"],
                      ["performance_optimization", "Performance"],
                      ["security_hardening", "Security hardening"],
                      ["multi_language", "Multi-language"],
                      ["cms", "CMS"],
                      ["blog", "Blog"],
                    ] as Array<[Feature, string]>
                  ).map(([id, label]) => (
                    <Pill
                      key={id}
                      selected={req.features.includes(id)}
                      onClick={() => toggleFeature(id)}
                    >
                      {label}
                    </Pill>
                  ))}
                </div>
              </div>

              <div className="border-t border-dashed border-gray-200 pt-4">
                <p className="text-sm font-bold text-gray-900">E-commerce</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(
                    [
                      ["product_catalog", "Product catalog"],
                      ["admin_panel", "Admin panel"],
                      ["payment_gateway", "Payment gateway"],
                      ["whatsapp_add_to_cart", "Add-to-cart → WhatsApp"],
                      ["inventory", "Inventory"],
                      ["coupon_discounts", "Coupons/discounts"],
                      ["shipping_integration", "Shipping integration"],
                      ["gst_invoices", "GST invoices"],
                      ["user_accounts", "User accounts"],
                      ["wishlist", "Wishlist"],
                      ["reviews_ratings", "Reviews/ratings"],
                    ] as Array<[Feature, string]>
                  ).map(([id, label]) => (
                    <Pill
                      key={id}
                      selected={req.features.includes(id)}
                      onClick={() => toggleFeature(id)}
                    >
                      {label}
                    </Pill>
                  ))}
                </div>
              </div>

              <div className="border-t border-dashed border-gray-200 pt-4">
                <p className="text-sm font-bold text-gray-900">Bookings</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(
                    [
                      ["booking_calendar", "Booking calendar"],
                      ["lead_capture", "Lead capture"],
                    ] as Array<[Feature, string]>
                  ).map(([id, label]) => (
                    <Pill
                      key={id}
                      selected={req.features.includes(id)}
                      onClick={() => toggleFeature(id)}
                    >
                      {label}
                    </Pill>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-4 space-y-3">
              <Label>Anything else? (optional)</Label>
              <TextArea
                value={req.notesOther}
                onChange={(e) =>
                  setReq((p) => ({ ...p, notesOther: e.target.value }))
                }
                placeholder="Example: 'role-based access, downloadable invoices, SEO blog with categories…'"
              />
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  disabled={busyAI || !req.notesOther.trim()}
                  onClick={runAIExtract}
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-700 disabled:opacity-50"
                >
                  <Wand2 className="h-4 w-4" />
                  Use AI to structure
                </button>
                {busyAI ? (
                  <span className="text-sm text-gray-500">Working…</span>
                ) : null}
              </div>
              {aiError ? (
                <p className="text-sm font-semibold text-red-600">{aiError}</p>
              ) : null}
            </div>
          </div>
        );

      case "ecommerce":
        return (
          <div className="space-y-4">
            <SectionTitle
              title="E-commerce details"
              desc="Shown because you selected an e-commerce website."
            />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-4 space-y-3">
                <p className="text-sm font-bold text-gray-900">Products</p>

                <div>
                  <Label>Physical products?</Label>
                  <div className="mt-2 flex gap-2">
                    <Pill
                      selected={req.ecommerce.sellPhysical === true}
                      onClick={() =>
                        setReq((p) => ({
                          ...p,
                          ecommerce: { ...p.ecommerce, sellPhysical: true },
                        }))
                      }
                    >
                      Yes
                    </Pill>
                    <Pill
                      selected={req.ecommerce.sellPhysical === false}
                      onClick={() =>
                        setReq((p) => ({
                          ...p,
                          ecommerce: { ...p.ecommerce, sellPhysical: false },
                        }))
                      }
                    >
                      No
                    </Pill>
                  </div>
                </div>

                <div>
                  <Label>Digital products?</Label>
                  <div className="mt-2 flex gap-2">
                    <Pill
                      selected={req.ecommerce.sellDigital === true}
                      onClick={() =>
                        setReq((p) => ({
                          ...p,
                          ecommerce: { ...p.ecommerce, sellDigital: true },
                        }))
                      }
                    >
                      Yes
                    </Pill>
                    <Pill
                      selected={req.ecommerce.sellDigital === false}
                      onClick={() =>
                        setReq((p) => ({
                          ...p,
                          ecommerce: { ...p.ecommerce, sellDigital: false },
                        }))
                      }
                    >
                      No
                    </Pill>
                  </div>
                </div>

                <div>
                  <Label>Approx product count</Label>
                  <TextInput
                    value={req.ecommerce.productsCountApprox}
                    onChange={(e) =>
                      setReq((p) => ({
                        ...p,
                        ecommerce: {
                          ...p.ecommerce,
                          productsCountApprox: e.target.value,
                        },
                      }))
                    }
                    placeholder="e.g., 20 / 200 / 2000"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-4 space-y-3">
                <p className="text-sm font-bold text-gray-900">Checkout</p>

                <div>
                  <Label>Admin panel needed?</Label>
                  <div className="mt-2 flex gap-2">
                    <Pill
                      selected={req.ecommerce.adminPanel === true}
                      onClick={() =>
                        setReq((p) => ({
                          ...p,
                          ecommerce: { ...p.ecommerce, adminPanel: true },
                          features: uniq([...p.features, "admin_panel"]),
                        }))
                      }
                    >
                      Yes
                    </Pill>
                    <Pill
                      selected={req.ecommerce.adminPanel === false}
                      onClick={() =>
                        setReq((p) => ({
                          ...p,
                          ecommerce: { ...p.ecommerce, adminPanel: false },
                        }))
                      }
                    >
                      No
                    </Pill>
                  </div>
                </div>

                <div>
                  <Label>Payment gateway needed?</Label>
                  <div className="mt-2 flex gap-2">
                    <Pill
                      selected={req.ecommerce.paymentGateway === true}
                      onClick={() =>
                        setReq((p) => ({
                          ...p,
                          ecommerce: { ...p.ecommerce, paymentGateway: true },
                          features: uniq([...p.features, "payment_gateway"]),
                        }))
                      }
                    >
                      Yes
                    </Pill>
                    <Pill
                      selected={req.ecommerce.paymentGateway === false}
                      onClick={() =>
                        setReq((p) => ({
                          ...p,
                          ecommerce: {
                            ...p.ecommerce,
                            paymentGateway: false,
                            paymentProviders: [],
                          },
                        }))
                      }
                    >
                      No
                    </Pill>
                  </div>
                </div>

                {req.ecommerce.paymentGateway ? (
                  <div>
                    <Label>Payment providers</Label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {(
                        [
                          ["razorpay", "Razorpay"],
                          ["phonepe", "PhonePe"],
                          ["stripe", "Stripe"],
                          ["paypal", "PayPal"],
                          ["cash_on_delivery", "Cash on Delivery"],
                          ["not_sure", "Not sure"],
                        ] as Array<[PaymentProvider, string]>
                      ).map(([id, label]) => (
                        <Pill
                          key={id}
                          selected={req.ecommerce.paymentProviders.includes(id)}
                          onClick={() =>
                            setReq((p) => {
                              const has =
                                p.ecommerce.paymentProviders.includes(id);
                              const next = has
                                ? p.ecommerce.paymentProviders.filter(
                                    (x) => x !== id,
                                  )
                                : [...p.ecommerce.paymentProviders, id];
                              return {
                                ...p,
                                ecommerce: {
                                  ...p.ecommerce,
                                  paymentProviders: next,
                                },
                              };
                            })
                          }
                        >
                          {label}
                        </Pill>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div>
                  <Label>COD enabled?</Label>
                  <div className="mt-2 flex gap-2">
                    <Pill
                      selected={req.ecommerce.codEnabled === true}
                      onClick={() =>
                        setReq((p) => ({
                          ...p,
                          ecommerce: { ...p.ecommerce, codEnabled: true },
                        }))
                      }
                    >
                      Yes
                    </Pill>
                    <Pill
                      selected={req.ecommerce.codEnabled === false}
                      onClick={() =>
                        setReq((p) => ({
                          ...p,
                          ecommerce: { ...p.ecommerce, codEnabled: false },
                        }))
                      }
                    >
                      No
                    </Pill>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-4 space-y-4">
              <p className="text-sm font-bold text-gray-900">
                WhatsApp add-to-cart
              </p>

              <div>
                <Label>Do you want Add-to-cart → WhatsApp integration?</Label>
                <div className="mt-2 flex gap-2">
                  <Pill
                    selected={req.ecommerce.whatsappCart === true}
                    onClick={() =>
                      setReq((p) => ({
                        ...p,
                        ecommerce: { ...p.ecommerce, whatsappCart: true },
                        features: uniq([...p.features, "whatsapp_add_to_cart"]),
                      }))
                    }
                  >
                    Yes
                  </Pill>
                  <Pill
                    selected={req.ecommerce.whatsappCart === false}
                    onClick={() =>
                      setReq((p) => ({
                        ...p,
                        ecommerce: {
                          ...p.ecommerce,
                          whatsappCart: false,
                          whatsappNumber: "",
                        },
                      }))
                    }
                  >
                    No
                  </Pill>
                </div>
              </div>

              {req.ecommerce.whatsappCart ? (
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <Label>WhatsApp number to receive orders</Label>
                    <TextInput
                      value={req.ecommerce.whatsappNumber}
                      onChange={(e) =>
                        setReq((p) => ({
                          ...p,
                          ecommerce: {
                            ...p.ecommerce,
                            whatsappNumber: e.target.value,
                          },
                        }))
                      }
                      placeholder="e.g., +91 98xxxxxx (digits ok)"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Tip: keep it as digits-only international format.
                    </p>
                  </div>

                  <div>
                    <Label>Message style</Label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Pill
                        selected={
                          req.ecommerce.whatsappCartMessagePreference ===
                          "simple"
                        }
                        onClick={() =>
                          setReq((p) => ({
                            ...p,
                            ecommerce: {
                              ...p.ecommerce,
                              whatsappCartMessagePreference: "simple",
                            },
                          }))
                        }
                      >
                        Simple
                      </Pill>

                      <Pill
                        selected={
                          req.ecommerce.whatsappCartMessagePreference ===
                          "with_items"
                        }
                        onClick={() =>
                          setReq((p) => ({
                            ...p,
                            ecommerce: {
                              ...p.ecommerce,
                              whatsappCartMessagePreference: "with_items",
                            },
                          }))
                        }
                      >
                        With items list
                      </Pill>

                      <Pill
                        selected={
                          req.ecommerce.whatsappCartMessagePreference ===
                          "not_sure"
                        }
                        onClick={() =>
                          setReq((p) => ({
                            ...p,
                            ecommerce: {
                              ...p.ecommerce,
                              whatsappCartMessagePreference: "not_sure",
                            },
                          }))
                        }
                      >
                        Not sure
                      </Pill>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-4 space-y-4">
              <p className="text-sm font-bold text-gray-900">Shipping & GST</p>

              <div>
                <Label>Shipping integration needed?</Label>
                <div className="mt-2 flex gap-2">
                  <Pill
                    selected={req.ecommerce.shippingIntegration === true}
                    onClick={() =>
                      setReq((p) => ({
                        ...p,
                        ecommerce: {
                          ...p.ecommerce,
                          shippingIntegration: true,
                        },
                        features: uniq([...p.features, "shipping_integration"]),
                      }))
                    }
                  >
                    Yes
                  </Pill>
                  <Pill
                    selected={req.ecommerce.shippingIntegration === false}
                    onClick={() =>
                      setReq((p) => ({
                        ...p,
                        ecommerce: {
                          ...p.ecommerce,
                          shippingIntegration: false,
                          shippingProvider: "",
                        },
                      }))
                    }
                  >
                    No
                  </Pill>
                </div>
              </div>

              {req.ecommerce.shippingIntegration ? (
                <div>
                  <Label>Shipping provider (optional)</Label>
                  <TextInput
                    value={req.ecommerce.shippingProvider}
                    onChange={(e) =>
                      setReq((p) => ({
                        ...p,
                        ecommerce: {
                          ...p.ecommerce,
                          shippingProvider: e.target.value,
                        },
                      }))
                    }
                    placeholder="e.g., Shiprocket / Delhivery / Custom"
                  />
                </div>
              ) : null}

              <div>
                <Label>GST invoices required?</Label>
                <div className="mt-2 flex gap-2">
                  <Pill
                    selected={req.ecommerce.gstInvoices === true}
                    onClick={() =>
                      setReq((p) => ({
                        ...p,
                        ecommerce: { ...p.ecommerce, gstInvoices: true },
                        features: uniq([...p.features, "gst_invoices"]),
                      }))
                    }
                  >
                    Yes
                  </Pill>
                  <Pill
                    selected={req.ecommerce.gstInvoices === false}
                    onClick={() =>
                      setReq((p) => ({
                        ...p,
                        ecommerce: { ...p.ecommerce, gstInvoices: false },
                      }))
                    }
                  >
                    No
                  </Pill>
                </div>
              </div>
            </div>
          </div>
        );

      case "pages_content":
        return (
          <div className="space-y-4">
            <SectionTitle
              title="Pages & content"
              desc="This helps estimate effort and timeline."
            />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-4 space-y-3">
                <div>
                  <Label>Approx pages count</Label>
                  <TextInput
                    value={req.pages.pagesCountApprox}
                    onChange={(e) =>
                      setReq((p) => ({
                        ...p,
                        pages: { ...p.pages, pagesCountApprox: e.target.value },
                      }))
                    }
                    placeholder="e.g., 1-5 / 6-10 / 10+"
                  />
                </div>

                <div>
                  <Label>Pages needed (list)</Label>
                  <TextArea
                    value={req.pages.pagesNeeded}
                    onChange={(e) =>
                      setReq((p) => ({
                        ...p,
                        pages: { ...p.pages, pagesNeeded: e.target.value },
                      }))
                    }
                    placeholder="Home, About, Services, Pricing, Contact, FAQ..."
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-4 space-y-3">
                <div>
                  <Label>Blog needed?</Label>
                  <div className="mt-2 flex gap-2">
                    <Pill
                      selected={req.pages.blogNeeded === true}
                      onClick={() =>
                        setReq((p) => ({
                          ...p,
                          pages: { ...p.pages, blogNeeded: true },
                          features: uniq([...p.features, "blog"]),
                        }))
                      }
                    >
                      Yes
                    </Pill>
                    <Pill
                      selected={req.pages.blogNeeded === false}
                      onClick={() =>
                        setReq((p) => ({
                          ...p,
                          pages: { ...p.pages, blogNeeded: false },
                        }))
                      }
                    >
                      No
                    </Pill>
                  </div>
                </div>

                <div>
                  <Label>CMS needed?</Label>
                  <div className="mt-2 flex gap-2">
                    <Pill
                      selected={req.pages.cmsNeeded === true}
                      onClick={() =>
                        setReq((p) => ({
                          ...p,
                          pages: { ...p.pages, cmsNeeded: true },
                          features: uniq([...p.features, "cms"]),
                        }))
                      }
                    >
                      Yes
                    </Pill>
                    <Pill
                      selected={req.pages.cmsNeeded === false}
                      onClick={() =>
                        setReq((p) => ({
                          ...p,
                          pages: { ...p.pages, cmsNeeded: false },
                        }))
                      }
                    >
                      No
                    </Pill>
                  </div>
                </div>

                <div>
                  <Label>Content provided by</Label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(
                      [
                        ["client", "Client"],
                        ["staffarc", "StaffArc"],
                        ["mixed", "Mixed"],
                        ["not_sure", "Not sure"],
                      ] as Array<[ContentOwner, string]>
                    ).map(([id, label]) => (
                      <Pill
                        key={id}
                        selected={req.pages.contentOwner === id}
                        onClick={() =>
                          setReq((p) => ({
                            ...p,
                            pages: { ...p.pages, contentOwner: id },
                          }))
                        }
                      >
                        {label}
                      </Pill>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <Label>Logo available?</Label>
                    <div className="mt-2 flex gap-2">
                      <Pill
                        selected={req.pages.hasLogo === true}
                        onClick={() =>
                          setReq((p) => ({
                            ...p,
                            pages: { ...p.pages, hasLogo: true },
                          }))
                        }
                      >
                        Yes
                      </Pill>
                      <Pill
                        selected={req.pages.hasLogo === false}
                        onClick={() =>
                          setReq((p) => ({
                            ...p,
                            pages: { ...p.pages, hasLogo: false },
                          }))
                        }
                      >
                        No
                      </Pill>
                    </div>
                  </div>

                  <div>
                    <Label>Brand colors ready?</Label>
                    <div className="mt-2 flex gap-2">
                      <Pill
                        selected={req.pages.hasBrandColors === true}
                        onClick={() =>
                          setReq((p) => ({
                            ...p,
                            pages: { ...p.pages, hasBrandColors: true },
                          }))
                        }
                      >
                        Yes
                      </Pill>
                      <Pill
                        selected={req.pages.hasBrandColors === false}
                        onClick={() =>
                          setReq((p) => ({
                            ...p,
                            pages: { ...p.pages, hasBrandColors: false },
                          }))
                        }
                      >
                        No
                      </Pill>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {!validateStep("pages_content", req) ? (
              <p className="text-sm font-semibold text-orange-700">
                Please fill “Approx pages count” and choose “Content provided
                by” to proceed.
              </p>
            ) : null}
          </div>
        );

      case "design":
        return (
          <div className="space-y-4">
            <SectionTitle
              title="Design preferences"
              desc="Helps us match your style quickly."
            />

            <div className="rounded-2xl border border-gray-200 bg-white p-4 space-y-4">
              <div>
                <Label>Style</Label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(
                    [
                      ["modern", "Modern"],
                      ["minimal", "Minimal"],
                      ["premium", "Premium"],
                      ["bold", "Bold"],
                      ["corporate", "Corporate"],
                      ["not_sure", "Not sure"],
                    ] as const
                  ).map(([id, label]) => (
                    <Pill
                      key={id}
                      selected={req.design.style === id}
                      onClick={() =>
                        setReq((p) => ({
                          ...p,
                          design: { ...p.design, style: id },
                        }))
                      }
                    >
                      {label}
                    </Pill>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label>Color preferences (optional)</Label>
                  <TextInput
                    value={req.design.colorPreferences}
                    onChange={(e) =>
                      setReq((p) => ({
                        ...p,
                        design: {
                          ...p.design,
                          colorPreferences: e.target.value,
                        },
                      }))
                    }
                    placeholder="e.g., orange + white, blue theme…"
                  />
                </div>

                <div>
                  <Label>Animations</Label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(
                      [
                        ["none", "None"],
                        ["light", "Light"],
                        ["rich", "Rich"],
                        ["not_sure", "Not sure"],
                      ] as const
                    ).map(([id, label]) => (
                      <Pill
                        key={id}
                        selected={req.design.animations === id}
                        onClick={() =>
                          setReq((p) => ({
                            ...p,
                            design: { ...p.design, animations: id },
                          }))
                        }
                      >
                        {label}
                      </Pill>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <Label>Reference websites (optional)</Label>
                <TextArea
                  value={req.referenceWebsites}
                  onChange={(e) =>
                    setReq((p) => ({ ...p, referenceWebsites: e.target.value }))
                  }
                  placeholder="Paste links you like (design inspirations)"
                />
              </div>
            </div>
          </div>
        );

      case "integrations":
        return (
          <div className="space-y-4">
            <SectionTitle
              title="Integrations"
              desc="Domain/hosting/email/SEO tools etc."
            />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-4 space-y-4">
                <div>
                  <Label>Domain</Label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(
                      [
                        ["already_have", "Already have"],
                        ["need", "Need new domain"],
                        ["not_sure", "Not sure"],
                      ] as const
                    ).map(([id, label]) => (
                      <Pill
                        key={id}
                        selected={req.integrations.domain === id}
                        onClick={() =>
                          setReq((p) => ({
                            ...p,
                            integrations: { ...p.integrations, domain: id },
                          }))
                        }
                      >
                        {label}
                      </Pill>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Hosting preference</Label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(
                      [
                        ["need_recommendation", "Recommend"],
                        ["already_have", "Already have hosting"],
                        ["vercel", "Vercel"],
                        ["cloudflare", "Cloudflare"],
                        ["aws", "AWS"],
                        ["other", "Other"],
                      ] as const
                    ).map(([id, label]) => (
                      <Pill
                        key={id}
                        selected={req.integrations.hosting === id}
                        onClick={() =>
                          setReq((p) => ({
                            ...p,
                            integrations: { ...p.integrations, hosting: id },
                          }))
                        }
                      >
                        {label}
                      </Pill>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Business email</Label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(
                      [
                        ["need_business_email", "Need business email"],
                        ["already_have", "Already have"],
                        ["not_sure", "Not sure"],
                      ] as const
                    ).map(([id, label]) => (
                      <Pill
                        key={id}
                        selected={req.integrations.email === id}
                        onClick={() =>
                          setReq((p) => ({
                            ...p,
                            integrations: { ...p.integrations, email: id },
                          }))
                        }
                      >
                        {label}
                      </Pill>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-4 space-y-4">
                <div>
                  <Label>Analytics setup needed?</Label>
                  <div className="mt-2 flex gap-2">
                    <Pill
                      selected={req.integrations.analytics === true}
                      onClick={() =>
                        setReq((p) => ({
                          ...p,
                          integrations: { ...p.integrations, analytics: true },
                          features: uniq([...p.features, "analytics"]),
                        }))
                      }
                    >
                      Yes
                    </Pill>
                    <Pill
                      selected={req.integrations.analytics === false}
                      onClick={() =>
                        setReq((p) => ({
                          ...p,
                          integrations: { ...p.integrations, analytics: false },
                        }))
                      }
                    >
                      No
                    </Pill>
                  </div>
                </div>

                <div>
                  <Label>SEO setup needed?</Label>
                  <div className="mt-2 flex gap-2">
                    <Pill
                      selected={req.integrations.seoSetup === true}
                      onClick={() =>
                        setReq((p) => ({
                          ...p,
                          integrations: { ...p.integrations, seoSetup: true },
                          features: uniq([...p.features, "seo"]),
                        }))
                      }
                    >
                      Yes
                    </Pill>
                    <Pill
                      selected={req.integrations.seoSetup === false}
                      onClick={() =>
                        setReq((p) => ({
                          ...p,
                          integrations: { ...p.integrations, seoSetup: false },
                        }))
                      }
                    >
                      No
                    </Pill>
                  </div>
                </div>

                <div>
                  <Label>CRM (optional)</Label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(
                      [
                        ["none", "None"],
                        ["zoho", "Zoho"],
                        ["hubspot", "HubSpot"],
                        ["other", "Other"],
                        ["not_sure", "Not sure"],
                      ] as const
                    ).map(([id, label]) => (
                      <Pill
                        key={id}
                        selected={req.integrations.crm === id}
                        onClick={() =>
                          setReq((p) => ({
                            ...p,
                            integrations: { ...p.integrations, crm: id },
                          }))
                        }
                      >
                        {label}
                      </Pill>
                    ))}

                    {req.integrations.crm === "other" ? (
                      <div className="mt-3">
                        <TextInput
                          value={req.integrations.crmOther}
                          onChange={(e) =>
                            setReq((p) => ({
                              ...p,
                              integrations: {
                                ...p.integrations,
                                crmOther: e.target.value,
                              },
                            }))
                          }
                          placeholder="CRM name"
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "timeline_budget":
        return (
          <div className="space-y-4">
            <SectionTitle
              title="Timeline & budget"
              desc="Used only to prepare an accurate quote."
            />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-4 space-y-4">
                <div>
                  <Label>Timeline</Label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(
                      [
                        ["asap", "ASAP"],
                        ["1_2_weeks", "1–2 weeks"],
                        ["2_4_weeks", "2–4 weeks"],
                        ["1_2_months", "1–2 months"],
                        ["2_3_months", "2–3 months"],
                        ["flexible", "Flexible"],
                      ] as Array<[Timeline, string]>
                    ).map(([id, label]) => (
                      <Pill
                        key={id}
                        selected={req.plan.timeline === id}
                        onClick={() =>
                          setReq((p) => ({
                            ...p,
                            plan: { ...p.plan, timeline: id },
                          }))
                        }
                      >
                        {label}
                      </Pill>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Support</Label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(
                      [
                        ["one_time", "One-time delivery"],
                        ["monthly", "Monthly maintenance"],
                        ["not_sure", "Not sure"],
                      ] as const
                    ).map(([id, label]) => (
                      <Pill
                        key={id}
                        selected={req.plan.support === id}
                        onClick={() =>
                          setReq((p) => ({
                            ...p,
                            plan: { ...p.plan, support: id },
                          }))
                        }
                      >
                        {label}
                      </Pill>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-4 space-y-4">
                <div>
                  <Label>Budget range</Label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(
                      [
                        ["under_10k", "Under 10k"],
                        ["10k_25k", "10k–25k"],
                        ["25k_50k", "25k–50k"],
                        ["50k_1l", "50k–1L"],
                        ["1l_plus", "1L+"],
                        ["not_sure", "Not sure"],
                      ] as Array<[BudgetRange, string]>
                    ).map(([id, label]) => (
                      <Pill
                        key={id}
                        selected={req.plan.budget === id}
                        onClick={() =>
                          setReq((p) => ({
                            ...p,
                            plan: { ...p.plan, budget: id },
                          }))
                        }
                      >
                        {label}
                      </Pill>
                    ))}
                  </div>
                </div>

                {!validateStep("timeline_budget", req) ? (
                  <p className="text-sm font-semibold text-orange-700">
                    Please select Timeline and Budget to proceed.
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        );

      case "contact":
        return (
          <div className="space-y-4">
            <SectionTitle
              title="Contact details"
              desc="So we can send the quote and follow up."
            />

            <div className="rounded-2xl border border-gray-200 bg-white p-4 grid gap-4 md:grid-cols-2">
              <div>
                <Label>Your name</Label>
                <TextInput
                  value={req.contact.name}
                  onChange={(e) =>
                    setReq((p) => ({
                      ...p,
                      contact: { ...p.contact, name: e.target.value },
                    }))
                  }
                  placeholder="Full name"
                />
              </div>

              <div>
                <Label>Phone (WhatsApp preferred)</Label>
                <TextInput
                  value={req.contact.phone}
                  onChange={(e) =>
                    setReq((p) => ({
                      ...p,
                      contact: { ...p.contact, phone: e.target.value },
                    }))
                  }
                  placeholder="+91 9xxxxxxxxx"
                />
              </div>

              <div>
                <Label>Email (optional)</Label>
                <TextInput
                  value={req.contact.email}
                  onChange={(e) =>
                    setReq((p) => ({
                      ...p,
                      contact: { ...p.contact, email: e.target.value },
                    }))
                  }
                  placeholder="name@email.com"
                />
              </div>

              <div>
                <Label>City (optional)</Label>
                <TextInput
                  value={req.contact.city}
                  onChange={(e) =>
                    setReq((p) => ({
                      ...p,
                      contact: { ...p.contact, city: e.target.value },
                    }))
                  }
                  placeholder="e.g., Vijayawada"
                />
              </div>

              <div className="md:col-span-2">
                <Label>Preferred contact method</Label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(
                    [
                      ["whatsapp", "WhatsApp"],
                      ["call", "Call"],
                      ["email", "Email"],
                    ] as const
                  ).map(([id, label]) => (
                    <Pill
                      key={id}
                      selected={req.contact.preferredContact === id}
                      onClick={() =>
                        setReq((p) => ({
                          ...p,
                          contact: { ...p.contact, preferredContact: id },
                        }))
                      }
                    >
                      {label}
                    </Pill>
                  ))}
                </div>
              </div>
            </div>

            {!validateStep("contact", req) ? (
              <p className="text-sm font-semibold text-orange-700">
                Name and phone are required to proceed.
              </p>
            ) : null}
          </div>
        );

      case "review":
        return (
          <div className="space-y-4">
            <SectionTitle
              title="Review & send for quote"
              desc="Copy or send the summary to WhatsApp."
            />

            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-bold text-gray-900">
                    Deterministic summary (source of truth)
                  </p>
                  <CopyButton text={deterministicSummary} />
                </div>

                <div className="mt-3 rounded-xl border border-gray-100 bg-gray-50 p-3 text-sm text-gray-800">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {deterministicSummary}
                  </ReactMarkdown>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      sendToWhatsApp(
                        WHATSAPP_QUOTE_PRIMARY,
                        deterministicSummary,
                      )
                    }
                    className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-green-700"
                  >
                    <Send className="h-4 w-4" />
                    Send to WhatsApp (Primary)
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      sendToWhatsApp(
                        WHATSAPP_QUOTE_SECONDARY,
                        deterministicSummary,
                      )
                    }
                    className="inline-flex items-center gap-2 rounded-xl bg-green-50 border border-green-200 px-4 py-2.5 text-sm font-bold text-green-700 hover:bg-green-100"
                  >
                    <Send className="h-4 w-4" />
                    Send to WhatsApp (Secondary)
                  </button>
                </div>

                <p className="mt-3 text-xs text-gray-500">
                  Tip: This opens WhatsApp with a pre-filled message.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-4">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      AI-polished summary (optional)
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Uses your deterministic summary as input and rewrites
                      cleanly.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={aiSummaryLoading}
                      onClick={runAISummary}
                      className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-orange-700 disabled:opacity-50"
                    >
                      <Sparkles className="h-4 w-4" />
                      Generate
                    </button>

                    {req.ai.aiSummary ? (
                      <CopyButton text={req.ai.aiSummary} />
                    ) : null}
                  </div>
                </div>

                {aiError ? (
                  <p className="mt-2 text-sm font-semibold text-red-600">
                    {aiError}
                  </p>
                ) : null}

                <div className="mt-3 rounded-xl border border-gray-100 bg-gray-50 p-3 text-sm text-gray-800 min-h-[160px]">
                  {aiSummaryLoading ? (
                    <p className="text-gray-500">Generating…</p>
                  ) : req.ai.aiSummary ? (
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {req.ai.aiSummary}
                    </ReactMarkdown>
                  ) : (
                    <p className="text-gray-500">
                      Click “Generate” to create a polished version.
                    </p>
                  )}
                </div>

                {req.ai.aiSummary ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {req.ai.aiSummaryIncomplete ? (
                      <button
                        type="button"
                        disabled={aiSummaryLoading}
                        onClick={continueAISummary}
                        className="inline-flex items-center gap-2 rounded-xl border border-orange-200 bg-orange-50 px-4 py-2.5 text-sm font-bold text-orange-700 hover:bg-orange-100 disabled:opacity-50"
                      >
                        <ArrowRight className="h-4 w-4" />
                        Continue
                      </button>
                    ) : null}

                    <button
                      type="button"
                      onClick={() =>
                        sendToWhatsApp(WHATSAPP_QUOTE_PRIMARY, req.ai.aiSummary)
                      }
                      className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-green-700"
                    >
                      <Send className="h-4 w-4" />
                      Send AI summary to WhatsApp
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-4">
              <p className="text-sm font-bold text-gray-900">
                Reset / Start over
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Clears saved progress on this device.
              </p>
              <button
                type="button"
                onClick={resetAll}
                className="mt-3 inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-bold text-gray-700 hover:border-orange-200 hover:text-orange-700"
              >
                <RefreshCcw className="h-4 w-4" />
                Reset
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-[calc(100vh-72px)] mt-[72px] bg-gradient-to-b from-orange-50/40 to-background">
      <div className="mx-auto max-w-5xl px-4 md:px-6 py-6 md:py-10">
        {/* Header */}
        <div className="rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 p-5 md:p-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 shadow-inner border border-white/20 backdrop-blur-sm">
              <Image
                src="/images/staffarc-logo.png"
                alt={BOT_NAME}
                width={32}
                height={32}
                className="h-8 w-8 object-contain drop-shadow-sm"
              />
            </div>

            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-extrabold text-white flex items-center gap-2">
                {BOT_NAME}
                <Sparkles className="h-4 w-4 text-yellow-200 animate-pulse" />
              </h1>
              <p className="text-sm text-white/90 font-semibold">
                Requirement wizard → Summary → WhatsApp quote
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {steps.map((s) => (
              <span
                key={s}
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-bold border",
                  s === step
                    ? "bg-white text-orange-700 border-white"
                    : "bg-white/10 text-white border-white/20",
                )}
              >
                {stepTitle(s) ?? s}
              </span>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2 text-sm font-bold text-white border border-white/20 hover:bg-white/20"
            >
              Contact StaffArc
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Body */}
        <div
          ref={scrollRef}
          className="mt-6 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
        >
          {/* <div className="p-5 md:p-7">
            {renderStepBody()}
          </div> */}
          <div className="p-5 md:p-7">{renderStepBody()}</div>
          {/* Footer / navigation */}
          <div className="border-t border-gray-100 bg-gray-50 p-4 md:p-5 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={goBack}
              disabled={stepIndex <= 0}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-bold text-gray-700 disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </button>

            <div className="text-xs font-semibold text-gray-500">
              Step {stepIndex + 1} of {steps.length}
            </div>

            {step !== "review" ? (
              <button
                type="button"
                onClick={goNext}
                disabled={!validateStep(step, req)}
                className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-orange-700 disabled:opacity-50"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() =>
                  sendToWhatsApp(
                    WHATSAPP_QUOTE_PRIMARY,
                    req.ai.aiSummary || deterministicSummary,
                  )
                }
                className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-green-700"
              >
                <Send className="h-4 w-4" />
                Send to WhatsApp
              </button>
            )}
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-gray-500 font-semibold">
          {BOT_NAME} can make mistakes. Please verify final scope with the
          StaffArc team.
        </p>
      </div>
    </div>
  );
}
