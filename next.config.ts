import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    domains: ["lh3.googleusercontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.freetogame.com",
        port: "",
        pathname: "/g/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
