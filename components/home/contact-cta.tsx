import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-center sm:px-16">
          {/* Decorative circles */}
          <div
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary/10"
            aria-hidden="true"
          />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-background sm:text-4xl text-balance">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-background/70 text-pretty">
              Let&apos;s discuss how StaffArc can help you achieve your business
              goals. Get a personalized quote today.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 text-base"
              >
                <Link href="/contact">
                  {"Let's Get Started"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-background/20 text-foreground hover:bg-accent/50 hover:text-foreground px-8 text-base"
              >
                <Link href="/services">Explore All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
