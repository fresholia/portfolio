/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  }
}

module.exports = (phase, { defaultConfig }) => {
  if ('sassOptions' in defaultConfig) {
    defaultConfig['sassOptions'] = {
      includePaths: ['./app', './core'],
      prependData: `@import "~core/ui/styles/_theme.scss";`,
    }
  }
  return {
    ...nextConfig,
    // Other configs here
  }
}
