import { Metadata } from "next"
import { ServiceDetail } from "@/components/service-detail"

export const metadata: Metadata = {
  title: "Graphic Designing",
  description: "Professional logo creation, UI/UX design, branding, and visual design services from StaffArc.",
}

const services = [
  { title: "Logo Creation", description: "Distinctive, memorable logos that capture your brand essence and make a lasting impression across all touchpoints." },
  { title: "Brochure, Poster & Product Design", description: "Eye-catching print and digital collateral that communicates your message effectively and drives engagement." },
  { title: "UI/UX Design for Web & App", description: "Intuitive, user-centered interfaces that delight users, reduce friction, and increase conversion rates." },
  { title: "Brand Identity Design", description: "Complete brand systems including color palettes, typography, guidelines, and visual language that tell your story." },
  { title: "Packaging Design", description: "Shelf-ready packaging that stands out, communicates quality, and drives purchase decisions in competitive markets." },
]

export default function GraphicDesigningPage() {
  return (
    <ServiceDetail
      label="Graphic Designing"
      title="Design That Drives Brand Success"
      description="Our creative team crafts visual experiences that captivate audiences, build brand recognition, and convert prospects into loyal customers."
      services={services}
    />
  )
}
