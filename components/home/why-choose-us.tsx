"use client"

import {
  Award,
  Zap,
  HeartHandshake,
  TrendingUp,
  Lightbulb,
  DollarSign,
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { SectionHeading } from "@/components/section-heading"

const reasons = [
  {
    icon: Award,
    title: "Proven Expertise",
    description:
      "Years of hands-on experience delivering IT, marketing, and business solutions across diverse industries.",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Tech",
    description:
      "We leverage the latest technologies, AI, and automation to give your business a competitive advantage.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Centric Approach",
    description:
      "Your success is our priority. We tailor every solution to match your specific goals and challenges.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description:
      "Our services grow with you -- from startup to enterprise, we have the tools and talent to scale.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description:
      "We don't just follow trends -- we create them. Our team constantly pushes the boundaries of what's possible.",
  },
  {
    icon: DollarSign,
    title: "Affordable Excellence",
    description:
      "Premium-quality services at competitive pricing. Maximum ROI without breaking the bank.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Why StaffArc"
          title="Why Businesses Choose StaffArc"
          description="We combine expertise, innovation, and a deep commitment to client success. Here's what sets us apart."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <AnimatedSection key={reason.title} delay={i * 100}>
              <div className="flex gap-4">
                <div className="shrink-0 rounded-xl bg-accent p-3 h-fit">
                  <reason.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
