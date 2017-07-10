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
        filename: '[name]-[chunkhash].js'
    },
    resolve: {
        extensions: [".js", ".json", '.jsx'],
        alias: {
            h: path.resolve(__dirname, 'home/')
        }
    },
    devtool: "source-map",
    module: {
        // 提高了编译速度
        noParse: function(content) {
            return /jquery/.test(content);
        },
        rules:[
            {
                test: /.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.js$|\.jsx$/,
                use: 'babel-loader',
                exclude: /node_modules/
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