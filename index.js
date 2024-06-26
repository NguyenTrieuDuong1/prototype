console.log("Hello World!");

const express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose")
const User = require("./model/User");
let app = express();
 
mongoose.connect("mongodb+srv://trieuduong:mithapnang12@colonthree.4y5dmo3.mongodb.net/?retryWrites=true&w=majority&appName=colonthree");
 
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({
    secret: "real secret",
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 28 * 24 * 60 * 60 * 1000}
}));

app.use(passport.initialize());
app.use(passport.session({
    secret: "real secret",
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 28 * 24 * 60 * 60 * 1000}
}));
app.use(express.static(__dirname + '/public'));
 
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//=====================
// ROUTES
//=====================
 
// Showing home page
app.get("/", function (req, res) {
    res.render("landingPage", { username: req.user.username});
});
 
// Showing secret page
app.get("/secret", isLoggedIn, function (req, res) {
    res.render("secret");
});
 
// Showing register form
app.get("/register", function (req, res) {
    res.render("signUp")
});
 
// Handling user signup
app.post("/register", async (req, res) => {
  const user = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
  console.log("logged");
  res.redirect("/login");
});
 
//Showing login form
app.get("/login", function (req, res) {
    res.render("login");
});
 
//Handling user login
app.post("/login", async function(req, res){
  try {
      // check if the user exists
      const user = await User.findOne({ email: req.body.email });
      console.log(req.body.email)
      if (user) {
        //check if password matches
        const result = req.body.password === user.password;
        if (result) {
          res.redirect("/");
        } else {
          res.status(400).json({ error: "password doesn't match" });
        }
      } else {
        res.status(400).json({ error: "User doesn't exist" });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
});

 
//Handling user logout 
app.get("/logout", function (req, res) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
});
 
 
 
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/landingPage");
}
 
let port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server Has Started!");
});