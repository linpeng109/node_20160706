/**
 * Created by Mars on 2016/7/6.
 */
var express = require('express');
var router = express.Router();
var passport = require('./passportHttp');
var auth = passport.authenticate('basic', {session: false});
var mongoose = require('./mongoose');
var User = require('./user')(mongoose);

router.get('/', function (req, res) {
    User.findAll(function (err, result) {
        if (err) {
            console.error.bind(console, err);
        }
        res.jsonp(result);
    })
});

module.exports = router;