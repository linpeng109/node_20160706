/**
 * Created by Mars on 2016/7/6.
 */
var express = require('express');
var router = express.Router();
var passport = require('./passportHttp');
var auth = passport.authenticate('basic', {session: false});

var mongoose = require('mongoose');
var User = require('./user')(mongoose);

router.get('/', function (req, res) {
    res.send('Welcome to list!')
});

router.get('/listall', function (req, res) {
    User.findAll(function (result) {
        res.send(JSON.stringify(result));
    })
});

router.get('/private', auth, function (req, res) {
    res.json(req.user);
});
module.exports = router;