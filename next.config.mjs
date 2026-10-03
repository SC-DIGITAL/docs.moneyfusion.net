import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "img.youtube.com" },
      {
        protocol: "https",
        hostname: "sc-digital.nyc3.cdn.digitaloceanspaces.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/:lang/:slug*.md",
        destination: "/:lang/llms.mdx/:slug*/content.md",
      },
    ];
  },
};

export default withMDX(config);
