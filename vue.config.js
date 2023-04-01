const {defineConfig} = require('@vue/cli-service')
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

let cesiumSource = "./node_modules/cesium/Source";
let cesiumWorkers = "Workers";
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    externals: {
      'cesium': 'Cesium',
    },
    output: {
      sourcePrefix: " ", // 让webpack 正确处理多行字符串配置 amd参数
    },
    amd: {
      toUrlUndefined: true, // webpack在cesium中能友好的使用require
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        "@": path.resolve("src"),
        cesium: path.resolve(__dirname, cesiumSource),
      }
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {from: path.join(cesiumSource, cesiumWorkers), to: "Workers"},
          {from: path.join(cesiumSource, "Assets"), to: "Assets"},
          {from: path.join(cesiumSource, "Widgets"), to: "Widgets"},
          {from: path.join(cesiumSource, "ThirdParty/Workers"), to: "ThirdParty/Workers"}
        ]
      }),
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify("./"),
      }),
    ],
    module: {
      unknownContextCritical: false,
      unknownContextRegExp: /\/cesium\/cesium\/Source\/Core\/buildModuleUrl\.js/,
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: '@open-wc/webpack-import-meta-loader',
          },
        },
      ]
    },
  },
  devServer: {
    hot: true,
    open: true,
    // 代理
    proxy: {
      '/api': {
        target: 'http://localhost:8888/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    port: 9090,
  }
})
