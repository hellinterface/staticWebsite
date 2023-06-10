document.addEventListener("DOMContentLoaded", function(){
    
    // функции "открыть" и "закрыть" меню
    menuToggle.addEventListener('click', () => {
        document.body.classList.toggle('menuOpened');
        document.body.classList.remove('beforeInteraction');
    });

    function reveal() {
        var reveals = document.querySelectorAll(".reveal, .revealRight, .revealBottom");
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }

    window.addEventListener("scroll", () => reveal());
    reveal();
})
