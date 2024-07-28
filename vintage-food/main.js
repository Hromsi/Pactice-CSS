
// Navbar script
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".navigation_list");
const navLink = document.querySelectorAll(".navigation_title_main");

burger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    burger.classList.remove("active");
    navMenu.classList.remove("active");
}