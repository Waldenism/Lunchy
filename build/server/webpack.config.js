'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var APP_DIR = _path2.default.resolve(__dirname, '../../client/src');
var BUILD_DIR = _path2.default.resolve(__dirname, '../../client/public');

exports.default = {
    devtool: 'inline-source-map',

    entry: [APP_DIR + '/index.js'],

    output: {
        path: _path2.default.join(__dirname, '../../client/public'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    module: {
        rules: [{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }, { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }, { test: /\.png$/, loader: 'url-loader?limit=100000' }, { test: /\.jpg$/, loader: 'file-loader' }, { test: /\.css$/, loader: ['style-loader', 'css-loader'] }, { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' }, { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff' }, { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=application/octet-stream' }, { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }]
    },

    resolve: {
        //extensions that should be used to resolve modules
        extensions: ['.js', '.jsx', '.css'],
        modules: ['node_modules']
    },

    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
//# sourceMappingURL=webpack.config.js.map