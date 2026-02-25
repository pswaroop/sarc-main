import { HeroSection } from "@/components/home/hero-section"
import { ServicesOverview } from "@/components/home/services-overview"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { Testimonials } from "@/components/home/testimonials"
import { ClientsCarousel } from "@/components/home/clients-carousel"
import { ContactCTA } from "@/components/home/contact-cta"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <ClientsCarousel />
      <ContactCTA />
    </>
  )
}
