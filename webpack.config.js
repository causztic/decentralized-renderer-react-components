module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  output: {
    path: __dirname + "/build",
    filename: "index.js",
    libraryTarget: "umd",
    library: "decentralizedRenderer",
    globalObject: "this"
  },
  externals: {
    react: "react",
    "react-dom": "react-dom"
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpe?g|gif|jp2)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        }
      }
    ]
  }
};
