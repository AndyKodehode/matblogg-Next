/** @type {import('next').NextConfig} */
// const nextConfig = {}



// module.exports = nextConfig
// module.exports = {
//     webpack: (config) => {
//         config.experiments = {
//             ...config.experiments, topLevelAwait: true
//         }
//         return config;
//     }
// }

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
        },
      ],
    },
  };
  
  module.exports = nextConfig