/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build safety (REMOVE in production)
  typescript: {
    ignoreBuildErrors: false,  // Fix TS errors first!
  },
  
  // Image optimization (CRITICAL for SEO/Core Web Vitals)
  images: {
    unoptimized: false,  // Enable WebP/AVIF compression
    minimumCacheTTL: 31536000,  // 1 year CDN cache
    formats: ['image/webp', 'image/avif'],  // Modern formats
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',  // External images
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'staffarc.in',  // Your domain
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
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ];
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateViewport: true,
  swcMinify: true,
  
  // Experimental (Next.js 14+)
  experimental: {
    optimizePackageImports: ['lucide-react', 'sonner', 'next-themes'],
    fontLoaders: true,  // Faster font loading
    serverComponentsExternalPackages: ['@prisma/client'],  // If using Prisma
  },

  // Trailing slash (SEO canonical URLs)
  trailingSlash: false,

  // PWA support (bonus)
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
};

export default nextConfig;
