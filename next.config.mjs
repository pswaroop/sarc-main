/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build safety
  typescript: {
    ignoreBuildErrors: false, // Fix TS errors locally before building!
  },

  // Image optimization (SEO/Core Web Vitals)
  images: {
    unoptimized: false, // Enables WebP/AVIF
    minimumCacheTTL: 31536000, // 1 year CDN cache
    formats: ['image/webp', 'image/avif'], // Modern formats
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // External images
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'staffarc.in', // Your domain
      },
      {
        protocol: 'https',
        hostname: 'www.puresupply.in', // Needed for your clients-carousel
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Security Headers (SEO trust signals)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // SEO Canonical URLs
  trailingSlash: false,

  // Next.js 16 Experimental optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', 'sonner', 'next-themes'],
  },

  // Database External Packages (moved out of experimental in Next 15+)
  serverExternalPackages: ['@prisma/client'],
};

export default nextConfig;
