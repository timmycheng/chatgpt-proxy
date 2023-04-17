/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    // console.log("Called rewrite! ${req}")
    return [
      {
        source: "/proxy/:slug*",
        destination: "https://api.openai.com/:slug*",
      },
      {
        source: "/proxy-sse/:slug*",
        destination: "/api/proxy-sse?path=:slug*",
      },
    ];
  },
  // async afterRewrite(route, result,{req,res}){
  //   console.log("Reworte ${req.url} to ${result.destination}")
  // },
};

module.exports = nextConfig;
