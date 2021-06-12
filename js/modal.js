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
