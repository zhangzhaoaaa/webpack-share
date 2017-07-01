/**
 *
 Created by zhangzhao on 2017/7/1.
 Email: zhangzhao@gomeplus.com
 */
import test from './test.txt';
function hello(msg) {
    console.log('hello', msg);
}

class Test{
    constructor(ops) {
        this.ops = {
            name: 'God'
        };

        Object.assign(this.ops, ops || {})
    }
    sayHello() {
        alert(this.ops.name);
    }
}

hello(test);

new Test({
    name: 'zeromike'
}).sayHello();