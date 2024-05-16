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
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false
}));
 
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));
 
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


const showPassword = document.querySelector("#show-password");
const passwordField = document.querySelector("#password");

showPassword.addEventListener("click", function(){
    this.classList.toggle("fa-eye");
    const type = passwordField.getAttribute("type") === "password" ?"text" : "password";

    passwordField.setAttribute("type",type);
})
 


document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault(); 

    app.post("/login", async function(req, res){
        try {
            // check if the user exists
            const user = await User.findOne({ username: req.body.email });
            console.log(req.body.email)
            if (user) {
              //check if password matches
              const result = req.body.password === user.password;
              if (result) {
                res.render("landingPage");
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
    swal("Wellcom Back!", "Enjoy your momment :333", "success");
    document.getElementById("form").submit(); // Manually submit the form
  
});
