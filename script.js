const menu = document.querySelector("#menu-icon");
const nav = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}