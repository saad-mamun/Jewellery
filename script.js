const toggleBtn = document.querySelector(".toggle-btn");
const dropdown = document.querySelector(".dropdown-menu");

if (toggleBtn && dropdown) {
    toggleBtn.addEventListener("click", function () {
        const isOpen = dropdown.classList.toggle("hidden");
        toggleBtn.setAttribute("aria-expanded", !isOpen);
    });
}
