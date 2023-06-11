const menuEmail = document.querySelector('.navbar-email');
const subDesktopMenu = document.querySelector('.sub-desktop-menu');

const hamMenu = document.querySelector('.menu');
const subMenuMobile = document.querySelector('.mobile-menu');

const detailProducts = document.querySelector('.product-detail');
const shopingCarIcon = document.querySelector('.navbar-shopping-cart');

menuEmail.addEventListener('click', toggleSubDesktopMenu);

function toggleSubDesktopMenu() {
    subDesktopMenu.classList.toggle('inactive');
}

hamMenu.addEventListener('click', toggleSubMobileMenu);

function toggleSubMobileMenu(){
    detailProducts.classList.add('inactive');
    subMenuMobile.classList.toggle('inactive');
}

shopingCarIcon.addEventListener('click', toggleDetailProduct);

function toggleDetailProduct(){
    subMenuMobile.classList.add('inactive');
    detailProducts.classList.toggle('inactive');
}