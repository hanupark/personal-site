import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bfawpznomljwsrsjvryo.supabase.co",
      },
    ],
  },
};

export default nextConfig;
