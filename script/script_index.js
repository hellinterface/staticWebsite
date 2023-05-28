document.addEventListener("DOMContentLoaded", function(){

    var lastKnownScrollPosition = 0;

    window.addEventListener('scroll', (event) => {
        if (mainContent.scrollY >= window.visualViewport.height) {
            setTimeout(() => {
                document.body.classList.add('pastTitleScreen');
            }, 200);
        }
        else {
            document.body.classList.remove('pastTitleScreen');
        }
        lastKnownScrollPosition = window.scrollY;
        console.log(mainContent.scrollY, window.visualViewport.height);
    });
    

});