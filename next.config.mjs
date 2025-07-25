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
};

export default withMDX(config);
