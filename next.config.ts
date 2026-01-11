import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: 'export',
    basePath: '/home',        // repo 이름
    assetPrefix: '/home/',
    images: {
      unoptimized: true,      // static export 필수
    },
};

export default nextConfig;
