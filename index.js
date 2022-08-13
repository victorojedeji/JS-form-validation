const name = document.getElementById("name");
const password = document.getElementById("password");
const cPassword = document.getElementById("confirmPassword");
const error = document.getElementById("error");
const form = document.getElementById("form");
const submitBtn = document.getElementById("submit-button");



form.addEventListener("submit", (e) => {
    e.preventDefault()
})

submitBtn.addEventListener("click", () => {
    const errorMsg = "Incorrect Password";

    if(password.value !== cPassword.value) {
        error.innerHTML = `<p>${errorMsg}</p>`
    }
})

