/** @type {import('next').NextConfig} */

const prefix = process.env.DIST || "";

const nextConfig = {
  output: "export",
  basePath: prefix,
  assetPrefix: prefix,
  trailingSlash: true,
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: "canvas" }]; // required to make Konva & react-konva work
    return config;
  },
  publicRuntimeConfig: {
    basePath: prefix,
  },
};

export default nextConfig;
