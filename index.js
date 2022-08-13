const userName = document.getElementById("name");
const password = document.getElementById("password");
const cPassword = document.getElementById("confirmPassword");
const error = document.getElementById("error");
const form = document.getElementById("form");
const submitBtn = document.getElementById("submit-button");



form.addEventListener("submit", (e) => {
    e.preventDefault()
});

submitBtn.addEventListener("click", () => {
    const errorMsg = "Incorrect Password";
    const user = userName.value;


    if(userName.value && (password.value !== cPassword.value)) {
        error.innerHTML = `<p style = "color: red">${errorMsg}</p>`;
    } else {
        form.innerHTML = `<h4>Welcome to our platform ${user}!</h4>`;
    }
}); 

