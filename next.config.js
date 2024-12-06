/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true
  },
  // 针对 Cloudflare Pages 的特殊配置
  experimental: {
    isrMemoryCacheSize: 0,
  },
  // 禁用默认的 x-powered-by header
  poweredByHeader: false,
}

module.exports = nextConfig 