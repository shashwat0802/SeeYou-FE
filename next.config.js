const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['d3rxw9j3lcvduw.cloudfront.net'],
  },
  reactStrictMode: false, 
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add custom alias configuration
    config.resolve.alias['@'] = path.join(__dirname, '.');
    return config;
  },
};

module.exports = nextConfig;
