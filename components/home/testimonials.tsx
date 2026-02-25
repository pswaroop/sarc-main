"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const testimonials = [
  {
    name: "Rajesh Patel",
    role: "CEO, TechVista Innovations",
    quote:
      "StaffArc transformed our digital presence completely. Their IT solutions and marketing strategy helped us increase revenue by 40% in just six months.",
  },
  {
    name: "Priya Sharma",
    role: "Founder, GreenLeaf Organics",
    quote:
      "From website development to social media campaigns, StaffArc delivered everything on time and within budget. Truly a one-stop partner.",
  },
  {
    name: "Anand Kumar",
    role: "Director, KumarCorp Industries",
    quote:
      "Their staffing solutions found us the perfect candidates every time. The quality of talent and the speed of delivery is unmatched.",
  },
  {
    name: "Meena Reddy",
    role: "CFO, RedStar Enterprises",
    quote:
      "GST compliance was a nightmare before StaffArc. Now it's completely handled, letting us focus on growing our business.",
  },
  {
    name: "Suresh Naidu",
    role: "CTO, DataFlow Analytics",
    quote:
      "The AI and data solutions built by StaffArc gave us insights we never had before. Our decision-making is now entirely data-driven.",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          description="Real stories from businesses we've helped grow and transform."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-12 text-center">
            <Quote className="mx-auto mb-6 h-10 w-10 text-primary/30" />
            <blockquote className="mb-6 text-lg leading-relaxed text-card-foreground sm:text-xl">
              &ldquo;{testimonials[current].quote}&rdquo;
            </blockquote>
            <div>
              <div className="font-semibold text-card-foreground">
                {testimonials[current].name}
              </div>
              <div className="text-sm text-muted-foreground">
                {testimonials[current].role}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
