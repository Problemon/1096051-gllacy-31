// Реализация слайдера.
let mainPage = document.querySelector(".main-page--background"); // Элемент в котором указан фон всей страницы и мороженка.
let icecreamsTitles = document.querySelectorAll(".carousel__item"); // Названия мороженных в слайде.
let dots = document.querySelectorAll(".carousel__dot-btn"); // Точки слайдера.
let background = [
    "url(../img/decorations/icecreams__brulee-raspberries.png) 49.7% 83px no-repeat, radial-gradient(circle closest-side at 50% 358px, hsl(147, 51%, 90%), hsl(146, 11%, 57%) 150%)",
    "url(../img/decorations/icecreams_chocolate-lemon.png) 49.7% 83px no-repeat, radial-gradient(circle closest-side at 50% 358px, hsl(211, 40%, 90%), hsl(213, 14%, 59%) 150%)",
    "url(../img/decorations/icecreams_fondant-strawberry.png) 49.7% 83px no-repeat, radial-gradient(circle  closest-side at 50% 358px, hsl(17, 40%, 90%), hsl(17, 11%, 57%) 150%)"
]
let dotClassActive = "carousel__dot-btn--active";
let icecreamsTitleClassActive = "carousel__item--active"

dots.forEach( function(element, id) {
    element.onclick = function () {
        // Проверяем, активна ли нажатая точки или нет.
        if(!element.classList.contains(dotClassActive)) { 
            // Функция удаления активного элемента (слайда) и добавление на нажатый элемент.
            function active (classActive, array) {
                let item = document.querySelector("."+classActive)
                item.classList.remove(classActive);
                array[id].classList.add(classActive)
            };

            active(dotClassActive, dots);// Изменение активного класса у точке слайдера.
            active(icecreamsTitleClassActive, icecreamsTitles);// Изменение активного класса у названия мороженки.

            mainPage.style.background = background[id];// Меняем фон и картинку мороженки.
        };
    }
});






// Реализация модального окна.
let buttonOpen = document.querySelector('.info__btn'); // Кнопка "обратная связь" которая открывает иодальное окно.
let modal = document.querySelector('.modal') // Модальное окно.
let modalFade = document.querySelector('.modal-fade'); // Оверлэй модального окна.
let buttonClose = document.querySelector('.modal__btn-close'); // Кнопка закрытия модального окна.

buttonOpen.onclick = function () {
    modalFade.style.display = "block";
    modal.style.display = "block";
};

modalFade.onclick = function () {
    modalFade.style.display = "none";
    modal.style.display =  "none";
};

buttonClose.onclick = function () {
    modalFade.style.display = "none";
    modal.style.display = "none";
};
