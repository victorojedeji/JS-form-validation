const formWrapper = document.querySelector(".form-wrapper");
const userName = document.getElementById("name");
const password = document.getElementById("password");
const cPassword = document.getElementById("confirmPassword");

const nameError = document.getElementById("error");
const passwordError = document.getElementById("password-error");

const submitBtn = document.getElementById("submit-button");



form.addEventListener("submit", (e) => {
    e.preventDefault()
});

submitBtn.addEventListener("click", () => {

    // if(userName.value && (password.value !== cPassword.value)) {

    //     passwordError.innerHTML = `<p style = "color: red">Passwords do not match.</p>`;

    // } 
    
    if (!userName.value && (!password.value || password.value)){

        nameError.innerHTML = "NOTE: Name is required";

    } if((password.value.length >= 0) && (password.value.length <= 6) ){

       return passwordError.innerHTML = `<p class="password-error-msg">Password must be longer than six characters.</p>`

    } if((password.value || userName.value)  && password.value.length > 10 ){

        return passwordError.innerHTML = `<p class="password-error-msg">Password must not be longer than ten characters.</p>`

    }
    if(userName.value && password.value ) {

        formWrapper.innerHTML = `<h5 class="announcement">Login Successful!</h5>`;

    } 
    
}); 