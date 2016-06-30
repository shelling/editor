import webpack from "webpack";
import path from "path";

export default {
  entry: {
    application: "./javascripts/application.js",
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/",
  },

  resolve: {
    extensions: ["", ".js", ".jsx", ".css"],
    modulesDirectories: ["javascripts", "node_modules"],
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      },
    ]
  },

  plugins: [
  ],
};
