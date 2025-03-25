const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/initial',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
