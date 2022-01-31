const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const User = require("./models/User");

const dotenv = require("dotenv");
dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      // console.log(profile);
      User.findOne({googleID : profile.id}).then((currentUser)=>{
        if(currentUser) {
          console.log("old user");
        }
        else {
          console.log("new user");
          new User({
            username : profile.displayName,
            googleID : profile.id,
            profilePic: profile.photos[0].value,
          }).save();
        }
      });
      
      done(null, profile);
    }
  )
);


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
