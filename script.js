let menuIcons = document.querySelectorAll(".menu-icon");
let navbar = document.querySelector(".navbar");

menuIcons.onclick = () => {
    menuIcons.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}