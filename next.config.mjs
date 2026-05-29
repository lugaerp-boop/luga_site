/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/precos",
        destination: "/contato",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
