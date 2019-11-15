const session = require('express-session');
const passport = require('passport');
// const { Strategy: TwitterStrategy } = require('passport-twitter')
const { OAuth2Strategy: GoogleStrategy } = require('passport-google-oauth')
// const { Strategy: FacebookStrategy } = require('passport-facebook')
const { Strategy: GithubStrategy} = require('passport-github')
const { GOOGLE_CONFIG, GITHUB_CONFIG} = require('../config')

module.exports = (app) => { 

  // saveUninitialized: true allows us to attach the socket id to the session
  // before we have athenticated the user
  app.use(session({ 
    secret: process.env.SESSION_SECRET, 
    resave: true, 
    saveUninitialized: true,
    cookie : { secure : false }
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  // Allowing passport to serialize and deserialize users into sessions
  passport.serializeUser((user, cb) => cb(null, user))
  //passport.deserializeUser((obj, cb) => cb(null, obj))
  passport.deserializeUser(function(id, done) {
    done(null, id);
  });

  // The function that is called when an OAuth provider sends back user 
  // information.  Normally, you would save the user to the database here
  // in a callback that was customized for each provider.
  const callback = (accessToken, refreshToken, profile, cb) => cb(null, profile)

  // Adding each OAuth provider's strategy to passport
  // passport.use(new TwitterStrategy(TWITTER_CONFIG, callback))'
  //console.log(GOOGLE_CONFIG);
  passport.use(new GoogleStrategy(GOOGLE_CONFIG, callback))
  // passport.use(new FacebookStrategy(FACEBOOK_CONFIG, callback))
  //passport.use(new GithubStrategy(GITHUB_CONFIG, callback))
}// lib/passport.init.js
 