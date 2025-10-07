import type {NextConfig} from "next";

const nextConfig = {
    output: 'standalone',
    // serverActions: {
    //     bodySizeLimit: '500mb',
    // },
    experimental: {
        serverActions: {
            bodySizeLimit: '500mb',
        }
    },
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
} satisfies NextConfig;

export default nextConfig;
