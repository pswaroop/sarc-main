"use client";
import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";

const clients = [
  { name: "Pure Supply", logo: "https://www.puresupply.in/logo.jpg" }, // Add real logos
  {
    name: "Kshiti Organics",
    logo: "https://www.kshitiorganics.com/kshitilogonobg.png",
  },
  {
    name: "Thrisheka Jewels",
    logo: "https://www.thrishekajewels.com/assets/logo-zoom-Db7Vn7XS.png",
  },
  {
    name: "Biryaniwala & Cafe",
    logo: "https://www.biryaniwalacafe.com/logo.png",
  },
  {
    name: "Taxwiz Solutions",
    logo: "https://www.taxwizsolutions.online/assets/logo-x6aq5k0A.png",
  },
  {
    name: "cdmonline",
    logo: "https://www.cdmonline.in/cmdlogo.svg",
  },
  {
    name: "Ganvik Solutions",
    logo: "https://ganvik.vercel.app/assets/logo-B9jBynqB.png",
  },
  {
    name: "The One & Only Salon",
    logo: "https://www.theoneandonlysalonfranchise.in/assets/logo-b3MEGRyL.png",
  },
  {
    name: "The Lassi Story",
    logo: "https://www.lassistory.co.in/assets/lassi-story-logo-FVMNMOF3.png",
  },
  {
    name: "Atlas Fitness Elite",
    logo: "https://www.atlasfitnesselite.com/footer-logo.png",
  },
  {
    name: "Flavor on Wheels",
    logo: "https://flavoronwheels.com/assets/fow-logo-D1v1Be5L.webp",
  },
  // ... rest with logos
];

export function ClientsCarousel() {
  return (
    <section className="bg-gradient-to-b from-background to-muted/20 py-24 overflow-hidden relative">
      {/* Subtle bg pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-50" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <SectionHeading
          label="Our Clients"
          title="Trusted by 100+ Premium Brands"
          description="Leading companies across tech, finance, healthcare, and beyond partner with StaffArc for transformative solutions."
          className="text-center"
        />
      </div>

      <div className="mt-20 space-y-8">
        {/* Row 1: Left scroll */}
        <MarqueeRow direction="ltr">
          {clients.map((client, i) => (
            <ClientCard key={i} client={client} index={i} />
          ))}
        </MarqueeRow>

        {/* Row 2: Right scroll */}
        <MarqueeRow direction="rtl">
          {clients
            .slice()
            .reverse()
            .map((client, i) => (
              <ClientCard key={`r2-${i}`} client={client} index={i} />
            ))}
        </MarqueeRow>
      </div>
    </section>
  );
}

// Premium marquee wrapper
function MarqueeRow({
  children,
  direction,
}: {
  children: React.ReactNode;
  direction: "ltr" | "rtl";
}) {
  const [isHovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/80 backdrop-blur-xl"
      initial={false}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Inner glow border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 p-1" />

      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />

      <motion.div
        className="flex"
        animate={{
          x: direction === "ltr" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ animationPlayState: isHovered ? "paused" : "running" }}
      >
        {children}
        {children} {/* Duplicate for seamless loop */}
      </motion.div>
    </motion.div>
  );
}

// Premium client card
function ClientCard({
  client,
  index,
}: {
  client: { name: string; logo: string };
  index: number;
}) {
  return (
    <motion.div
      className="mx-6 flex shrink-0 items-center justify-center p-6"
      whileHover={{
        scale: 1.05,
        y: -4,
        transition: { type: "spring", stiffness: 400 },
      }}
      initial={{ opacity: 0.7 }}
    >
      <div className="group relative flex h-20 w-48 items-center justify-center overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card to-muted shadow-lg backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-500">
        {/* Logo/Image */}
        <motion.img
          src={client.logo}
          alt={client.name}
          className="h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-700 max-h-16 object-contain"
          whileHover={{ scale: 1.1 }}
        />

        {/* Fallback text */}
        <motion.span
          className="absolute inset-0 flex items-center justify-center px-4 text-xs font-semibold text-muted-foreground/80 group-hover:text-foreground tracking-tight whitespace-nowrap backdrop-blur-sm hidden md:flex"
          initial={{ opacity: 1 }}
          animate={{ opacity: client.logo ? 0.3 : 1 }}
        >
          {client.name}
        </motion.span>

        {/* Premium glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl blur-xl -z-10"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
}
