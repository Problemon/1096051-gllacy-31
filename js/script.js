let buttonOpen = document.querySelector('.info__btn'); // Кнопка "обратная связь" которая открывает иодальное окно.
let modal = document.querySelector('.modal-fade'); // Оверлэй модального окна, вместе с модальным окном.
let buttonClose = document.querySelector('.modal__btn-close'); // Кнопка закрытия модального окна.

buttonOpen.onclick = function () {
    modal.style.display = "block";
    modal.onclick = function () {
        modal.style.display = "none";
    }
};

buttonClose.onclick = function () {
    modal.style.display = "none";
};
