/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/marketplace",
    assetPrefix: "/marketplace/",
    output: "export",
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
