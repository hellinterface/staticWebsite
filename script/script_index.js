document.addEventListener("DOMContentLoaded", function(){

    window.addEventListener('scroll', (event) => {
        if (window.scrollY >= window.visualViewport.height) {
            setTimeout(() => {
                document.body.classList.add('pastTitleScreen');
            }, 200);
        }
        else {
            document.body.classList.remove('pastTitleScreen');
        }
    });
    
    // Категория "События" правая и левая кнопки ленты
    lenta2.currentElementIndex = 0;

    ringLeft.classList.add('disabledRing');

    ringRight.addEventListener('click', () => {
        if (lenta2.scrollWidth < lenta2.children[lenta2.currentElementIndex].offsetLeft + lenta2.offsetWidth) {
            return;
        }
        lenta2.currentElementIndex++;
        if (lenta2.currentElementIndex >= lenta2.children.length - 1) {
            lenta2.currentElementIndex = lenta2.children.length - 1;
            ringRight.classList.add('disabledRing');
        }
        else {
            ringRight.classList.remove('disabledRing');
            ringLeft.classList.remove('disabledRing');
        }
        console.log(lenta2.currentElementIndex);
        lenta2.scrollTo({left: lenta2.children[lenta2.currentElementIndex].offsetLeft, behavior: 'smooth'});
        if (lenta2.scrollWidth < lenta2.children[lenta2.currentElementIndex].offsetLeft + lenta2.offsetWidth) {
            ringRight.classList.add('disabledRing');
        }
    });
    ringLeft.addEventListener('click', () => {
        lenta2.currentElementIndex--;
        if (lenta2.currentElementIndex <= 0) {
            ringLeft.classList.add('disabledRing');
        }
        else {
            ringLeft.classList.remove('disabledRing');
            ringRight.classList.remove('disabledRing');
        }
        if (lenta2.currentElementIndex <= 0) {
            lenta2.currentElementIndex = 0;
        }
        console.log(lenta2.currentElementIndex);
        lenta2.scrollTo({left: lenta2.children[lenta2.currentElementIndex].offsetLeft, behavior: 'smooth'});
    });

});