'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

exports.default = {
    entry: [path.join(__dirname, '../../client/src/index.js')],

    plugins: [new CleanWebpackPlugin(['dist']), new HtmlWebpackPlugin({
        title: 'Production'
    }), new _webpack2.default.EnvironmentPlugin(['NODE_ENV'])],

    output: {
        path: path.join(__dirname, '../../client/public'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            query: {
                presets: ['env', 'react'],
                compact: false
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }]
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
//# sourceMappingURL=webpack.common.js.map