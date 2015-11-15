/* @flow */

module.exports = {

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './client/app/index.js'
  ],

  output: {
    path: __dirname + '/client/build',
    filename: 'bundle.js',
    publicPath: '/build'
  },

  resolve: {
    extensions: ['', 'index.js', '.js', '.css']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus'
      }
    ]
  },

  devServer: {
    contentBase: './client'
  }

}
