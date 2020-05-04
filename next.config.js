const path = require("path");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  webpack(config, options) {
    config.resolve.alias["@"] = path.join(__dirname, "src/");
    return config;
  }

  // devIndicators: {
  //   autoPrerender: false
  // }

  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     "/": { page: "/" },
  //     "/contact": { page: "/contact" },
  //     "/about": { page: "/about" },
  //     "/settings": { page: "/settings" },
  //     "/blogs": { page: "/blogs" },

  //     // "/blog/[blogId]": {
  //     //   page: "/blog/[blogId]",
  //     //   query: {}
  //     // },

  //     "/blog/action/[action]": {
  //       page: "/blog/action/[action]",
  //       query: {}
  //     },

  //     "/membership/[action]": {
  //       page: "/membership/[action]",
  //       query: {}
  //     },
  //     "/profile/[userId]": {
  //       page: "/profile/[userId]",
  //       query: {}
  //     }
  //   };
  // }
};
