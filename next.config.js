/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.panaverse.co',
        port: '',
        pathname: '/red-p-logo-text_dao_croped.png',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/wikipedia/commons/thumb/2/25/President_of_Pakistan_Dr_Arif_Alvi_%28cropped%29.jpg/1200px-President_of_Pakistan_Dr_Arif_Alvi_%28cropped%29.jpg',
      },
    ],
  },
}
module.exports = nextConfig
