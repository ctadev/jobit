/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "s24.q4cdn.com",
      "www.capgemini.com",
      "encrypted-tbn0.gstatic.com",
      "www.tcs.com",
    ],
  },
};

module.exports = nextConfig;
