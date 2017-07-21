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
        home: './home.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[chunkhash:7].js'
    }
}