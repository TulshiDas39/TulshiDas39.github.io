import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages.
  output: "export",
  distDir: "out",
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    // GitHub Pages has no image optimisation server.
    unoptimized: true,
  },
};

export default nextConfig;
