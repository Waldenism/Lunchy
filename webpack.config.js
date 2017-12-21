import webpack from 'webpack'
import path from 'path'

export default {
    devtool: 'inline-source-map',

    entry: [
        path.resolve(__dirname, 'client/src/index.js')
    ],

    output: {
        path: path.resolve(__dirname, 'client/public/'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
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
    }
}
