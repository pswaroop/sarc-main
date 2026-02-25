import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "StaffArc Terms of Service - Terms and conditions governing the use of our services.",
}

export default function TermsPage() {
  return (
    <div className="pt-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-background py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--accent)_0%,transparent_70%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-muted-foreground">Last updated: February 2025</p>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-12">
            <div className="space-y-10 text-base leading-relaxed text-muted-foreground">
              <div>
                <h2 className="mb-3 text-xl font-semibold text-card-foreground">1. Acceptance of Terms</h2>
                <p>By accessing and using StaffArc&apos;s website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-card-foreground">2. Services Description</h2>
                <p>StaffArc provides IT solutions, graphic designing, digital marketing, staffing solutions, GST management, and corporate services. The specific scope of services will be defined in individual agreements or proposals.</p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-card-foreground">3. Client Responsibilities</h2>
                <p>Clients are responsible for providing accurate information, timely feedback, and necessary access/credentials required for service delivery. Delays caused by client-side dependencies may affect project timelines.</p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-card-foreground">4. Payment Terms</h2>
                <p>Payment terms will be outlined in individual proposals and invoices. Unless otherwise agreed, payments are due within 15 days of invoice date. Late payments may incur additional charges.</p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-card-foreground">5. Intellectual Property</h2>
                <p>All deliverables become the client&apos;s property upon full payment. StaffArc retains the right to showcase completed work in its portfolio unless a non-disclosure agreement is in place.</p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-card-foreground">6. Confidentiality</h2>
                <p>Both parties agree to maintain confidentiality of proprietary information shared during the engagement. This obligation survives termination of any agreement.</p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-card-foreground">7. Limitation of Liability</h2>
                <p>StaffArc&apos;s liability shall not exceed the total fees paid by the client for the specific service in question. StaffArc shall not be liable for indirect, incidental, or consequential damages.</p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-card-foreground">8. Termination</h2>
                <p>Either party may terminate an engagement with 30 days written notice. Work completed up to the termination date will be billed accordingly.</p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-card-foreground">9. Governing Law</h2>
                <p>These terms shall be governed by the laws of India, with jurisdiction in Visakhapatnam, Andhra Pradesh.</p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-card-foreground">10. Contact</h2>
                <p>For any questions regarding these Terms of Service, please contact us at:</p>
                <ul className="mt-3 list-inside list-disc space-y-1">
                  <li>Email: <a href="mailto:procurement@staffarc.in" className="text-primary hover:underline">procurement@staffarc.in</a></li>
                  <li>Phone: <a href="tel:+918639619426" className="text-primary hover:underline">+91 8639619426</a></li>
                  <li>Address: Visakhapatnam, Andhra Pradesh, India</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/privacy" className="text-sm text-primary hover:underline">
              View Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
