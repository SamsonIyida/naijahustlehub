import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["source.unsplash.com"],
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ This allows the build to continue even with ESLint errors
  },
};

export default nextConfig;
