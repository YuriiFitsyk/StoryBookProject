module.exports = {
  mode: 'development',
  watch: true,

  module: {
    rules: [{
      test: /\.less$/,
      exclude: /node_modules/,
      loader: 'style-loader!css-loader!less-loader'
    }]
  }
}