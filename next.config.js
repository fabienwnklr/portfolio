/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
    workerThreads: false,
    cpus: 4
  },
};

module.exports = nextConfig;
