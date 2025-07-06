import type { NextConfig } from 'next';

/**
 * Next.js 設定オブジェクト
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',  
      },
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',  
      },
    ],
  },
};

export default nextConfig;