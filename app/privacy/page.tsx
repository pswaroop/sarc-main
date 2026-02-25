import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "StaffArc Privacy Policy - Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-background py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--accent)_0%,transparent_70%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground">Last updated: February 2025</p>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-12">
            <div className="space-y-10 text-base leading-relaxed text-muted-foreground">
              <div>
                <h2 className="mb-3 text-xl font-semibold text-card-foreground">1. Information We Collect</h2>
                <p>We collect information you provide directly to us, including your name, email address, phone number, company name, and any other information you choose to provide when filling out forms, requesting quotes, or contacting us.</p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-card-foreground">2. How We Use Your Information</h2>
                <p>We use the information we collect to provide, maintain, and improve our services, to communicate with you about our services, respond to your inquiries, and send you technical notices and support messages.</p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-card-foreground">3. Information Sharing</h2>
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information with trusted third-party service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.</p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-card-foreground">4. Data Security</h2>
                <p>We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. However, no method of transmission over the Internet is 100% secure.</p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-card-foreground">5. Cookies</h2>
                <p>Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some functionality of our website.</p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-card-foreground">6. Third-Party Links</h2>
                <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-card-foreground">7. Your Rights</h2>
                <p>You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications from us at any time by contacting us at procurement@staffarc.in.</p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-card-foreground">8. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                <ul className="mt-3 list-inside list-disc space-y-1">
                  <li>Email: <a href="mailto:procurement@staffarc.in" className="text-primary hover:underline">procurement@staffarc.in</a></li>
                  <li>Phone: <a href="tel:+918639619426" className="text-primary hover:underline">+91 8639619426</a></li>
                  <li>Address: Visakhapatnam, Andhra Pradesh, India</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/terms" className="text-sm text-primary hover:underline">
              View Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
