const webpack = require("webpack");

require('babel-core/register');
module.exports = require('./configs/webpack/dev');

module.exports = {
    mode: "production",

    // メインのJS
    entry: {
        vendor: [
            'jquery',
            'cytoscape',
            'cytoscape-qtip',
            // 'bootstrap',
            // 'bootstrap/dist/css/bootstrap.css'
        ],
        app: "./src/main.js"
    },
    // 出力ファイル
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: 'initial',
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
        })
    ],
    performance: {hints: false}
};
