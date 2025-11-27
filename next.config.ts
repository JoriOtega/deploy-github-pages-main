import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },

  // ✔ GitHub Pages base path
  basePath: isProd ? "/deploy-github-pages-main" : "",
  assetPrefix: isProd ? "/deploy-github-pages-main/" : "",

  // ✔ Required for correct static export structure
  distDir: "out/deploy-github-pages-main"
};

export default nextConfig;
