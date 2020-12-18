const path = require("path")
const common = require("./webpack.common")
const merge = require("webpack-merge")

module.exports = merge(common, {
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'dist'
    )
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "sass-resources-loader",
            options: {
              resources: ["./src/scss/mixins.scss"]
            }
          }
        ]
      },
    ]
  }
})
