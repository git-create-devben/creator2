/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "frenify.com",
      },
    ],
  },
};

module.exports = nextConfig;
