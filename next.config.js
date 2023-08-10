/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'austingarrett-web.s3.amazonaws.com',
        port: '',
        pathname: '**'
      }
    ]
  }
}

module.exports = nextConfig
