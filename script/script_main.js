document.addEventListener("DOMContentLoaded", function(){
    // функции "открыть" и "закрыть" меню
    menuToggle.addEventListener('click', () => {
        document.body.classList.toggle('menuOpened');
    });

    var lastKnownScrollPosition = 0;
    
    const mainContent = document.querySelector('.content');


    // Категория "События" правая и левая кнопки ленты
    var i = 0;
    var Item2 = document.getElementsByClassName('item2');
    var sumLenta = Item2.length * 576;
    lenta2.currentElementIndex = 0;
    ring4.addEventListener('click', () => {
        if (lenta2.scrollWidth < lenta2.children[lenta2.currentElementIndex].offsetLeft + lenta2.offsetWidth) {
            return;
        }
        lenta2.currentElementIndex++;
        if (lenta2.currentElementIndex >= lenta2.children.length - 1) {
            lenta2.currentElementIndex = lenta2.children.length - 1;
            ring4.classList.add('disabledRing');
        }
        else {
            ring4.classList.remove('disabledRing');
            ring3.classList.remove('disabledRing');
        }
        console.log(lenta2.currentElementIndex);
        lenta2.scrollTo({left: lenta2.children[lenta2.currentElementIndex].offsetLeft, behavior: 'smooth'});
        if (lenta2.scrollWidth < lenta2.children[lenta2.currentElementIndex].offsetLeft + lenta2.offsetWidth) {
            ring4.classList.add('disabledRing');
        }
    });
    ring3.addEventListener('click', () => {
        lenta2.currentElementIndex--;
        if (lenta2.currentElementIndex <= 1) {
            ring3.classList.add('disabledRing');
        }
        else {
            ring3.classList.remove('disabledRing');
            ring4.classList.remove('disabledRing');
        }
        if (lenta2.currentElementIndex <= 0) {
            lenta2.currentElementIndex = 0;
        }
        console.log(lenta2.currentElementIndex);
        lenta2.scrollTo({left: lenta2.children[lenta2.currentElementIndex].offsetLeft, behavior: 'smooth'});
    });
})
