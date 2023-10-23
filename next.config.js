/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  experimental: {
    serverActions: true,
    typedRoutes: true,
  },
};

module.exports = nextConfig;
