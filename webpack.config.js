const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/js/index.js",
    mode: "development",
    output: {
        filename: "./js/main.js",
        path: path.resolve(__dirname, "docs"),
        // clean: true,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [["@babel/preset-env"]],
                    },
                },
            },
        ],
    },
    devtool: "inline-source-map",
    devServer: {
        static: "./docs",
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html",
        }),
    ],
};
