/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
