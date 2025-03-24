/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/initial',
          permanent: true,
        },
      ]
    }
  }
  
  export default nextConfig
  