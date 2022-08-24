const withMDX = require("@next/mdx")({
  options: {
    providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withMDX();
module.exports = nextConfig;
