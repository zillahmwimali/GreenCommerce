/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  reactStrictMode: true,
  images: {
      domains: ["yourDomain.com", 'tmdb.org', 'themoviedb.org',],
      formats: ["image/webp"],
  },
};
