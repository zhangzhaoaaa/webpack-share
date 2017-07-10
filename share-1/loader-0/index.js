/**
 *
 Created by zhangzhao on 2017/7/1.
 Email: zhangzhao@gomeplus.com
 */
/***
 * sayhello
 * @returns {string}
 */

var $ = require("jquery");
var txt = require("./test.txt");
var h = require('h/home');
var a = require("./a");
function sayHello() {
    return 'hello world';
}

console.log("jquery....", txt);

module.exports = sayHello;