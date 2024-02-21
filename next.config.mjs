/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ["skillicons.dev", "res.cloudinary.com"],
  },
};

export default nextConfig;
