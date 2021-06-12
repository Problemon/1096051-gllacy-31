// Реализация слайдера.
let mainPage = document.querySelector(".main-page"); // Элемент в котором указан фон всей страницы и мороженка.
let icecreamsTitles = document.querySelectorAll(".carousel__item"); // Названия мороженных в слайде.
let dots = document.querySelectorAll(".carousel__dot-btn"); // Точки слайдера.
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

            mainPage.classList.remove(mainPage.classList[1]); // Удаление класса с прошлым слайдом.
            mainPage.classList.add("main-page--" + (id + 1)); // Добавление класса с новым слайдом.
        };
    }
});
