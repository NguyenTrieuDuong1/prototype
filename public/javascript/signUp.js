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


const showConfirmPassword = document.querySelector("#show-confirm-password");
const confirmPasswordField = document.querySelector("#confirm-password");

showConfirmPassword.addEventListener("click", function(){
    if(confirmPasswordField.getAttribute("type") === "password") {
        confirmPasswordField.setAttribute("type", "text");
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
    } else {
        confirmPasswordField.setAttribute("type", "password");
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
    }
});

document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Clear previous error messages
  document.getElementById("name-error").innerHTML = "";
  document.getElementById("email-error").innerHTML = "";
  document.getElementById("password-error").innerHTML = "";
  document.getElementById("confirm-password-error").innerHTML = "";
  document.getElementById("checkbox-error").innerHTML = "";
  document.getElementById("captcha-error").innerHTML = "";

  // Get form field values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  // Set border color to red for all input fields
  document.getElementById("name").style.borderColor = "red";
  document.getElementById("email").style.borderColor = "red";
  document.getElementById("password").style.borderColor = "red";
  document.getElementById("confirm-password").style.borderColor = "red";
  document.getElementById("checkbox").style.borderColor = "red";

  // Name validation
  if (name === "") {
    const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>';
    document.getElementById("name-error").innerHTML =
      iconErr + "Please enter your name";
  } else {
    document.getElementById("name").style.borderColor = "green"; // Set border color to green
  }

  // Email validation
  if (email === "") {
    const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>';
    document.getElementById("email-error").innerHTML =
      iconErr + "Please enter your email";
  } else {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      const iconErr =
        '<i class="fa-solid fa-circle-exclamation icon-error"></i>';
      document.getElementById("email-error").innerHTML =
        iconErr + "Please enter a valid email";
    } else {
      document.getElementById("email").style.borderColor = "green"; // Set border color to green
    }
  }

  // Password validation
  if (password === "") {
    const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>';
    document.getElementById("password-error").innerHTML =
      iconErr + "Please enter your password";
  } else {
    var passwordError = document.getElementById("password-error");
    var hasLowerCase = /[a-z]/.test(password);
    var hasUpperCase = /[A-Z]/.test(password);
    var hasNumber = /\d/.test(password);
    var hasSpecialChar = /[@$!%*?&]/.test(password);
    var hasMinLength = password.length >= 8;
    if (
      !hasUpperCase ||
      !hasLowerCase ||
      !hasNumber ||
      !hasSpecialChar ||
      !hasMinLength
    ) {
      const iconErr =
        '<i class="fa-solid fa-circle-exclamation icon-error"></i>';
      passwordError.innerHTML = iconErr + "Password must contain: <br>";
      if (!hasUpperCase) {
        passwordError.innerHTML += "At least one uppercase letter <br>";
      }
      if (!hasLowerCase) {
        passwordError.innerHTML += "At least one lowercase letter <br>";
      }
      if (!hasNumber) {
        passwordError.innerHTML += "At least one number <br>";
      }
      if (!hasSpecialChar) {
        passwordError.innerHTML += "At least one special character <br>";
      }
      if (!hasMinLength) {
        passwordError.innerHTML += "At least 8 characters long <br>";
      }
    } else {
      document.getElementById("password").style.borderColor = "green"; // Set border color to green
    }
  }

  // Confirm Password validation
  if (confirmPassword === "") {
    const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>';
    document.getElementById("confirm-password-error").innerHTML =
      iconErr + "Please confirm your password";
  } else if (password !== confirmPassword) {
    const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>';
    document.getElementById("confirm-password-error").innerHTML =
      iconErr + "Passwords do not match";
  } else {
    document.getElementById("confirm-password").style.borderColor = "green"; // Set border color to green
  }

  // Checkbox validation
  if (!document.getElementById("checkbox").checked) {
    const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>';
    document.getElementById("checkbox-error").innerHTML =
      iconErr + "Please check the checkbox";
  } else {
    document.getElementById("checkbox").style.borderColor;
  }

  // captcha validation
      var response = grecaptcha.getResponse();
      if (response.length === 0) {
        const iconErr =
          '<i class="fa-solid fa-circle-exclamation icon-error"></i>';
        document.getElementById("captcha-error").innerHTML =
          iconErr + "Please complete the reCAPTCHA.";
        return false;
      }

      // If all fields are valid, submit the form
      if (
        name &&
        email &&
        password &&
        confirmPassword &&
        document.getElementById("checkbox").checked
      ) {
        swal("Good job!", "You have successfully created an account!", "success");
        app.post("/register", async (req, res) => {
          const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
          });
          console.log("logged")
          res.render("landingPage");
        });
        document.getElementById("form").submit(); // Manually submit the form

      }
});
