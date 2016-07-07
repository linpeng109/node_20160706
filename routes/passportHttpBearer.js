/**
 * Created by Mars on 2016/7/7.
 */
var passport = require('passport');
var BearerStrategy = require('passport-http-bearer').Strategy;

passport.use(new BearerStrategy(
    function (token, done) {
        User.findOne({token: token}, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false);
            }
            return done(null, user, {scope: 'all'});
        });
    }
));

module.exports = passport;
