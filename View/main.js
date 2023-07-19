const menuEmail = document.querySelector('.navbar-email');
const subDesktopMenu = document.querySelector('.sub-desktop-menu');

const hamMenu = document.querySelector('.menu');
const subMenuMobile = document.querySelector('.mobile-menu');

const detailProducts = document.querySelector('.product-detail');
const shopingCarIcon = document.querySelector('.navbar-shopping-cart');

const CardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleSubDesktopMenu);

function toggleSubDesktopMenu() {
    subDesktopMenu.classList.toggle('inactive');
    detailProducts.classList.add('inactive');

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

const productsList = []
productsList.push({
    name: 'bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productsList.push({
    name: 'table',
    price: 12210,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productsList.push({
    name: 'TV',
    price: 320,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productsList.push({
    name: 'keyboard',
    price: 1203,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productsList.push({
    name: 'PC',
    price: 34120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

for (product of productsList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const imgCard = document.createElement('img');
    imgCard.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    const InfoSubDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    InfoSubDiv.append(productPrice, productName)

    const productFigure = document.createElement('figure');
    const imgIcon = document.createElement('img');
    imgIcon.setAttribute('src', "./icons/bt_add_to_cart.svg");

    productFigure.appendChild(imgIcon);

    productInfo.append(InfoSubDiv, productFigure)
    productCard.append(imgCard, productInfo)
    
    CardsContainer.appendChild(productCard)
}