var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports={
  entry:{
    index:'./index.js',
    vendor: ['react','react-dom','react-pacomo']
  },
  output: {
    path: "bundle",
    filename: "[name].bundle.js",
  },
  module:{
    loaders:[
      {
        test:/\.js/,
        loader:'babel-loader',
        exclude:/node_modules/
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
       // Extract css files
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
    new ExtractTextPlugin("[name].css")
  ]
}