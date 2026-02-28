import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed output: "export" for web service deployment
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
