// Реализация модального окна.
let buttonOpen = document.querySelector('.info__btn'); // Кнопка "обратная связь" которая открывает иодальное окно.
let modal = document.querySelector('.modal') // Модальное окно.
let modalFade = document.querySelector('.modal-fade'); // Оверлэй модального окна.
let buttonClose = modal.querySelector('.modal__btn-close'); // Кнопка закрытия модального окна.
let modalInputs = modal.querySelectorAll(".modal__input");
let modalBtn = modal.querySelector(".modal__btn");


function animate({duration, draw, timing}) {
    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      let progress = timing(timeFraction)
  
      draw(progress);
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  }

function modalShow (value) {
    animate({
        duration: 300,
        timing: function(timeFraction) {
            return timeFraction;
        },
        draw: function(progress) {
            if (value) {
                modalFade.style.display = "block";
                modal.style.display = "block";
                modalFade.style.opacity = progress.toFixed(3);
                modal.style.opacity = progress.toFixed(3);
            } else {
                modalFade.style.opacity = 1 - progress.toFixed(3);
                modal.style.opacity = 1 - progress.toFixed(3);
                setTimeout(function () {
                    modalFade.style.display = "none";
                    modal.style.display = "none";
                }, 300)
            };
        }
    });
};

buttonOpen.onclick = function (evt) {
    modalShow(true);
    evt.preventDefault();
};

modalFade.onclick = function () {
    modalShow(false);
};

buttonClose.onclick = function () {
    modalShow(false);
};

modalBtn.addEventListener("click", function (event) {
    let i = 1;
    let error = false;
    
    modalInputs.forEach( function (elem) {
        if (!elem.validity.valid && !error) {
            animate({
                duration: 400,
                timing: function(timeFraction) {
                    return timeFraction;
                },
                draw: function(progress) {
                    modal.style.transform = "translateX(" + (progress.toFixed(2)*3 - 3)*i + "px)";
                    i = i * -1;
                }
            });
            error = true;
            
        };
    });
    
});

