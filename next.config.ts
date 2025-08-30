import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Build paytida ESLint xatolarini tekshirmaydi
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
