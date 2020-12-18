const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, 'dist'
    ),
    publicPath: '/'
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/template.html"
  })],
  resolve: {
    alias: {
      "@actions": path.resolve(__dirname, "./src/store/actions/"),
      "@store": path.resolve(__dirname, "./src/store/store"),
      "@socket": path.resolve(__dirname, "./src/components/Socket"),
      "@styled": path.resolve(__dirname, "./src/components/StyledComponents"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@styles": path.resolve(__dirname, "./src/styles"),
    },
    extensions: ["*", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: ["html-loader"]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(svg|png|jpg|gif|webm)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "assets",
            esModule: false
          }
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  }
}
