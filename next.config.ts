import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    localPatterns: [
      {
        pathname: '/api/files/**',
      },
      {
        pathname: '/api/files/**',
      },
      {
        pathname: '/assets/**',
      },
      {
        pathname: '/assets/**',
      }
    ],
    unoptimized: false,
  },
};

export default nextConfig;
