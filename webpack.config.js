module.exports={
  entry:'./index.js',
  output:{filename:'index.bundle.js'},
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
  }
}