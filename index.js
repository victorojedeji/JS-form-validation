const form = document.getElementById("form");
const userName = document.getElementById("name");
const password = document.getElementById("password");
const cPassword = document.getElementById("confirmPassword");

const nameError = document.getElementById("error");
const passwordError = document.getElementById("password-error");
const cpasswordErr = document.getElementById("confirm-password-error");

const submitBtn = document.getElementById("submit-button");



form.addEventListener("submit", (e) => {
    e.preventDefault()
});

submitBtn.addEventListener("click", () => {

    if(userName.value && (password.value !== cPassword.value)) {

        passwordError.innerHTML = `<p style = "color: red">Passwords do not match.</p>`;

    } if(userName.value && (password.value == cPassword.value)) {

        form.innerHTML = `<h5>Welcome back ${userName.value}!</h5>`;

    }if (!userName.value && ((password.value == cPassword.value) || (password.value !== cPassword.value))){

        nameError.innerHTML = "Name is required";

    } if(password.value.length <= 6 ){

        passwordError.innerHTML = `<p>Password must be longer than six characters.</p>`

    } if((password.value && cPassword.value) && password.value.length > 10 ){

        passwordError.innerHTML = `<p>Password must not be longer than ten characters.</p>`

    } if( password.value.toLowerCase() === "password" ){

        passwordError.innerHTML = `<p>Password cannot be ${password.value}.</p>`
    } 
    
}); 