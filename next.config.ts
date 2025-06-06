import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "res.cloudinary.com",
      "images.unsplash.com",
      "play-lh.googleusercontent.com",
    ],
    // loader: "cloudinary",
    // path: "https://api.cloudinary.com/v1_1/dsaitxphg/image/upload",
  },

  // We remove ESLint
  // run Biome and TypeScript separately in the CI pipeline
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  experimental: {
    // nodeMiddleware: true,
    staleTimes: {
      dynamic: 30,
    },
  },
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
      {
        source: "/ingest/decide",
        destination: "https://us.i.posthog.com/decide",
      },
    ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
