const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { dependencies } = require("webpack");
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: "./src/index",
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3002,
    },
    output: {
        publicPath: "http://localhost:3002/",
    },
    module:{
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-react"],
                },
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "app1",
            library: { type: "var", name: "app1" },
            filename: "remoteEntry.js",
            exposes: {
                "./Counter": "./src/components/counter/index.jsx",
            },
            shared: {
                "react": {
                    singleton: true,
                    requiredVersion: dependencies['react'],
                }, 
                "react-dom": {
                    singleton: true,
                    requiredVersion: dependencies['react-dom'],
                }
            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ]
}