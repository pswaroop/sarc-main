"use client"

import Link from "next/link"
import { ArrowRight, Users, Code, Megaphone, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroBackground } from "./hero-background"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <HeroBackground />

      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-sm backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-muted-foreground">Trusted by 100+ businesses across India</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl text-balance">
            Empowering Businesses with{" "}
            <span className="text-primary">Smart IT</span> &{" "}
            <span className="text-primary">Digital Solutions</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            100+ Clients | IT Development | Digital Marketing | Staffing | Compliance
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 text-base">
              <Link href="/contact">
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-accent hover:text-accent-foreground px-8 text-base">
              <Link href="/contact">Consult Our Experts</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-primary hover:bg-accent hover:text-accent-foreground px-8 text-base">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { icon: Users, label: "Happy Clients", value: "100+" },
              { icon: Code, label: "Projects Delivered", value: "250+" },
              { icon: Megaphone, label: "Campaigns Run", value: "500+" },
              { icon: Shield, label: "Years Experience", value: "5+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                <div className="text-2xl font-bold text-foreground lg:text-3xl">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
