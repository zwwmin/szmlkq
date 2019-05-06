'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

const vuxLoader = require('vux-loader')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

// 原来的 module.exports 代码赋值给变量 webpackConfig

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}



const webpackConfig = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js',
    vendor: [
      'vue',
      'axios',
      'vue-router',
      'vue-awesome-swiper'
      // 很长很长
    ],
  },
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'axios': 'axios',
    'jquery': 'jQuery',
    'VueLazyload': 'vue-lazyload',
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    chunkFilename: '[name].js', //以文件名为最终打包的名称
    publicPath: process.env.NODE_ENV === 'production' ?
      config.build.assetsPublicPath :
      config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', 'less', 'sass'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '~': resolve('/static'),
      '~C': resolve('src/components'),
      '~I': resolve('src/assets/img')
    }
  },
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    noInfo: true,
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin('common.js'),
    // new webpack.ProvidePlugin({
    //   jQuery: "jquery",
    //   $: "jquery"
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: ({ resource }) => (
    //     resource &&
    //     resource.indexOf('node_modules') >= 0 &&
    //     resource.match(/\.js$/)
    //   ),
    // }),
  ],

}


module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui']
})
