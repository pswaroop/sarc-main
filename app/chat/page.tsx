"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Send,
  Bot,
  User,
  ArrowRight,
  Sparkles,
  Copy,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

// -------------------- Types --------------------

interface Message {
  id: string;
  role: "user" | "bot";
  content: string;
  timestamp: Date;
  links?: Array<{ label: string; href: string }>;
  isIncomplete?: boolean; // Continue mechanism
}

// -------------------- Config --------------------

const quickActions = [
  "What services do you offer?",
  "Get a quote",
  "Digital marketing",
  "Company registration",
];

const END_MARKER = "<<END>>";
const FIRST_TOKEN_TIMEOUT_MS = 3000;

// -------------------- Knowledge Base --------------------

const knowledgeBase: Record<
  string,
  { answer: string; links?: Array<{ label: string; href: string }> }
> = {
  greeting: {
    answer:
      "Hi! I'm **ARC AI BOT** 🤖\n\nI can help clarify your project requirements, answer questions about StaffArc services, or provide general business advice. For complex queries, I'll consult our AI expert. What can I help you with?",
    links: [{ label: "View Services", href: "/services" }],
  },
  fallback: {
    answer:
      "Thanks for your question! I have consulted our knowledge base. Here's what I found:\n\n[AI Response will appear here]\n\nNeed more help? Our team responds within 24 hours!",
    links: [{ label: "Contact Us", href: "/contact" }],
  },
  fallback_static: {
    answer:
      "Thank you for your question! I might not have the exact answer right now, but our team would love to help you. You can:\n\n- **Call us** at +91 8639619426\n- **Email** procurement@staffarc.in\n- **Fill out** our contact form for a detailed response.\n\nIs there anything else I can help with?",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "View Services", href: "/services" },
    ],
  },

  about: {
    answer:
      "StaffArc is your one-stop technology and business partner. We serve 200+ happy clients across industries, providing:\n\n- 250+ projects delivered successfully\n- 500+ marketing campaigns managed\n- 5+ years of industry experience\n\nOur mission is to empower businesses with smart, scalable, and affordable IT and digital solutions.",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Portfolio", href: "/portfolio" },
    ],
  },
  contact: {
    answer:
      "You can reach StaffArc through:\n\n- **Phone:** +91 8639619426\n- **Email:** procurement@staffarc.in\n- **Locations:** Visakhapatnam | Hyderabad\n- **Hours:** Monday to Saturday, 9:00 AM - 6:00 PM\n\nOr simply fill out our contact form for a quick response!",
    links: [{ label: "Contact Page", href: "/contact" }],
  },
  locations: {
    answer:
      "StaffArc currently operates out of two major locations in Andhra Pradesh and Telangana:\n\n- **Visakhapatnam (Vizag)** - Primary operations\n- **Hyderabad** - Corporate operations\n\nHowever, we serve clients globally! You can work with us remotely from anywhere in the world.",
    links: [{ label: "Get in Touch", href: "/contact" }],
  },

  pricing: {
    answer:
      "StaffArc offers competitive and flexible pricing tailored to your needs. Our pricing depends on:\n\n- **Project scope and complexity**\n- **Timeline and delivery requirements**\n- **Technology stack needed**\n- **Ongoing support requirements**\n\nWe offer both project-based and retainer pricing models. Contact us for a personalized quote!",
    links: [{ label: "Request a Quote", href: "/contact" }],
  },
  quote: {
    answer:
      "Getting a quote from StaffArc is easy! You can:\n\n1. **Fill out our contact form** with your project details and requirements.\n2. **Call us** at +91 8639619426 during business hours (Mon-Sat, 9 AM - 6 PM).\n3. **Email us** at [procurement@staffarc.in](mailto:procurement@staffarc.in) with your requirements.\n\nOur team typically responds within 24 hours with a personalized proposal.",
    links: [{ label: "Get a Quote", href: "/contact" }],
  },

  services: {
    answer:
      "StaffArc offers a comprehensive range of services:\n\n1. **IT Solutions** -- Web/app development, custom software, AI/ML, cybersecurity, and cloud services.\n2. **Graphic Designing** -- Logo creation, UI/UX, branding, and packaging design.\n3. **Digital Marketing** -- SEO, Google & Meta Ads, PPC, social media, and content marketing.\n4. **Staffing Solutions** -- Permanent/contract staffing, RPO, and technical hiring.\n5. **GST Management** -- Registration, filing, tax compliance, and advisory.\n6. **Corporate Services** -- Company registration, government applications, PAN/TAN/DSC, and MSME registration.\n\nWhich service would you like to know more about?",
    links: [
      { label: "Explore Services", href: "/services" },
      { label: "Get a Quote", href: "/contact" },
    ],
  },

  it_solutions: {
    answer:
      "Our IT Solutions include:\n\n- **Website & App Development** -- Modern, responsive websites and cross-platform mobile apps.\n- **Custom Software Development** -- Tailored solutions for your unique business needs.\n- **Data & AI Solutions** -- ML models, predictive analytics, and intelligent automation.\n- **Cybersecurity** -- Security audits, penetration testing, and compliance.\n- **Cloud Services** -- Migration, infrastructure management, and DevOps.\n\nWe work with cutting-edge technologies like Next.js, React, Python, TensorFlow, and AWS.",
    links: [
      { label: "IT Solutions Details", href: "/services/it-solutions" },
      { label: "View Portfolio", href: "/portfolio" },
    ],
  },
  website: {
    answer:
      "StaffArc builds modern, high-performance websites using:\n\n- **Next.js & React** for blazing-fast web applications\n- **Responsive design** that works on all devices\n- **SEO optimization** built into the architecture\n- **Custom CMS** solutions for easy content management\n\nFrom landing pages to complex web applications, we deliver pixel-perfect results.",
    links: [
      { label: "IT Solutions", href: "/services/it-solutions" },
      { label: "Portfolio", href: "/portfolio" },
    ],
  },
  ecommerce: {
    answer:
      "We build highly scalable E-Commerce platforms tailored for growth:\n\n- **Custom Storefronts** using React, Next.js, or Django.\n- **Payment Gateway Integration** (Razorpay, Stripe, PhonePe, etc.)\n- **Admin Dashboards** for inventory and order management.\n- **SEO & Performance Optimized** for fast loading and high conversion.\n\nNeed a custom shopping cart or multi-vendor marketplace? We can build it.",
    links: [{ label: "Discuss E-Commerce Project", href: "/contact" }],
  },
  tech_stack: {
    answer:
      "We utilize a modern and robust technology stack, including:\n\n- **Frontend:** React.js, Next.js, TypeScript, Tailwind CSS\n- **Backend:** Python, Django, Node.js\n- **Database:** PostgreSQL, Supabase, MySQL\n- **Cloud & DevOps:** AWS, Azure, GCP, Linux, Nginx, Docker\n- **AI & Data:** TensorFlow, PySpark, Databricks\n\nWe choose the right tools based on your specific project requirements for maximum scalability.",
    links: [{ label: "Our IT Services", href: "/services/it-solutions" }],
  },
  maintenance: {
    answer:
      "Yes, we provide ongoing maintenance and support! Our post-launch services include:\n\n- Server monitoring and cloud hosting management (VPS, AWS)\n- Security patches and framework updates\n- Bug fixes and feature enhancements\n- Routine backups and database optimization\n\nWe offer monthly retainer packages to keep your software running flawlessly.",
    links: [{ label: "Contact for Support", href: "/contact" }],
  },

  marketing: {
    answer:
      "Our Digital Marketing services are designed to drive measurable growth:\n\n- **SEO** -- On-page & off-page optimization for higher search rankings.\n- **Google & Meta Ads** -- Targeted advertising campaigns for maximum ROI.\n- **PPC Campaigns** -- Pay-per-click strategies across multiple platforms.\n- **Social Media** -- Strategy, content creation, and community management.\n- **Content & Video Marketing** -- Engaging content that converts.\n- **Email & Influencer Marketing** -- Reach your audience effectively.\n\nWe have helped clients achieve up to 500% ROI on ad spend!",
    links: [
      { label: "Marketing Services", href: "/services/marketing" },
      { label: "Request Strategy Call", href: "/contact" },
    ],
  },
  seo: {
    answer:
      "Our SEO (Search Engine Optimization) services help you rank higher on Google:\n\n- **Technical SEO:** Core Web Vitals, site speed, schema markup.\n- **On-Page SEO:** Keyword research, content optimization, meta tags.\n- **Off-Page SEO:** High-quality backlinks and domain authority building.\n- **Local SEO:** Google My Business optimization to capture local traffic.\n\nWe focus on sustainable, white-hat strategies to bring organic traffic.",
    links: [{ label: "Boost Your SEO", href: "/contact" }],
  },
  graphic_design: {
    answer:
      "Our Graphic Design team delivers visual excellence:\n\n- **Logo Creation** -- Unique, memorable logos that define your brand.\n- **Brochure, Poster & Product Design** -- Print and digital collateral.\n- **UI/UX Design** -- Intuitive interfaces for web and mobile.\n- **Brand Identity & Packaging** -- Complete visual branding solutions.\n\nOur designers combine creativity with strategy to make your brand stand out.",
    links: [
      { label: "Design Services", href: "/services/graphic-designing" },
      { label: "See Our Work", href: "/portfolio" },
    ],
  },

  staffing: {
    answer:
      "StaffArc Staffing Solutions provide:\n\n- **Permanent & Contract Staffing** -- Find the right talent for any role.\n- **Recruitment Process Outsourcing (RPO)** -- End-to-end hiring management.\n- **Candidate Screening & Evaluation** -- Rigorous assessment processes.\n- **Technical Hiring Support** -- Specialized recruitment for IT and engineering roles.\n\nRight Talent. Right Time. Every Time.",
    links: [
      { label: "Staffing Solutions", href: "/services/staffing" },
      { label: "Hire with Us", href: "/contact" },
    ],
  },
  careers: {
    answer:
      "Looking to join the StaffArc team? We are always looking for talented professionals in:\n\n- Software Development (React, Django, Python)\n- Digital Marketing & SEO\n- Graphic Design (UI/UX)\n- Business Development\n- Content Writing\n\nCheck our careers page for current openings and submit your application!",
    links: [{ label: "View Openings", href: "/careers" }],
  },

  corporate: {
    answer:
      "Our Corporate Services make business setup simple:\n\n- **Company & Firm Registration** -- Pvt Ltd, LLP, Partnership, and more.\n- **Government Application Support** -- Navigating bureaucratic processes.\n- **PAN/TAN/DSC Services** -- Essential business documents.\n- **MSME & Startup India Registration** -- Government scheme benefits.\n\nWe guide you through every step of the registration process.",
    links: [
      { label: "Corporate Services", href: "/services/corporate-services" },
      { label: "Register Now", href: "/contact" },
    ],
  },
  register_company: {
    answer:
      "StaffArc helps you register your business hassle-free! We support:\n\n- **Private Limited Company** registration\n- **LLP (Limited Liability Partnership)** registration\n- **Partnership Firm** registration\n- **Sole Proprietorship** setup\n- **MSME Registration** for government benefits\n- **Startup India Registration** for eligible startups\n\nOur team handles all paperwork and government filings for you.",
    links: [
      { label: "Corporate Services", href: "/services/corporate-services" },
      { label: "Get Started", href: "/contact" },
    ],
  },
  gst: {
    answer:
      "Our GST Management services ensure stress-free compliance:\n\n- **GST Registration & Filing** -- Hassle-free registration and timely filing.\n- **Tax Compliance & Advisory** -- Expert guidance on tax matters.\n- **Monthly/Quarterly Reports** -- Detailed tax reporting and analysis.\n\nLet us handle the compliance so you can focus on growing your business.",
    links: [
      { label: "GST Services", href: "/services/gst-management" },
      { label: "Get Started", href: "/contact" },
    ],
  },
};

// -------------------- Intent match --------------------

function matchIntent(input: string): string {
  const lower = input.toLowerCase().trim();

  if (
    /^(hi|hello|hey|good\s*(morning|evening|afternoon)|howdy|greetings)/i.test(
      lower,
    )
  )
    return "greeting";

  if (
    /what\s*(services|do you (offer|provide|do))|all\s*services|services\s*(list|offered|available)|your\s*services/i.test(
      lower,
    ) ||
    lower === "services"
  )
    return "services";

  if (
    /\b(e-commerce|ecommerce|store|shop|cart|woocommerce|shopify|marketplace)\b/i.test(
      lower,
    )
  )
    return "ecommerce";

  if (
    /\b(stack|technology|technologies|framework|database|python|django|react|node|aws|tech\s*stack)\b/i.test(
      lower,
    )
  )
    return "tech_stack";

  if (
    /\b(maintain|maintenance|support|update|fix|bug|hosting|server)\b/i.test(
      lower,
    )
  )
    return "maintenance";

  if (
    /\b(website|web\s*app|landing\s*page|site|react|next\.?js)\b/i.test(lower)
  )
    return "website";

  if (
    /\b(it\s*solution|software|web\s*dev|app\s*dev|development|coding|tech|ai\s*solution|machine\s*learn|ml|data\s*science|cyber|cloud|devops)\b/i.test(
      lower,
    )
  )
    return "it_solutions";

  if (
    /\b(seo|ranking|google\s*rank|search\s*engine|keywords|traffic|on-page|off-page)\b/i.test(
      lower,
    )
  )
    return "seo";

  if (
    /\b(market|ppc|ads|advertis|social\s*media|content|email\s*market|influencer|google\s*ads|meta\s*ads|digital\s*growth)\b/i.test(
      lower,
    )
  )
    return "marketing";

  if (
    /\b(design|graphic|logo|brand|ui|ux|poster|brochure|packag|visual)\b/i.test(
      lower,
    )
  )
    return "graphic_design";

  if (
    /\b(staff|recruit|hire|hiring|talent|candidate|rpo|manpower|job|employment)\b/i.test(
      lower,
    )
  )
    return "staffing";

  if (
    /\b(career|job\s*opening|position|work\s*(with|for|at)|apply|join|resume|cv)\b/i.test(
      lower,
    )
  )
    return "careers";

  if (/\b(gst|tax|compliance|filing|return|tds|accounting)\b/i.test(lower))
    return "gst";

  if (
    /\b(register|registration|company\s*reg|incorporate|llp|pvt\s*ltd|msme|startup\s*india|pan|tan|dsc|firm)\b/i.test(
      lower,
    )
  )
    return "register_company";

  if (/\b(corporate|business\s*service|government|legal)\b/i.test(lower))
    return "corporate";

  if (
    /\b(location|where|address|vizag|visakhapatnam|hyderabad|city|based|office\s*location)\b/i.test(
      lower,
    )
  )
    return "locations";

  if (
    /\b(quote|price|pricing|cost|budget|estimate|proposal|how\s*much)\b/i.test(
      lower,
    )
  )
    return "quote";

  if (/\b(pricing|package|plan|subscription|retainer)\b/i.test(lower))
    return "pricing";

  if (
    /\b(contact|reach|call|phone|email|address|where|office|hours|timing)\b/i.test(
      lower,
    )
  )
    return "contact";

  if (
    /\b(about|who\s*are|company|team|history|mission|vision|founded|experience)\b/i.test(
      lower,
    )
  )
    return "about";

  return "fallback_static";
}

// -------------------- Markdown rendering --------------------

const CopyButton = ({
  text,
  className,
  iconClassName,
  label,
}: {
  text: string;
  className?: string;
  iconClassName?: string;
  label?: string;
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    window.setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "transition-all inline-flex items-center gap-1.5",
        className,
      )}
      title="Copy"
    >
      {isCopied ? (
        <Check className={cn("h-4 w-4 text-green-500", iconClassName)} />
      ) : (
        <Copy className={cn("h-4 w-4", iconClassName)} />
      )}
      {label ? <span>{isCopied ? "Copied!" : label}</span> : null}
    </button>
  );
};

const MarkdownComponents: any = {
  p: ({ children }: any) => (
    <p className="mb-3 last:mb-0 leading-relaxed">{children}</p>
  ),
  a: ({ href, children }: any) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-orange-600 underline underline-offset-2 font-medium"
    >
      {children}
    </a>
  ),
  ul: ({ children }: any) => (
    <ul className="mb-3 list-disc pl-5 space-y-1">{children}</ul>
  ),
  ol: ({ children }: any) => (
    <ol className="mb-3 list-decimal pl-5 space-y-1">{children}</ol>
  ),
  li: ({ children }: any) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }: any) => (
    <strong className="font-bold text-gray-900">{children}</strong>
  ),
  code: ({ inline, className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <div className="relative my-4 rounded-md overflow-hidden bg-[#1E1E1E]">
        <div className="flex items-center justify-between bg-[#2D2D2D] px-4 py-1.5 text-xs text-gray-400 font-mono">
          <span>{match[1]}</span>
        </div>

        <CopyButton
          text={String(children).replace(/\n$/, "")}
          className="absolute right-2 top-1 z-10 rounded-md bg-white/10 p-1.5 text-white/70 hover:bg-white/20 hover:text-white"
          iconClassName="text-white"
        />

        <SyntaxHighlighter
          {...props}
          style={vscDarkPlus as any}
          language={match[1]}
          PreTag="div"
          className="!m-0 !rounded-none !bg-transparent text-[13px]"
          customStyle={{ padding: "1rem" }}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      </div>
    ) : (
      <code
        {...props}
        className="bg-orange-100/50 text-orange-800 rounded px-1.5 py-0.5 text-[13px] font-mono border border-orange-200/50"
      >
        {children}
      </code>
    );
  },
};

const MemoizedMarkdown = React.memo(({ content }: { content: string }) => {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={MarkdownComponents}>
      {content}
    </ReactMarkdown>
  );
});
MemoizedMarkdown.displayName = "MemoizedMarkdown";

// -------------------- SSE helpers (if your API passes through SSE) --------------------

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

// -------------------- Continue helpers --------------------

function hasEndMarker(text: string) {
  return new RegExp(`${END_MARKER}\\s*$`).test(text.trim());
}

function stripEndMarker(text: string) {
  return text.replace(new RegExp(`\\s*${END_MARKER}\\s*$`), "").trimEnd();
}

function buildSystemPrompt(mode: "answer" | "continue") {
  const base =
    `You are Arc AI BOT, a helpful assistant for StaffArc (staffarc.in). ` +
    `Help users understand services (IT solutions, graphic design, marketing, staffing, GST, corporate services), ` +
    `clarify project requirements, or answer StaffArc questions. ` +
    `Don't provide specific budget related information for any of the provided services.` +
    `Be professional, concise, and respond in Markdown. ` +
    `IMPORTANT: Do NOT prefix your response with "Arc AI BOT:" or your name. ` +
    `For website services, suggest user also to goto https://staffarc.in/scope` +
    `Suggest visiting https://staffarc.in/scope for website requirements gathering. Suggest contacting [procurement@staffarc.in](mailto:procurement@staffarc.in) or +91 8639619426, +91 7842932428 (phone/whatsapp) for quotes/projects. ` +
    `Current time: ${new Date().toLocaleString("en-IN")}. `;

  if (mode === "answer") {
    return (
      base +
      `End your final response with the marker ${END_MARKER} on its own line. ` +
      `Do not mention this instruction.`
    );
  }

  return (
    base +
    `Continue the previous assistant response exactly from where it stopped. ` +
    `Do not repeat any already-shown text, do not restart, and do not add a preamble. ` +
    `Output ONLY the continuation in Markdown and end with ${END_MARKER} on its own line.`
  );
}

// -------------------- Page --------------------

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesRef = useRef<Message[]>([]);
  const [input, setInput] = useState("");
  const [isAIThinking, setIsAIThinking] = useState(false);
  const [continuingId, setContinuingId] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  const scrollToBottom = useCallback(() => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollTo({
      top: scrollContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isAIThinking, scrollToBottom]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Initial welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          role: "bot",
          content: knowledgeBase.greeting.answer,
          timestamp: new Date(),
          links: knowledgeBase.greeting.links,
          isIncomplete: false,
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages.length]);

  const updateMessageById = useCallback(
    (id: string, patch: Partial<Message>) => {
      setMessages((prev) => {
        const idx = prev.findIndex((m) => m.id === id);
        if (idx === -1) return prev;
        const updated = [...prev];
        updated[idx] = { ...updated[idx], ...patch };
        return updated;
      });
    },
    [],
  );

  const applyKbFallback = useCallback(
    (botId: string, userText: string) => {
      const intent = matchIntent(userText);
      const kb = knowledgeBase[intent] || knowledgeBase.fallback_static;
      updateMessageById(botId, {
        content: kb.answer,
        links: kb.links,
        isIncomplete: false,
      });
    },
    [updateMessageById],
  );

  const streamIntoMessage = useCallback(
    async ({
      response,
      botId,
      controller,
      append,
    }: {
      response: Response;
      botId: string;
      controller: AbortController;
      append: boolean;
    }) => {
      if (!response.body) throw new Error("Missing response body");

      const contentType = response.headers.get("content-type") || "";
      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let gotFirstToken = false;
      let rawAccum = append
        ? (messagesRef.current.find((m) => m.id === botId)?.content ?? "")
        : "";
      let sseBuffer = "";

      const firstTokenTimeoutId = window.setTimeout(() => {
        if (!gotFirstToken) controller.abort();
      }, FIRST_TOKEN_TIMEOUT_MS);

      const push = (nextRaw: string) => {
        const display = stripEndMarker(nextRaw);
        updateMessageById(botId, { content: display });
      };

      try {
        if (contentType.includes("text/event-stream")) {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            sseBuffer += decoder.decode(value, { stream: true });

            const { events, rest } = extractSseEvents(sseBuffer);
            sseBuffer = rest;

            for (const eventBlock of events) {
              const data = getDataFromSseEvent(eventBlock);
              if (!data) continue;

              if (data === "[DONE]") {
                // end signal
                break;
              }

              let token = "";
              try {
                const parsed = JSON.parse(data);
                token =
                  typeof parsed?.response === "string" ? parsed.response : "";
              } catch {
                token = "";
              }

              if (!token) continue;

              if (!gotFirstToken) {
                gotFirstToken = true;
                window.clearTimeout(firstTokenTimeoutId);
              }

              rawAccum += token;
              push(rawAccum);
            }
          }
        } else {
          // plain text streaming (if your API route converts SSE -> text/plain)
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });

            if (!gotFirstToken) {
              gotFirstToken = true;
              window.clearTimeout(firstTokenTimeoutId);
            }

            rawAccum += chunk;
            push(rawAccum);
          }
        }

        window.clearTimeout(firstTokenTimeoutId);

        if (!gotFirstToken) throw new Error("No response within timeout");

        // Continue button logic
        const finished = hasEndMarker(rawAccum);
        updateMessageById(botId, {
          isIncomplete: !finished && stripEndMarker(rawAccum).trim().length > 0,
        });
      } finally {
        window.clearTimeout(firstTokenTimeoutId);
        try {
          reader.releaseLock();
        } catch {}
      }
    },
    [updateMessageById],
  );

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isAIThinking) return;

      const userMsg: Message = {
        id: `user-${Date.now()}`,
        role: "user",
        content: text.trim(),
        timestamp: new Date(),
      };

      const botId = `bot-${Date.now()}`;
      const botPlaceholder: Message = {
        id: botId,
        role: "bot",
        content: "🔄 **ARC AI BOT** is thinking...",
        timestamp: new Date(),
        isIncomplete: false,
      };

      setMessages((prev) => [...prev, userMsg, botPlaceholder]);
      setInput("");
      setIsAIThinking(true);

      const controller = new AbortController();

      try {
        const history = messagesRef.current.slice(-6).map((m) => ({
          role: m.role === "bot" ? "assistant" : "user",
          content: m.content,
        }));

        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
          body: JSON.stringify({
            messages: [
              { role: "system", content: buildSystemPrompt("answer") },
              ...history,
              { role: "user", content: text.trim() },
            ],
          }),
        });

        if (!response.ok) throw new Error("AI service unavailable");

        await streamIntoMessage({ response, botId, controller, append: false });

        // Strip marker from final displayed content (already handled during pushes, but ensure)
        updateMessageById(botId, {
          content: stripEndMarker(
            messagesRef.current.find((m) => m.id === botId)?.content ?? "",
          ),
        });
      } catch (e) {
        applyKbFallback(botId, text);
      } finally {
        setIsAIThinking(false);
      }
    },
    [applyKbFallback, isAIThinking, streamIntoMessage, updateMessageById],
  );

  const continueFrom = useCallback(
    async (botId: string) => {
      if (isAIThinking) return;

      const idx = messagesRef.current.findIndex((m) => m.id === botId);
      if (idx === -1) return;

      setIsAIThinking(true);
      setContinuingId(botId);
      updateMessageById(botId, { isIncomplete: false });

      const controller = new AbortController();

      try {
        const history = messagesRef.current
          .slice(Math.max(0, idx - 6), idx + 1)
          .map((m) => ({
            role: m.role === "bot" ? "assistant" : "user",
            content: m.content,
          }));

        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
          body: JSON.stringify({
            messages: [
              { role: "system", content: buildSystemPrompt("continue") },
              ...history,
              {
                role: "user",
                content:
                  `Continue from where you stopped. Do not repeat any already shown text. ` +
                  `End with ${END_MARKER} on its own line.`,
              },
            ],
          }),
        });

        if (!response.ok) throw new Error("AI service unavailable");

        await streamIntoMessage({ response, botId, controller, append: true });
      } catch (e) {
        updateMessageById(botId, { isIncomplete: true });
      } finally {
        setContinuingId(null);
        setIsAIThinking(false);
      }
    },
    [isAIThinking, streamIntoMessage, updateMessageById],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) sendMessage(input);
  };

  const showQuickActions = useMemo(
    () => messages.length <= 2,
    [messages.length],
  );

  return (
    <div className="flex h-[calc(100vh-72px)] mt-[72px] w-full flex-col bg-background">
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-4 shadow-md z-10">
        <div className="mx-auto flex w-full max-w-5xl items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 shadow-inner border border-white/20 backdrop-blur-sm">
            <Image
              src="/images/staffarc-logo.png"
              alt="ARC AI BOT"
              width={32}
              height={32}
              className="h-8 w-8 object-contain drop-shadow-sm"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-white flex items-center gap-2">
              ARC AI BOT
              <Sparkles className="h-4 w-4 text-yellow-200 animate-pulse" />
            </h1>
            <p className="text-sm text-white/90 font-medium">
              {isAIThinking ? "Thinking..." : "Online & Ready to Help"}
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto p-4 md:p-8 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent bg-gradient-to-b from-orange-50/50 to-background/50"
      >
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "flex gap-4",
                msg.role === "user" ? "flex-row-reverse" : "flex-row",
              )}
            >
              <div
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-sm border mt-1",
                  msg.role === "bot"
                    ? "bg-gradient-to-br from-orange-100 to-white border-orange-200"
                    : "bg-gradient-to-br from-gray-100 to-white border-gray-200",
                )}
              >
                {msg.role === "bot" ? (
                  <Bot className="h-6 w-6 text-orange-600" />
                ) : (
                  <User className="h-6 w-6 text-gray-600" />
                )}
              </div>

              <div
                className={cn(
                  "max-w-[85%] md:max-w-[75%] rounded-2xl px-6 py-4 text-[15px] leading-relaxed shadow-sm relative",
                  msg.role === "user"
                    ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-tr-sm"
                    : "bg-white border border-gray-100 text-gray-800 rounded-tl-sm",
                )}
              >
                {msg.role === "bot" ? (
                  <MemoizedMarkdown content={msg.content} />
                ) : (
                  <span className="whitespace-pre-wrap">{msg.content}</span>
                )}

                {/* Footer for bot messages */}
                {msg.role === "bot" &&
                  !msg.content.includes("🔄 **ARC AI BOT** is thinking") && (
                    <div className="mt-4 flex flex-col gap-2 pt-3 border-t border-dashed border-gray-200/50">
                      {/* KB links */}
                      {msg.links && msg.links.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {msg.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="group inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 border border-orange-100 transition-all hover:bg-orange-100 hover:border-orange-300"
                            >
                              {link.label}
                              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center justify-end gap-2">
                        {msg.isIncomplete && (
                          <button
                            type="button"
                            onClick={() => continueFrom(msg.id)}
                            disabled={isAIThinking || continuingId === msg.id}
                            className="text-xs font-semibold bg-orange-50 hover:bg-orange-100 text-orange-700 px-3 py-1.5 rounded-md border border-orange-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            title="Continue generating"
                          >
                            {continuingId === msg.id
                              ? "Continuing..."
                              : "Continue"}
                          </button>
                        )}

                        <CopyButton
                          text={msg.content}
                          className="text-gray-400 hover:text-orange-600 text-xs font-medium bg-gray-50/50 hover:bg-orange-50 px-2 py-1.5 rounded-md border border-transparent hover:border-orange-200"
                          iconClassName="h-3.5 w-3.5"
                          label="Copy"
                        />
                      </div>
                    </div>
                  )}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isAIThinking && (
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-white border border-orange-200 mt-1">
                <Bot className="h-6 w-6 text-orange-600" />
              </div>
              <div className="rounded-2xl rounded-tl-sm bg-white border border-gray-100 px-6 py-4 shadow-sm">
                <div className="flex gap-1.5 items-center">
                  <span className="flex gap-1.5">
                    <span
                      className="h-2.5 w-2.5 animate-bounce rounded-full bg-orange-400 [animation-duration:1s]"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="h-2.5 w-2.5 animate-bounce rounded-full bg-orange-400 [animation-duration:1s]"
                      style={{ animationDelay: "200ms" }}
                    />
                    <span
                      className="h-2.5 w-2.5 animate-bounce rounded-full bg-orange-400 [animation-duration:1s]"
                      style={{ animationDelay: "400ms" }}
                    />
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Quick actions */}
          {showQuickActions && (
            <div className="mt-10">
              <p className="mb-4 text-sm font-bold text-gray-400 uppercase tracking-widest px-1">
                Quick actions
              </p>
              <div className="flex flex-wrap gap-3">
                {quickActions.map((action) => (
                  <button
                    key={action}
                    onClick={() => sendMessage(action)}
                    disabled={isAIThinking}
                    className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-600 shadow-sm transition-all hover:border-orange-300 hover:text-orange-600 hover:shadow-md active:scale-95 disabled:opacity-50"
                    type="button"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input */}
      <div className="bg-white border-t border-border p-4 md:p-6 shadow-[0_-4px_10px_-4px_rgba(0,0,0,0.05)] z-10">
        <div className="mx-auto max-w-5xl">
          <form
            onSubmit={handleSubmit}
            className="flex shrink-0 items-center gap-4"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask ARC AI BOT anything about StaffArc..."
              disabled={isAIThinking}
              className="flex-1 rounded-xl border border-gray-200 bg-gray-50 px-6 py-4 text-base text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-inner"
            />
            <button
              type="submit"
              disabled={!input.trim() || isAIThinking}
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md transition-all hover:shadow-lg hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
            >
              <Send
                className={cn(
                  "h-6 w-6 transition-transform",
                  isAIThinking && "rotate-45",
                )}
              />
            </button>
          </form>

          <p className="text-center text-xs text-muted-foreground mt-3 font-medium">
            ARC AI BOT can make mistakes. For precise quotes, please verify with
            our procurement team.
          </p>
        </div>
      </div>
    </div>
  );
}
