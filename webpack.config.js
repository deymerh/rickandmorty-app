const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@componets': path.resolve(__dirname, 'src/components')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    { loader: 'html-loader' }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: './index.html',
            inject: true,
            template: './public/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: 3005,
    },
};