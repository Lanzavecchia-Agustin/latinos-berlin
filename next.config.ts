import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,
    experimental: {
        authInterrupts: true,
    },
    webpack: (config: { plugins: unknown[]; }, { isServer }: { isServer: boolean }) => {
        if (isServer) {
            config.plugins = [...config.plugins, new PrismaPlugin()];
        }
        return config;
    },
};

export default nextConfig;