import type { NextConfig } from "next";

const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'rickandmortyapi.com',
                port: '',
                pathname: '/api/character/avatar/**',
            },
        ]
    }
}

module.exports = nextConfig
