var webpack = require("webpack");

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
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
  ]
}