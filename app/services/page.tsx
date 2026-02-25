import { Metadata } from "next"
import Link from "next/link"
import { Monitor, Palette, TrendingUp, Users, FileText, Building, ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { SectionHeading } from "@/components/section-heading"
import { ContactCTA } from "@/components/home/contact-cta"

export const metadata: Metadata = {
  title: "Services",
  description: "Explore StaffArc's comprehensive range of IT, design, marketing, staffing, and compliance services.",
}

const services = [
  {
    icon: Monitor,
    title: "IT Solutions",
    description: "Website & app development, custom software, AI & data solutions, cybersecurity, cloud services, and DevOps automation.",
    href: "/services/it-solutions",
    features: ["Website & App Development", "Custom Software Development", "Data & AI Solutions", "Cybersecurity Solutions", "Cloud Services", "DevOps & Automation"],
  },
  {
    icon: Palette,
    title: "Graphic Designing",
    description: "Complete visual design services from logos to UI/UX, branding, packaging, and promotional material.",
    href: "/services/graphic-designing",
    features: ["Logo Creation", "Brochure & Poster Design", "UI/UX Design", "Brand Identity", "Product & Packaging Design"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Full-spectrum digital marketing including SEO, paid advertising, social media, content marketing, and analytics.",
    href: "/services/marketing",
    features: ["SEO (On-page & Off-page)", "Google & Meta Ads", "PPC Campaigns", "Social Media Strategy", "Content & Video Marketing", "Email & Influencer Marketing"],
  },
  {
    icon: Users,
    title: "Staffing Solutions",
    description: "End-to-end staffing services covering permanent hiring, contract staffing, RPO, and technical recruitment.",
    href: "/services/staffing",
    features: ["Permanent & Contract Staffing", "Recruitment Process Outsourcing", "Candidate Screening", "Technical Hiring Support"],
  },
  {
    icon: FileText,
    title: "GST Management",
    description: "Complete GST compliance services including registration, filing, advisory, and periodic reporting.",
    href: "/services/gst-management",
    features: ["GST Registration & Filing", "Tax Compliance & Advisory", "Monthly/Quarterly Reports"],
  },
  {
    icon: Building,
    title: "Corporate Services",
    description: "Business registration, government applications, and regulatory compliance services for companies and startups.",
    href: "/services/corporate-services",
    features: ["Company & Firm Registration", "Government Application Support", "PAN/TAN/DSC Services", "MSME & Startup India Registration"],
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
              What We Offer
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Comprehensive Solutions for Every Business Need
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              From cutting-edge IT development to strategic marketing and compliance -- we provide everything under one roof.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 100}>
                <div className="rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:border-primary/30">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                    <div className="shrink-0">
                      <div className="inline-flex rounded-xl bg-primary/10 p-4">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-card-foreground">{service.title}</h2>
                      <p className="mt-2 leading-relaxed text-muted-foreground">{service.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <span key={feature} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="shrink-0">
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  )
}
