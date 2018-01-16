import webpack from 'webpack'
import path from 'path'

const APP_DIR = path.resolve(__dirname, '../../client/src');
const BUILD_DIR = path.resolve(__dirname, '../../client/public');

export default {
    devtool: 'inline-source-map',

    entry: [
        APP_DIR + '/index.js'
    ],

    output: {
        path: path.join(__dirname, '../../client/public'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    module: {
        rules: [
           { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
           { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
           { test: /\.png$/, loader: 'url-loader?limit=100000' },
           { test: /\.jpg$/, loader: 'file-loader' },
           { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
           { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
           { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
               loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
           { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
               loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
           { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
               loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }
       ]
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
}