const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => ({
    entry: './src/index.ts',
    mode: argv.mode || 'production',
    devtool: false,
    plugins: [new webpack.SourceMapDevToolPlugin({})],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: 'Output Management',
    //     }),
    // ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
});