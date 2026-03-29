import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		turbopackFileSystemCacheForDev: false,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.pexels.com",
			},
		],
	},
};

export default nextConfig;
