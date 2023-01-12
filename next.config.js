/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en-US', 'nl-NL'],
    defaultLocale: 'en-US',
  },
}

module.exports = nextConfig
