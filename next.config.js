/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'pbs.twimg.com',
      'icon-library.com',
      'img.icons8.com',
      'cdn.buymeacoffee.com',
      'p3.hopefulpakistan.com',
      'hopefulpakistan.com'
    ],
  },
}

module.exports = nextConfig