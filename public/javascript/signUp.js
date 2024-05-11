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

// validation form sign up 
// document.getElementById('form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     document.getElementById('name-error').innerHTML = '';
//     var name = document.getElementById('name').value;

//     document.getElementById('email-error').innerHTML = '';
//     var email = document.getElementById('email').value;

//     document.getElementById('password-error').innerHTML = '';
//     var password = document.getElementById('password').value;

//     document.getElementById('confirm-password-error').innerHTML = '';
//     var confirmPassword = document.getElementById('confirm-password').value;

//     document.getElementById('checkbox-error').innerHTML = '';

//     let nameError = document.getElementById('name-error');

//     if(name === '') {

//         const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>'
//         nameError.innerHTML = iconErr+'Please enter your name';
        
//         return false;
//     }


//     let emailError = document.getElementById('email-error');
//     if(email === '') {
//         // alert('Please enter your email');
//         const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>'
//         emailError.innerHTML = iconErr+'Please enter your email';
//         return false;
//     }

//     var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     if(!emailRegex.test(email)) {
//         // alert('Please enter a valid email');
//         const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>'
//         emailError.innerHTML = iconErr+'Please enter a valid email';
//         return false;
//     }

//     let passwordError = document.getElementById('password-error');
//     if(password === '') {
//         // alert('Please enter your password');
//         const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>'
//         passwordError.innerHTML = iconErr+'Please enter your password';
//         return false;
//     }

//     var hasLowerCase = /[a-z]/.test(password);
//     var hasUpperCase = /[A-Z]/.test(password);
//     var hasNumber = /\d/.test(password);
//     var hasSpecialChar = /[@$!%*?&]/.test(password);
//     var hasMinLength = password.length >= 8;

//     if(!hasUpperCase) {
//         const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>'
//         passwordError.innerHTML = iconErr + 'Password must contain at least one uppercase letter';
//         return false;
//     }

//     if(!hasLowerCase) {
//         const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>'
//         passwordError.innerHTML = iconErr + 'Password must contain at least one lowercase letter';
//         return false;
//     }

//     if(!hasNumber) {
//         const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>'
//         passwordError.innerHTML = iconErr + 'Password must contain at least one number';
//         return false;
//     }

//     if(!hasSpecialChar) {
//         const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>'
//         passwordError.innerHTML = iconErr + 'Password must contain at least one special character';
//         return false;
//     }

//     if(!hasMinLength) {
//         const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>'
//         passwordError.innerHTML = iconErr + 'Password must be at least 8 characters long';
//         return false;
//     }

//     let confirmPasswordError = document.getElementById('confirm-password-error');
//     if(confirmPassword === '') {
//         // alert('Please confirm your password');
//         const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>'
//         confirmPasswordError.innerHTML = iconErr+'Please confirm your password';
//         return false;
//     }

//     if(password !== confirmPassword) {
//         // alert('Passwords do not match');
//         const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>'
//         confirmPasswordError.innerHTML = iconErr+'Passwords do not match';
//         return false;
//     }

//     let checkboxError = document.getElementById('checkbox-error');
//     if (!document.getElementById('checkbox').checked) {
//         const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>';
//         checkboxError.innerHTML = iconErr + 'Please check the checkbox';
//         return false;
//     }

//     // if (document.getElementById('captcha').value.length <= 0){
//     //     const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>';
//     //     captchaError.innerHTML = iconErr + 'Please check the captcha';
//     //     return false;
//     // }


//     // alert('Form is valid and ready to submit');
//     swal("Good job!", "You have successfully created an account!", "success");
//     return true;
// });

document
  .getElementById("submit")
  .addEventListener("click", function (event) {
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

    // Name validation
    if (name === "") {
      const iconErr =
        '<i class="fa-solid fa-circle-exclamation icon-error"></i>';
      document.getElementById("name-error").innerHTML =
        iconErr + "Please enter your name";
    }

    // Email validation
    if (email === "") {
      const iconErr =
        '<i class="fa-solid fa-circle-exclamation icon-error"></i>';
      document.getElementById("email-error").innerHTML =
        iconErr + "Please enter your email";
    } else {
      var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailRegex.test(email)) {
        const iconErr =
          '<i class="fa-solid fa-circle-exclamation icon-error"></i>';
        document.getElementById("email-error").innerHTML =
          iconErr + "Please enter a valid email";
      }
    }

    // Password validation
    if (password === "") {
      const iconErr =
        '<i class="fa-solid fa-circle-exclamation icon-error"></i>';
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
      }
    }

    // Confirm Password validation
    if (confirmPassword === "") {
      const iconErr =
        '<i class="fa-solid fa-circle-exclamation icon-error"></i>';
      document.getElementById("confirm-password-error").innerHTML =
        iconErr + "Please confirm your password";
    } else if (password !== confirmPassword) {
      const iconErr =
        '<i class="fa-solid fa-circle-exclamation icon-error"></i>';
      document.getElementById("confirm-password-error").innerHTML =
        iconErr + "Passwords do not match";
    }

    // Checkbox validation
    if (!document.getElementById("checkbox").checked) {
      const iconErr =
        '<i class="fa-solid fa-circle-exclamation icon-error"></i>';
      document.getElementById("checkbox-error").innerHTML =
        iconErr + "Please check the checkbox";
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
      document.getElementById("form").submit(); // Manually submit the form
    }
  });
