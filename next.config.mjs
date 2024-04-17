/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bityl.co",
        // port: "",
        // pathname: "",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        // port: "",
        // pathname: "",
      },
    ],
  },
};

export default nextConfig;
