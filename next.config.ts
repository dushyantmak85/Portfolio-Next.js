import type { NextConfig } from 'next'

const isGithubPages = process.env.GITHUB_PAGES === 'true'
const isVercel = process.env.VERCEL === '1'
const repoName = 'loyaldude' // MUST match your GitHub repo name exactly

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: isGithubPages ? 'export' : undefined,

  // Path config for GitHub Pages only
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',

  trailingSlash: true,

  images: {
    unoptimized: true
  },

  env: {
    NEXT_PUBLIC_BASE_URL: isGithubPages
      ? `https://loyaldudee.github.io/${repoName}`
      : isVercel
        ? 'https://loyaldude.vercel.app'
        : 'http://localhost:3000',

    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repoName}` : ''
  },

  webpack: (config) => {
    // GitHub Pages requires custom publicPath, Vercel should not touch it
    if (isGithubPages) {
      config.output.publicPath = `/${repoName}/`
    }

    return config
  }
}

export default nextConfig
