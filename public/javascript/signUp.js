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
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('name-error').innerHTML = '';
    var name = document.getElementById('name').value;

    document.getElementById('email-error').innerHTML = '';
    var email = document.getElementById('email').value;

    document.getElementById('password-error').innerHTML = '';
    var password = document.getElementById('password').value;

    document.getElementById('confirm-password-error').innerHTML = '';
    var confirmPassword = document.getElementById('confirm-password').value;

    document.getElementById('checkbox-error').innerHTML = '';
    // document.getElementById('captcha-error').innerHTML = '';

    let nameError = document.getElementById('name-error');

    if(name === '') {

        const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>'
        nameError.innerHTML = iconErr+'Please enter your name';
        
        return false;
    }


    let emailError = document.getElementById('email-error');
    if(email === '') {
        // alert('Please enter your email');
        const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>'
        emailError.innerHTML = iconErr+'Please enter your email';
        return false;
    }

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!emailRegex.test(email)) {
        // alert('Please enter a valid email');
        const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>'
        emailError.innerHTML = iconErr+'Please enter a valid email';
        return false;
    }

    let passwordError = document.getElementById('password-error');
    if(password === '') {
        // alert('Please enter your password');
        const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>'
        passwordError.innerHTML = iconErr+'Please enter your password';
        return false;
    }

    var hasLowerCase = /[a-z]/.test(password);
    var hasUpperCase = /[A-Z]/.test(password);
    var hasNumber = /\d/.test(password);
    var hasSpecialChar = /[@$!%*?&]/.test(password);
    var hasMinLength = password.length >= 8;

    if(!hasUpperCase) {
        const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>'
        passwordError.innerHTML = iconErr + 'Password must contain at least one uppercase letter';
        return false;
    }

    if(!hasLowerCase) {
        const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>'
        passwordError.innerHTML = iconErr + 'Password must contain at least one lowercase letter';
        return false;
    }

    if(!hasNumber) {
        const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>'
        passwordError.innerHTML = iconErr + 'Password must contain at least one number';
        return false;
    }

    if(!hasSpecialChar) {
        const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>'
        passwordError.innerHTML = iconErr + 'Password must contain at least one special character';
        return false;
    }

    if(!hasMinLength) {
        const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>'
        passwordError.innerHTML = iconErr + 'Password must be at least 8 characters long';
        return false;
    }

    let confirmPasswordError = document.getElementById('confirm-password-error');
    if(confirmPassword === '') {
        // alert('Please confirm your password');
        const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>'
        confirmPasswordError.innerHTML = iconErr+'Please confirm your password';
        return false;
    }

    if(password !== confirmPassword) {
        // alert('Passwords do not match');
        const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>'
        confirmPasswordError.innerHTML = iconErr+'Passwords do not match';
        return false;
    }

    let checkboxError = document.getElementById('checkbox-error');
    if (!document.getElementById('checkbox').checked) {
        const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>';
        checkboxError.innerHTML = iconErr + 'Please check the checkbox';
        return false;
    }

    // if (document.getElementById('captcha').value.length <= 0){
    //     const iconErr = '<i class="fa-solid fa-circle-exclamation icon-error"></i>';
    //     captchaError.innerHTML = iconErr + 'Please check the captcha';
    //     return false;
    // }


    // alert('Form is valid and ready to submit');
    swal("Good job!", "You have successfully created an account!", "success");
    return true;
});


