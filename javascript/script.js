const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form_container"),
formCloseBtn = document.querySelector("#exit"),
SignupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelector(".eye");


formOpenBtn.addEventListener("click", () => home.classList.add("show"))
formCloseBtn.addEventListener("click", () => home.classList.remove("show"))

SignupBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    formContainer.classList.remove("active");
});