const path = require('path');
const HWP = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                url: true,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                url: true,
                                sourceMap: true
                            }
                        }
                    ]
                })
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        port: 3000,
        open: true,
        proxy: {
            "/api": "http://localhost:8080"
        }
    },
    plugins: [
        new HWP({
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: path.join(__dirname, "./src/index.html"),
        }),
        new ExtractTextPlugin({
            filename: 'main.css',
            allChunks: true,
            disable: false
        })
    ]
};