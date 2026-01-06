import type { NextConfig } from "next";

// Enable bundle analyzer via ANALYZE=true
// Using require here for compatibility with the analyzer's CommonJS export
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Reduce client bundle by enforcing per-member imports where possible
  modularizeImports: {
    "lucide-react": {
      transform: "lucide-react/{{member}}",
    },
    "@tabler/icons-react": {
      transform: "@tabler/icons-react/{{member}}",
    },
  },
  compiler: {
    // Strip console.* in production builds
    removeConsole: true,
  },
  // Avoid generating large browser source maps in production
  productionBrowserSourceMaps: false,
};

export default withBundleAnalyzer(nextConfig);
