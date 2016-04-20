var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports={
  entry:{
    index:'./index.js',
    remote:'./remote.js',
    vendor: ['react','react-dom']
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
       // Extract css files
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
            // Optionally extract less files
            // or any other compile-to-css language
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
    new ExtractTextPlugin("[name].css")
  ]
}