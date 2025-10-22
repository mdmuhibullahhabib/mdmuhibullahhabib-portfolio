/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["via.placeholder.com"],
          domains: ["i.ibb.co"], // ✅ allow this image host
 
  },
};
export default nextConfig;
