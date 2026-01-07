import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/carpe-omnia",
        destination: "/releases/carpe-omnia/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
