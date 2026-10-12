import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/#about",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/#services",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/#work",
        permanent: true,
      },
      {
        source: "/work",
        destination: "/#work",
        permanent: true,
      },
      {
        source: "/pricing",
        destination: "/#pricing",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

