const body = document.querySelector('.body');
const overlay = document.querySelector('.overlay');
const burgerMenu = document.querySelector('.scoreboard__burger');
const menuNav = document.querySelector('.scoreboard__nav');
const navItem = document.querySelectorAll('.scoreboard__item');

function toggleClasses() {
    burgerMenu.classList.toggle('active');
    menuNav.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('active');
}

burgerMenu.addEventListener('click', toggleClasses);
overlay.addEventListener('click', toggleClasses);