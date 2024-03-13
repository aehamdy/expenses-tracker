const body = document.querySelector("body");
const headerToggle = document.getElementById("theme-toggler");

headerToggle.addEventListener("click", () => {
    body.classList.toggle("app--isDark");
})