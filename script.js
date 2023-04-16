const openMenu = document.querySelector(".hamburguer");
const closeMenu = document.querySelector(".img-close");

const menu = document.querySelector(".menu-mobile");

openMenu.addEventListener("click", openMenuFunction);
closeMenu.addEventListener("click", closeMenuFunction);

let menuOpen = false;

function openMenuFunction() {
    menu.classList.add("enable");
    document.body.style.overflow = "hidden";
    menuOpen = true;
}

function closeMenuFunction() {
    menu.classList.remove("enable");
    document.body.style.overflow = "auto";
    menuOpen = false;
}
