/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ['lt', 'en'],
    defaultLocale: 'lt'
  },
  localePath: path.resolve('./src/locales'),
}

module.exports = nextConfig