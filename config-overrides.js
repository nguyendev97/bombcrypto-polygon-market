/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack");
module.exports = function override(config, env) {
  config.resolve.fallback = {
    url: require.resolve("url"),
    fs: require.resolve("fs"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    buffer: require.resolve("buffer"),
  };
  config.plugins.push(
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    })
  );

  return config;
};
