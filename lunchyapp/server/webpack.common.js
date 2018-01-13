import webpack from 'webpack'
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

export default {
    entry: [
        path.join(__dirname, '../../client/src/index.js')
    ],

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Production'
        }),
        new webpack.EnvironmentPlugin(['NODE_ENV'])
    ],

    output: {
        path: path.join(__dirname, '../../client/public'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react'],
                    compact: false
                }
            },
            {
                test:/\.css$/,
                loader: "style-loader!css-loader"
            }
        ],
    },

    resolve: {
        //extensions that should be used to resolve modules
        extensions: ['.js', '.jsx','.css'],
        modules: ['node_modules']
    },

    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    }
};
