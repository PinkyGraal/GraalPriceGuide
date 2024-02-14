const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.selected');

select.addEventListener('click', () => {
  select.classList.toggle('select-clicked');
  caret.classList.toggle('caret-rotate');
  menu.classList.toggle('menu-open');
  });

options.forEach(option => {
  option.addEventListener('click', () => {
  selected.innerText = option.innerText;
  select.classList.remove('select-clicked');
  caret.classList.remove('caret-rotate');
  menu.classList.remove('menu-open');
  options.forEach(option => {
  option.classList.remove('active');
});

  option.classList.add('active');

  filterByPrice();
    });
  });
});

const searchInput = document.getElementById('search');
searchInput.addEventListener('keyup', searchImages);


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navLink.classList.toggle("active");
}

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navLink.classList.remove("active");
}