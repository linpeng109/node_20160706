/**
 * Created by Mars on 2016/7/7.
 * mongodb://root:admin@ds021989.mlab.com:21989/mongodb_test_20160324
 */
const mongoose = require('mongoose');
mongoose.connect("mongodb://yunweiadmin:adminMiteno1@114.215.92.95:29017/admin");
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error'));
db.once('open', function () {
    console.log('The DataBase Success Opened!');
});

module.exports = mongoose;
