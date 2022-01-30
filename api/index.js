const express = require("express");
const passport = require("passport");
const cors = require("cors");
const passportSetup = require("./passport");
const cookieSession = require("cookie-session");

const authRoute = require("./routes/auth");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(console.log("connected to mongoDB"))
.catch((err)=>console.log(err));

app.use(
    cookieSession({ name: "session", keys: ["xyz"], maxAge: 24 * 60 * 60 * 100 })
);
app.use(passport.initialize());
app.use(passport.session());  

app.use(
    cors({
      origin: "http://localhost:3000",
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
  );
  
  app.use("/auth", authRoute);

app.listen("4000", ()=>{ 
    console.log("backend is running");
})