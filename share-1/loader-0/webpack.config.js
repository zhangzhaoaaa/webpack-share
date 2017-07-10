/**
 *
 Created by zhangzhao on 2017/7/1.
 Email: zhangzhao@gomeplus.com
 */
var path = require('path');
module.exports = {
    context: __dirname,
    entry: {
        main: './index.js',
        home: './home/home.js'
    },
    output: {
        hashDigest: 'hex',
        hashDigestLength: 10,
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[chunkhash].js',
        library: "MyLibrary",
        libraryTarget: "umd",
        publicPath: "http://cdn.example.com/dist/"
    },
    resolve: {
        extensions: [".js", ".json"],
        alias: {
            h: path.resolve(__dirname, 'home/')
        }
    },
    devtool: "eval",
    module: {
        // 提高了编译速度
        noParse: function(content) {
            return /jquery/.test(content);
        },
        rules:[
            {
                test: /.txt$/,
                use: 'raw-loader'
            }
        ]
    },
    externals: {
        jquery: 'jQuery'
    },
    stats: {
        assets: true,
        cached: true
    }
}