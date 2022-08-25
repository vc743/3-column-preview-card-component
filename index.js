let body = document.body;
let boxes = document.querySelectorAll(".grid-container .box");
let toggleBtn = document.getElementById("toggle-btn");
let cardBtn = document.querySelectorAll("a");

toggleBtn.addEventListener("click", function(){
    this.classList.toggle("bi-moon-fill");
    this.classList.toggle("icon-darkmode");

    body.classList.toggle("dark-mode");

    boxes.forEach(element => {
        element.classList.toggle("card-dark-mode");
    });

    cardBtn.forEach(element => {
        element.classList.toggle("btn-dark-mode");
    })
})