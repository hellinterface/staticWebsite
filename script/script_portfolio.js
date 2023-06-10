document.addEventListener("DOMContentLoaded", function(){
    
    class Gallery {
        open() { // открыть галерею
            this.parentElement.classList.remove('hidden');
            this.update();
        }
        update() { // обновить текущее изображение в галерее
            for (let i = 0; i < this.images.length; i++) {
                if (i == this.currentIndex) this.images[i].classList.remove('hidden');
                else this.images[i].classList.add('hidden');
            }
        }
        close() { // закрыть галерею
            this.parentElement.classList.add('hidden');
            this.currentIndex = 0;
        }
        left() { // предыдущее изображение
            if (this.currentIndex > 0) this.currentIndex--;
            this.update();
        }
        right() { // следующее изображение
            if (this.currentIndex < this.images.length-1) this.currentIndex++;
            this.update();
        }
        constructor(openingElement, imagePaths) {
            this.currentIndex = 0; // индекс текущего изображения
            this.images = []; // массив с элементами img

            openingElement.addEventListener('click', () => this.open()); // открыть при нажатии на открывающий элемент

            this.parentElement = document.createElement('div'); // контейнер
            this.parentElement.className="galleryContainer";
            
            this.background = document.createElement('div'); // затемнение фона
            this.background.className = "galleryBackground";
            
            this.imageContainer = document.createElement('div'); // контейнер изображения
            this.imageContainer.className="galleryImageContainer";
            
            this.buttonClose = document.createElement('div'); // кнопка закрыть
            this.buttonClose.className="galleryButtonClose galleryButton";
            
            this.buttonLeft = document.createElement('div'); // кнопка влево
            this.buttonLeft.className="galleryButtonLeft galleryButton";
            
            this.buttonRight = document.createElement('div'); // кнопка вправо
            this.buttonRight.className="galleryButtonRight galleryButton";

            // добавить всё в контейнер
            this.parentElement.appendChild(this.background);
            this.parentElement.appendChild(this.imageContainer);
            this.parentElement.appendChild(this.buttonClose);
            this.parentElement.appendChild(this.buttonLeft);
            this.parentElement.appendChild(this.buttonRight);

            for (let path of imagePaths) {
                let element = document.createElement('img'); // создать элемент img
                element.src = path;
                element.classList.add('hidden'); // скрыть его
                this.imageContainer.appendChild(element); // добавить в контейнер изображений
                this.images.push(element);
            }

            // события кнопок
            this.buttonClose.addEventListener('click', () => this.close());
            this.buttonLeft.addEventListener('click', () => this.left());
            this.buttonRight.addEventListener('click', () => this.right());

            this.parentElement.classList.add('hidden'); // скрыть весь контейнер
            document.body.appendChild(this.parentElement); // добавить его на страницу
        }
    }

    var gallery1 = new Gallery(document.getElementById('gallery1'), [
        "images/portfolio/set1_main.png",
        "images/portfolio/set1_1.jpg",
        "images/portfolio/set1_2.jpg",
        "images/portfolio/set1_3.jpg",
        "images/portfolio/set1_4.jpg",
    ]);
    var gallery2 = new Gallery(document.getElementById('gallery2'), [
        "images/portfolio/set1_main.png",
        "images/portfolio/set1_1.jpg",
        "images/portfolio/set1_2.jpg",
        "images/portfolio/set1_3.jpg",
        "images/portfolio/set1_4.jpg",
    ]);
})
