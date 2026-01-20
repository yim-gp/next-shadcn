import type { NextConfig } from "next";

// Enable bundle analyzer via ANALYZE=true
// Using require here for compatibility with the analyzer's CommonJS export
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Keep config minimal to avoid disrupting package imports
  compiler: {
    // Strip console.* in production builds
    removeConsole: true,
  },
  // Avoid generating large browser source maps in production
  productionBrowserSourceMaps: false,
};

export default withBundleAnalyzer(nextConfig);
