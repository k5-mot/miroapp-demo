import type { NextConfig } from "next";

const isExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";
const nextConfig: NextConfig = {
  /* config options here */
  output: isExport ? "export" : undefined,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.jp"
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com"
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com"
      }
    ]
  }
};

export default nextConfig;
