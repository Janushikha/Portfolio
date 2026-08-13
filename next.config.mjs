import withMDX from '@next/mdx'

const basePath = process.env.NEXT_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    output: 'export',
    trailingSlash: true,
    basePath,
    assetPrefix: basePath,
    images: {
        unoptimized: true,
    },
};

export default withMDX()(nextConfig)