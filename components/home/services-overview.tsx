"use client"

import Link from "next/link"
import {
  Monitor,
  Palette,
  TrendingUp,
  Users,
  FileText,
  Building,
  ArrowRight,
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { SectionHeading } from "@/components/section-heading"

const services = [
  {
    icon: Monitor,
    title: "IT Solutions",
    tagline: "Transform Ideas into Powerful Digital Reality",
    description:
      "Custom software, web & app development, AI/ML solutions, cloud services, and cybersecurity to drive your digital transformation.",
    href: "/services/it-solutions",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Palette,
    title: "Graphic Designing",
    tagline: "Design That Drives Brand Success",
    description:
      "Logo creation, UI/UX design, brochures, brand identity, and packaging design that captivates your audience.",
    href: "/services/graphic-designing",
    color: "bg-chart-5/10 text-chart-5",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    tagline: "Digital Growth, Guaranteed Results",
    description:
      "SEO, Google & Meta Ads, PPC campaigns, social media strategy, content marketing, and influencer outreach.",
    href: "/services/marketing",
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  {
    icon: Users,
    title: "Staffing Solutions",
    tagline: "Right Talent. Right Time. Every Time.",
    description:
      "Permanent and contract staffing, RPO, candidate screening, and technical hiring support.",
    href: "/services/staffing",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: FileText,
    title: "GST & Compliance",
    tagline: "Stress-Free Business Compliance",
    description:
      "GST registration and filing, tax compliance advisory, and monthly/quarterly reports.",
    href: "/services/gst-management",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    icon: Building,
    title: "Corporate Services",
    tagline: "Your Partner in Business Registration",
    description:
      "Company registration, government applications, PAN/TAN/DSC, MSME and Startup India registration.",
    href: "/services/corporate-services",
    color: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  },
]

export function ServicesOverview() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Our Services"
          title="Everything Your Business Needs to Succeed"
          description="From cutting-edge technology to strategic marketing and compliance -- we provide end-to-end solutions that fuel growth."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 100}>
              <Link
                href={service.href}
                className="group block rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
              >
                <div
                  className={`mb-4 inline-flex rounded-xl p-3 ${service.color}`}
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-1 text-lg font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="mb-2 text-sm font-medium text-primary">
                  {service.tagline}
                </p>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
