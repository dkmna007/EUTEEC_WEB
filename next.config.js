const path = require("path");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  webpack(config, options) {
    config.resolve.alias["@"] = path.join(__dirname, "src/");
    return config;
  },

  // devIndicators: {
  //   autoPrerender: false
  // },
  exportPathMap: () => ({})
};
