import webpack from 'webpack';
import merge from 'webpack-merge';
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

common.devtool = 'source-map';
common.plugins = [
    new webpack.DefinePlugin({
        "process.env": {
            "NODE_ENV": JSON.stringify("production")
        }
    })
];

module.exports = common;

// module.exports = merge(common, {
//     devtool: 'source-map',
//     plugins: [
//         new UglifyJSPlugin({
//             sourceMap: true
//         })
//     ]
// });
