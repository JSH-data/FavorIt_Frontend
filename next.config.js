/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['s3-favorit-dev.s3.ap-northeast-2.amazonaws.com'],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
