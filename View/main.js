const menuEmail = document.querySelector('.navbar-email');
const subDesktopMenu = document.querySelector('.sub-desktop-menu');

menuEmail.addEventListener('click', toggleSubDesktopMenu);

function toggleSubDesktopMenu() {
    subDesktopMenu.classList.toggle('inactive');
}