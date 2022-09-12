const passport = require("passport");
const BearerStrategy = require('passport-http-bearer').Strategy;
const User = require('../models/users')
const jwt = require('jsonwebtoken')


passport.use(new BearerStrategy(
    function(token, done) {
        const decoded = jwt.decode(token, 'hh')
      User.findOne({ token: token }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user, { scope: 'all' });
      });
    }
  ));