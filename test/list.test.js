/**
 * Created by Mars on 2016/7/6.
 */
var uuid = require('uuid');

describe("list测试", function () {
    it("uuid测试", function () {
        const result = uuid.v4();
        console.log(result);
    });
});