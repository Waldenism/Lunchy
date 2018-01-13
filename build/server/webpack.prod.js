'use strict';

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackMerge = require('webpack-merge');

var _webpackMerge2 = _interopRequireDefault(_webpackMerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var common = require('./webpack.common.js');

common.devtool = 'source-map';
common.plugins = [new _webpack2.default.DefinePlugin({
    "process.env": {
        "NODE_ENV": JSON.stringify("production")
    }
})];

module.exports = common;

// module.exports = merge(common, {
//     devtool: 'source-map',
//     plugins: [
//         new UglifyJSPlugin({
//             sourceMap: true
//         })
//     ]
// });
//# sourceMappingURL=webpack.prod.js.map