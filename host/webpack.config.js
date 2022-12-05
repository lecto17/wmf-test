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
        port: 3001,
    },
    output: {
        publicPath: "http://localhost:3001/",
    },
    module:{
        rules: [
            {
                test: /\.css?$/,
                use: ["style-loader", "css-loader"],
            }, 
            {   
                test: /\.jsx?$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-react"],
                        },
                    }
                ],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "main",
            library: { type: "var", name: "main" },
            remotes: {
                app1: "app1",
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