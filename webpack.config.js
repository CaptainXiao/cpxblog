var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var postcssImport = require('postcss-import');

const path = require('path');
const PATHS = {
  src: path.resolve(__dirname, 'app/js'),
  local: path.resolve(__dirname, 'app/js')
};

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:9999',
    'webpack/hot/only-dev-server',
    PATHS.src
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loaders: ['babel'],
        include: PATHS.src
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass', 'postcss']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'postcss']
      },
      {
        test: /\.svg$/,
        loaders: ['svg-inline']
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: "url?limit=512&name=[name].[ext]"
      }

    ]
  },
  postcss: function(webpack) {
    return [
      postcssImport({
        addDependencyTo: webpack
      }),
      autoprefixer({
        browsers: ['last 2 versions', '> 5%']
      })
    ];
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.local,
    filename: 'app.js',
    publicPath: 'http://127.0.0.1:9999/js/'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './local',
    hot: true
  },
  debug: true,
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
