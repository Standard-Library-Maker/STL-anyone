const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/,
            include: path.join(__dirname),
            exclude: /'node_modules|bower_components|dist'/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
}