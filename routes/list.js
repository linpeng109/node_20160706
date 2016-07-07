/**
 * Created by Mars on 2016/7/6.
 */
var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    const result = 'Welcom to list page!';
    console.log(result);
    res.send(result);
});
module.exports = router;
