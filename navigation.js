const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);


function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    // Loop through each navLink and toggle the class
    navLink.forEach(link => link.classList.toggle("active"));
}

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    // Loop through each navLink and remove the class
    navLink.forEach(link => link.classList.remove("active"));
}