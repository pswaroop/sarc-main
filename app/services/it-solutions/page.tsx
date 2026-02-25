import { Metadata } from "next"
import { ServiceDetail } from "@/components/service-detail"

export const metadata: Metadata = {
  title: "IT Solutions",
  description: "Custom software, web & app development, AI/ML solutions, cloud services, cybersecurity, and DevOps from StaffArc.",
}

const services = [
  { title: "Website & App Development", description: "High-performance, responsive websites and native/cross-platform mobile applications built with modern frameworks and best practices." },
  { title: "Custom Software Development", description: "Tailored software solutions designed to streamline your operations, automate workflows, and solve complex business challenges." },
  { title: "Data & AI Solutions", description: "Machine learning models, predictive analytics, NLP, and computer vision solutions that turn your data into actionable intelligence." },
  { title: "Cybersecurity Solutions", description: "Comprehensive security audits, penetration testing, threat detection, and compliance solutions to protect your digital assets." },
  { title: "Cloud Services & Consulting", description: "Cloud migration, infrastructure setup (AWS, Azure, GCP), optimization, and 24/7 managed cloud services for scalability." },
  { title: "DevOps & Automation", description: "CI/CD pipelines, infrastructure as code, containerization (Docker/K8s), and automated testing to accelerate your delivery cycles." },
]

export default function ITSolutionsPage() {
  return (
    <ServiceDetail
      label="IT Solutions"
      title="Transform Ideas into Powerful Digital Reality"
      description="From concept to deployment, our expert development team builds scalable, secure, and innovative technology solutions tailored to your business."
      services={services}
    />
  )
}
