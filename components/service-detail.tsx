import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";

interface ServiceItem {
  title: string;
  description: string;
}

interface ServiceDetailProps {
  label: string;
  title: string;
  description: string;
  services: ServiceItem[];
}

export function ServiceDetail({
  label,
  title,
  description,
  services,
}: ServiceDetailProps) {
  return (
    <div className="pt-20">
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
              {label}
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              {description}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/30">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-center sm:px-16">
            <div
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary/10"
              aria-hidden="true"
            />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl text-balance">
                Ready to Get Started?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-background/70 text-pretty">
                Let our experts help you find the perfect solution for your
                business needs.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 text-base"
                >
                  <Link href="/contact">
                    Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-background/20 text-foreground hover:bg-background/10 hover:text-background px-8 text-base"
                >
                  <Link href="/services">All Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
