"use client"

import { useState } from "react"
import Image from "next/image"
import { TrendingUp } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { ContactCTA } from "@/components/home/contact-cta"

const categories = ["All", "Web Development", "Mobile Apps", "AI & Data", "Marketing", "Branding"]

const projects = [
  {
    title: "E-Commerce Platform for RetailMax",
    category: "Web Development",
    description: "Built a scalable e-commerce platform handling 10K+ daily orders with real-time inventory management.",
    results: "300% increase in online sales within 6 months",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    image: "/images/portfolio/ecommerce.jpg",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    category: "AI & Data",
    description: "Developed a predictive analytics dashboard using ML models for a logistics company to optimize routes.",
    results: "25% reduction in delivery costs",
    tags: ["Python", "TensorFlow", "React", "D3.js"],
    image: "/images/portfolio/ai-dashboard.jpg",
  },
  {
    title: "HealthTrack Mobile App",
    category: "Mobile Apps",
    description: "Cross-platform health tracking app with wearable device integration and telemedicine features.",
    results: "50K+ downloads in first quarter",
    tags: ["React Native", "Firebase", "BLE", "GraphQL"],
    image: "/images/portfolio/mobile-app.jpg",
  },
  {
    title: "GreenLeaf Brand Identity",
    category: "Branding",
    description: "Complete brand overhaul including logo, packaging, website, and marketing collateral for organic food brand.",
    results: "Brand recognition increased by 200%",
    tags: ["Logo Design", "Packaging", "UI/UX", "Print"],
    image: "/images/portfolio/branding.jpg",
  },
  {
    title: "SEO & PPC Campaign for EduTech",
    category: "Marketing",
    description: "Comprehensive digital marketing strategy combining SEO, Google Ads, and content marketing.",
    results: "500% ROI on ad spend, #1 ranking for 15 keywords",
    tags: ["SEO", "Google Ads", "Content", "Analytics"],
    image: "/images/portfolio/marketing.jpg",
  },
  {
    title: "Cybersecurity Audit for FinServ",
    category: "Web Development",
    description: "Complete security assessment, vulnerability patching, and compliance implementation for a fintech startup.",
    results: "Zero security incidents post-implementation",
    tags: ["Penetration Testing", "OWASP", "ISO 27001", "Firewall"],
    image: "/images/portfolio/security.jpg",
  },
  {
    title: "Inventory Management SaaS",
    category: "Web Development",
    description: "Cloud-based inventory management system with barcode scanning, multi-warehouse support, and reporting.",
    results: "Reduced inventory errors by 95%",
    tags: ["React", "Node.js", "MongoDB", "Docker"],
    image: "/images/portfolio/inventory.jpg",
  },
  {
    title: "Restaurant Chain App",
    category: "Mobile Apps",
    description: "Online ordering and loyalty rewards app for a 25-location restaurant chain with real-time order tracking.",
    results: "40% increase in repeat orders",
    tags: ["Flutter", "Firebase", "Stripe", "Maps API"],
    image: "/images/portfolio/restaurant.jpg",
  },
  {
    title: "Social Media Campaign for Fashion",
    category: "Marketing",
    description: "Influencer-driven social media campaign across Instagram and YouTube for a fashion brand launch.",
    results: "2M+ impressions, 15K new followers in 30 days",
    tags: ["Instagram", "YouTube", "Influencer", "Content"],
    image: "/images/portfolio/social-media.jpg",
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="pt-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-background py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--accent)_0%,transparent_70%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
              Our Work
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Projects That Drive Real Results
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Explore our portfolio of successful projects that have helped businesses grow, innovate, and lead their industries.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                  cat === activeCategory
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 80}>
                <div className="group h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    <span className="absolute bottom-3 left-3 inline-block rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-card-foreground">{project.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                    {/* Results */}
                    <div className="mt-4 flex items-start gap-2 rounded-lg bg-accent/50 p-3">
                      <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm font-medium text-accent-foreground">{project.results}</span>
                    </div>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-lg text-muted-foreground">No projects found in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      <ContactCTA />
    </div>
  )
}
