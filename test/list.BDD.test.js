/**
 * Created by Mars on 2016/7/6.
 */
var mongoose = require('../routes/mongoose');
var user = require('../routes/user')(mongoose);

describe("list测试", function () {

    before(function (done) {
        mongoose.connection.on('open', done);
    });
    it("listall", function (done) {
        user.findAll(function (err, result) {
            if (err) {
                console.error.bind(console, err);
            }
            console.log(JSON.stringify(result));
            done();
        });
    });
});