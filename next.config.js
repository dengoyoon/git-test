/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// module.exports = {
//   reactStrictMode: true,
//   async rewrites() {
//       return [
//         {
//           source: '/api/:path*',
//           destination: 'https://openapi.naver.com/:path*',
//         },
//       ]
//     }
// };