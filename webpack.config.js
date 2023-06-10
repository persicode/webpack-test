const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

module.exports = {
    context: path.resolve(__dirname, 'src'),

    mode: 'development',

    entry: {
        main: './index.js',
        analytics: './analytics.js'
    },

    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },

    devServer: {
        port: 4200,
        hot: isDev
    },

    resolve: {
        extensions: ['.js', '.json', '.png'],

        alias: {
            '@models': path.resolve(__dirname, 'src/models'),
            '@': path.resolve(__dirname, 'src')
        }
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, 'src/favicon.ico'),
                        to: path.resolve(__dirname, 'dist')
                    }
                ]
            }
        ),
        new MiniCSSExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCSSExtractPlugin.loader, 'css-loader']
            },

            {
                test: /\.(jpe?g|png|gif|svg)$/,
                type: 'asset/resource'
            },

            {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: 'asset/resource'
            }
        ]
    }
}