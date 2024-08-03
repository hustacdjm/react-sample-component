const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const REGISTER_KEY='react660394d5be361e17e019bbb953b4d7602e2b45629777bc72f515f493';

module.exports = options => {
  return {
    entry: './index.js',
    output: {
      filename: 'bundle.js',
      publicPath: "auto",
      uniqueName: "mfe4"
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: ['@babel/react', '@babel/env']
              }
            }
          ],
        },
        {
          test: /\.css$/,
          use: [
            'style-loader', // Injects styles into DOM
            'css-loader',   // Resolves CSS imports
            'postcss-loader' // Processes CSS with PostCSS (including Tailwind)
          ],
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({

          // For remotes (please adjust)
          name: REGISTER_KEY,
          library: { type: "var", name: REGISTER_KEY },
          filename: `remoteEntry-${REGISTER_KEY}.js`,
          exposes: {
            [`./${REGISTER_KEY}`]: './app.js',
          },        
          shared: ["react", "react-dom"]
        }),
        new CopyWebpackPlugin({
          patterns: [
            {
              from: './*.html'
            }
          ]
        })
    ],
    devServer: {
      port: 4204
    }
  }
}
