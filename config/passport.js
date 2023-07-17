const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');

passport.use(new GoogleStrategy(
    {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
    },
    async function(accessToken, refreshToken, Profile,cb) {
        try {
           let user = await User.findOne({ googleId: Profile.id });
           if (user) return cb(null, user);
           user = await User.create({
            name: Profile.displayName,
            googleId: Profile.id,
            email: Profile.emails[0].value,
            avatar: Profile.photos[0].value
          });
        } catch(err) {
            return cb(err);
        }
    }
));

passport.serializeUser(function(user, cb) {
    cb(null, user._id);
  });

  passport.deserializeUser(async function(userId, cb) {
    // It's nice to be able to use await in-line!
    cb(null, await User.findById(userId));
  });