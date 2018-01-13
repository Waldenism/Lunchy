'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    devtool: 'inline-source-map',

    entry: [_path2.default.join(__dirname, '../../client/src/index.js')],

    output: {
        path: _path2.default.join(__dirname, '../../client/public'),
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
//# sourceMappingURL=webpack.config.js.map