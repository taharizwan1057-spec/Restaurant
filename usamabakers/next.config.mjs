/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so Cloudflare Pages can serve the output as plain HTML/JS.
  output: "export",
  reactStrictMode: true,
  images: {
    // Required for static export — Next's image optimizer needs a Node server.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
