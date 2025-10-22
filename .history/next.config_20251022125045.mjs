/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "via.placeholder.com", // আগের domain
      "i.ibb.co",             // নতুন domain যেখান থেকে project images load হবে
    ],
  },
};

export default nextConfig;
