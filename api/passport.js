const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

const User = require("./models/User");

const dotenv = require("dotenv");
dotenv.config();


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(JSON.stringify(profile));
    }
  )
);


