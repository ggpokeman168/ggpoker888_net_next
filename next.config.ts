import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin(
  "./src/i18n/request.ts" // 告诉插件配置文件的位置
);

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    reactCompiler: true,
  },

  /* config options here */
  // 如果你打算用纯静态导出（无 Webhook/ISR 需求），可以用 output: 'export'
  // 但为了方案 A 的自动更新，建议保留默认配置，通过 Cloudflare Adapter 处理
  images: {
    // 预先允许 Sanity 的图片域名，方便后续搬运
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  // 1. 允许在有 ESLint 错误的情况下完成构建
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 2. 允许在有 TypeScript 类型错误的情况下完成构建
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withNextIntl(nextConfig);
