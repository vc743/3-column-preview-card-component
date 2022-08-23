let body = document.body;
let boxes = document.querySelectorAll(".grid-container .box");
let toggleBtn = document.querySelector(".toggle-btn");
let cardBtn = document.querySelectorAll("a");
let icon = document.querySelector(".toggle-btn .fa");

console.log(icon);

toggleBtn.addEventListener("click", () => {
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");

    body.classList.toggle("dark-mode");

    boxes.forEach(element => {
        element.classList.toggle("card-dark-mode");
    });

    cardBtn.forEach(element => {
        element.classList.toggle("btn-dark-mode");
    })
})