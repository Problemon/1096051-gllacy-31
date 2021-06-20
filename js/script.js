function hoverUp (elementsHover, item, hoverClass) {
    elementsHover.forEach( function(element) {
        element.addEventListener("mouseover", function () {
            item.classList.add(hoverClass);
        });
        element.addEventListener("mouseout", function () {
            item.classList.remove(hoverClass);
        });
    });
};

function checkFocus (elementsFocus, item, focusClass) {
    // elementsFocus - СПИСОК элементов/элемента на которых добавиться событие.
    // item - Элемент которому добовляется/удаляется класс при фокусе/расфокусе на элемент из elementsFocus.
    // focusClass - класс который добавиться/удалиться на item при фокусе/расфокусе на элемент из elementsFocus.
    elementsFocus.forEach( function(element) {
        element.addEventListener("focus", function () {
            item.classList.add(focusClass);
        });
        element.addEventListener("blur", function () {
            item.classList.remove(focusClass);
        });
    });
};


let subMenu = document.querySelector (".menu__sub-menu"); // Подменю котолога.
let subMenuItems = document.querySelectorAll(".menu__sub-menu-item-link"); // Элементы подменю котолога.
checkFocus(subMenuItems, subMenu, "menu__sub-menu--focus");


let headerSearch = document.querySelector(".header__element-field-search"); // Поле для поиска.
let headerSearchItems = document.querySelectorAll(".header__element-search-focused"); // Поле поиска
checkFocus(headerSearchItems, headerSearch, "header__element-field-search--focus");


let headerLogin = document.querySelector(".header__element-field-login"); // Блок для входа в аккаунт.
let headerLoginItems = document.querySelectorAll(".header__element-login-focused"); // Все ссылки, инпуты и кнопки.
checkFocus(headerLoginItems, headerLogin, "header__element-field-login--focus");


let headerBasket = document.querySelector(".header__element-field-basket"); // корзина с товарами.
let headerBasketItems = document.querySelectorAll(".header__element-field-basket-focused"); // Кнопка оформления заказа.
checkFocus(headerBasketItems, headerBasket, "header__element-field-basket--focus");


let products = document.querySelectorAll(".product"); // Все товары.
products.forEach( function(item) {
    let productCurtain = item.querySelectorAll(".product__curtain");
    let productButton = item.querySelectorAll(".btn"); // Кнопка внутри блока товара "Быстрый просмотр".
    checkFocus(productButton, item, "product--focus");
    hoverUp(productCurtain, item , "product--focus");
});
