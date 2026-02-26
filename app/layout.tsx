import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { ChatBot } from "@/components/chatbot";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  // Basic SEO
  title: {
    default: "StaffArc - Your Tech & Business Partner",
    template: "%s | StaffArc", // Page-specific: "About | StaffArc"
  },
  description:
    "Smart Solutions. Complete Growth. StaffArc is your one-stop technology and business partner for IT development, digital marketing, staffing, and compliance solutions.",
  keywords: [
    "IT solutions",
    "staffing solutions",
    "graphic designing",
    "digital marketing",
    "GST management",
    "corporate services",
    "web development",
    "React",
    "Django",
    "Visakhapatnam",
    "Hyderabad",
    "Andhra Pradesh",
    "StaffArc",
  ],

  // Identity
  authors: [{ name: "Harshith Pentakota", url: "https://staffarc.in/about" }],
  creator: "Harshith Pentakota",
  publisher: "StaffArc Technologies",

  // Icons & Branding
  metadataBase: new URL("https://staffarc.in"), // Update with your domain
  icons: {
    icon: "/images/staffarc-logo.png",
    shortcut: "/favicon.ico",
    apple: "/images/staffarc-logo.png",
  },
  manifest: "/manifest.json", // Optional PWA

  // Robots & Crawling
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code-here", // From GSC
    yandex: "your-yandex-code",
  },

  // Canonical & Alternates
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/en-IN",
    },
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://staffarc.in",
    siteName: "StaffArc",
    title: "StaffArc - IT Solutions, Staffing & Business Partner",
    description:
      "Your Tech & Business Partner. IT Solutions, Graphic Design, Digital Marketing, Staffing, GST Management & Corporate Services.",
    images: [
      {
        url: "/og-image-home.jpg", // 1200x630px
        width: 1200,
        height: 630,
        alt: "StaffArc - Technology & Business Solutions",
      },
    ],
    emails: ["procurement@staffarc.in"],
  },

  // Twitter Card (X/Twitter)
  twitter: {
    card: "summary_large_image",
    title: "StaffArc - Your Tech & Business Partner",
    description:
      "IT Solutions, Staffing, Graphic Design, Digital Marketing & More",
    site: "@StaffArc",
    creator: "@StaffArc",
    images: ["/twitter-image-home.jpg"], // 1200x675px
  },

  // App Links
  appLinks: {
    ios: {
      url: "https://apps.apple.com/app/staffarc/id123456789",
      app_store_id: "123456789",
    },
  },

  // Other Meta Tags
  other: {
    // JSON-LD Schema (Organization)
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "StaffArc Technologies",
      url: "https://staffarc.in",
      logo: "https://staffarc.in/images/staffarc-logo.png",
      description:
        "IT Solutions, Staffing, Graphic Design, Digital Marketing, GST Management & Corporate Services",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Visakhapatnam",
        addressRegion: "Andhra Pradesh",
        postalCode: "530001",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-8639619426",
          contactType: "customer service",
          email: "procurement@staffarc.in",
          availableLanguage: ["English", "Hindi", "Telugu"],
        },
      ],
      sameAs: [
        "https://www.facebook.com/share/1A3JaeDBxN/",
        "https://x.com/StaffArc",
        "https://www.linkedin.com/company/staffarc/",
        "https://www.instagram.com/staffarc",
      ],
      founder: {
        "@type": "Person",
        name: "Harshith Pentakota",
      },
    }),

    // Additional meta tags
    "google-site-verification": "your-gsc-code",
    "theme-color": "#3b82f6", // Primary color
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0a09" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="staffarc-theme"
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ChatBot />
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
