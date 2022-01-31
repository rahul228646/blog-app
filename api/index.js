const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const passportSetup = require("./passport");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");

app.use(express.json());

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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/posts", postRoute);  
app.use("/api/categories", categoryRoute);  
app.use("/auth", authRoute);

app.listen("4000", ()=>{ 
    console.log("backend is running");
})