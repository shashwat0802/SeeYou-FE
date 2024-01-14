const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add custom alias configuration
    config.resolve.alias['@'] = path.join(__dirname, '.');
    return config;
  },
};

module.exports = nextConfig;
