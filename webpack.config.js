/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-empty */
/* eslint-disable no-undef */
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import OptimizePlugin from "optimize-plugin";

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "src/index.tsx"),
  },
  experiments: {
    outputModule: true,
  },
  output: {
    module: true,
  },
  target: ["web", "es2017"],
  module: {
    rules: [
      {
        test: /\.ts$/i,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/i,
        include(file) {
          let dir = file.match(/^.*[/\\]node_modules[/\\](@.*?[/\\])?.*?[/\\]/);
          try {
            return dir && !!require(dir[0] + "package.json").exports;
          } catch (e) {}
        },
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            configFile: false,
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    fallback: {
      buffer: require.resolve("buffer"),
    },
  },
  plugins: [new BundleAnalyzerPlugin(), new OptimizePlugin()],
};
