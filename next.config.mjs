/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Fix cho animejs chunk loading issues
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    // Optimize chunk splitting cho animejs
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks?.cacheGroups,
          animejs: {
            test: /[\\/]node_modules[\\/]animejs[\\/]/,
            name: 'animejs',
            chunks: 'all',
            priority: 10,
          },
        },
      },
    };

    return config;
  },
};

export default nextConfig;

