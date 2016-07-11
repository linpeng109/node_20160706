/**
 * Created by Mars on 2016/7/6.
 */
var mongoose = require('../routes/mongoose');
var User = require('../routes/user')(mongoose);
var uuid = require('uuid');

before(function (done) {
    mongoose.connection.on('open', done);
});
describe("insert测试", function () {
    it("insert", function (done) {
        const you = new User();
        you.userName = uuid.v4();
        you.passWord = 'linpeng109';
        you.department = 'tech';

        User.insert(you, done);
    })
})
describe("list测试", function () {
    this.timeout(15000);
    it("listall", function (done) {
        User.findAll(function (err, result) {
            if (err) {
                console.error.bind(console, err);
            }
            console.log(JSON.stringify(result));
            done();
        });
    });
});