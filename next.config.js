/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'nl'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
