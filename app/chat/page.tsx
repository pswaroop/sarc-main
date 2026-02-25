"use client";

import { useState, useRef, useEffect, useCallback, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { Send, Bot, User, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Types & Data ---

interface Message {
  id: string;
  role: "user" | "bot";
  content: string;
  timestamp: Date;
  links?: Array<{ label: string; href: string }>;
}

const quickActions = [
  "What services do you offer?",
  "Get a quote",
  "Digital marketing",
  "Company registration",
];

const knowledgeBase: Record<
  string,
  { answer: string; links?: Array<{ label: string; href: string }> }
> = {
  // --- CORE GREETINGS & FALLBACKS ---
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

  // --- GENERAL COMPANY INFO ---
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

  // --- PRICING & QUOTES ---
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

  // --- PRIMARY SERVICES OVERVIEW ---
  services: {
    answer:
      "StaffArc offers a comprehensive range of services:\n\n1. **IT Solutions** -- Web/app development, custom software, AI/ML, cybersecurity, and cloud services.\n2. **Graphic Designing** -- Logo creation, UI/UX, branding, and packaging design.\n3. **Digital Marketing** -- SEO, Google & Meta Ads, PPC, social media, and content marketing.\n4. **Staffing Solutions** -- Permanent/contract staffing, RPO, and technical hiring.\n5. **GST Management** -- Registration, filing, tax compliance, and advisory.\n6. **Corporate Services** -- Company registration, government applications, PAN/TAN/DSC, and MSME registration.\n\nWhich service would you like to know more about?",
    links: [
      { label: "Explore Services", href: "/services" },
      { label: "Get a Quote", href: "/contact" },
    ],
  },

  // --- IT & DEVELOPMENT SERVICES ---
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

  // --- MARKETING & DESIGN ---
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

  // --- STAFFING & HR ---
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

  // --- CORPORATE & COMPLIANCE ---
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

function matchIntent(input: string): string {
  const lower = input.toLowerCase().trim();

  // Greeting
  if (
    /^(hi|hello|hey|good\s*(morning|evening|afternoon)|howdy|greetings)/i.test(
      lower,
    )
  )
    return "greeting";
  // Services overview
  if (
    /what\s*(services|do you (offer|provide|do))|all\s*services|services\s*(list|offered|available)|your\s*services/i.test(
      lower,
    ) ||
    lower === "services"
  )
    return "services";

  // --- Specific Development & IT ---
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

  // --- Specific Marketing & SEO ---
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

  // --- Design ---
  if (
    /\b(design|graphic|logo|brand|ui|ux|poster|brochure|packag|visual)\b/i.test(
      lower,
    )
  )
    return "graphic_design";

  // --- Staffing & Careers ---
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

  // --- Corporate & Legal ---
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

  // --- Admin, Quotes & General Info ---
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
    /\b(contact|reach|call|phone|email|address|location|where|office|hours|timing)\b/i.test(
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

  // Default Fallback
  return "fallback_static";
}

function formatBotMessage(text: string): string {
  // Remove "Arc AI BOT:" prefix if AI generates it
  const cleanText = text.replace(/^(Arc AI BOT:\s*)+/i, "");
  return cleanText
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/--/g, "&mdash;")
    .replace(/\n/g, "<br />");
}

// --- Component ---

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isAIThinking, setIsAIThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isPending, startTransition] = useTransition();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = useCallback(() => {
    // Scroll the specific container, not the window
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isAIThinking, scrollToBottom]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Initial Welcome Message
  useEffect(() => {
    if (messages.length === 0) {
      const welcomeMsg: Message = {
        id: "welcome",
        role: "bot",
        content: knowledgeBase.greeting.answer,
        timestamp: new Date(),
        links: knowledgeBase.greeting.links,
      };
      setMessages([welcomeMsg]);
    }
  }, [messages.length]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Initial placeholder while waiting for AI
    setTimeout(() => {
      const fallbackMsg: Message = {
        id: `fallback-${Date.now()}`,
        role: "bot",
        content: "🔄 Let me consult our AI expert for the best response...",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    }, 400);

    // AI API call
    try {
      startTransition(async () => {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: [
              {
                role: "system",
                content: `You are Arc AI BOT, a helpful assistant for StaffArc (staffarc.in). Help users understand services (IT solutions, graphic design, marketing, staffing, GST, corporate services), clarify project requirements, or answer StaffArc questions. Be professional and concise. IMPORTANT: Respond directly to the user. Do NOT prefix your response with "Arc AI BOT:" or your name. Suggest contacting procurement@staffarc.in or +91 8639619426, +91 7842932428(phone/whatsapp) for quotes/projects. Current time: ${new Date().toLocaleString("en-IN")}.`,
              },
              ...messages.slice(-5).map((msg) => ({
                role: msg.role === "bot" ? "assistant" : msg.role,
                content: msg.content,
              })),
              { role: "user", content: text },
            ],
          }),
        });

        if (!response.ok) throw new Error("AI service unavailable");

        const reader = response.body?.getReader();
        const decoder = new TextDecoder();
        let aiContent = "";

        setIsAIThinking(true);

        while (true) {
          const { done, value } = await reader!.read();
          if (done) break;

          const chunk = decoder.decode(value);
          aiContent += chunk;

          setMessages((prev) => {
            const updated = [...prev];
            const lastMsg = updated[updated.length - 1];
            if (lastMsg.id.startsWith("fallback-")) {
              lastMsg.content = aiContent;
            }
            return updated;
          });
        }

        setIsTyping(false);
        setIsAIThinking(false);
      });
    } catch (error) {
      console.error("AI Error:", error);
      setMessages((prev) => {
        const updated = [...prev];
        const lastMsg = updated[updated.length - 1];
        if (lastMsg.id.startsWith("fallback-")) {
          const intent = matchIntent(text);
          const kb = knowledgeBase[intent] || knowledgeBase.fallback_static;
          lastMsg.content = kb.answer;
          lastMsg.links = kb.links;
        }
        return updated;
      });
      setIsTyping(false);
      setIsAIThinking(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
    }
  };

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
              {isTyping || isAIThinking
                ? "Thinking..."
                : "Online & Ready to Help"}
            </p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
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
                  "max-w-[85%] md:max-w-[75%] rounded-2xl px-6 py-4 text-[15px] leading-relaxed shadow-sm",
                  msg.role === "user"
                    ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-tr-sm"
                    : "bg-white border border-gray-100 text-gray-800 rounded-tl-sm",
                )}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: formatBotMessage(msg.content),
                  }}
                  className="prose prose-sm md:prose-base prose-orange max-w-none dark:prose-invert"
                />
                {msg.links && msg.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2 pt-3 border-t border-dashed border-gray-200/50">
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
              </div>
            </div>
          ))}

          {(isTyping || isAIThinking) && (
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

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions for Desktop View */}
        {messages.length <= 2 && (
          <div className="mx-auto max-w-5xl mt-10">
            <p className="mb-4 text-sm font-bold text-gray-400 uppercase tracking-widest px-1">
              Quick actions
            </p>
            <div className="flex flex-wrap gap-3">
              {quickActions.map((action) => (
                <button
                  key={action}
                  onClick={() => sendMessage(action)}
                  disabled={isTyping || isAIThinking}
                  className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-600 shadow-sm transition-all hover:border-orange-300 hover:text-orange-600 hover:shadow-md active:scale-95 disabled:opacity-50"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
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
              disabled={isTyping || isAIThinking || isPending}
              className="flex-1 rounded-xl border border-gray-200 bg-gray-50 px-6 py-4 text-base text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-inner"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping || isAIThinking || isPending}
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md transition-all hover:shadow-lg hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
            >
              <Send
                className={cn(
                  "h-6 w-6 transition-transform",
                  (isTyping || isAIThinking) && "rotate-45",
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
