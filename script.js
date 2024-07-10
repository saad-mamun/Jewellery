const toggleBtn = document.querySelector(".toggle-btn");
const dropdown = document.querySelector(".dropdown-menu");
toggleBtn.addEventListener("click", function () {
    dropdown.classList.toggle('top-16')
})