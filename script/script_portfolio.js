document.addEventListener("DOMContentLoaded", function(){
    
    class Gallery {
        open() {
            this.parentElement.classList.remove('hidden');
            this.update();
        }
        update() {
            for (let i = 0; i < this.images.length; i++) {
                if (i == this.currentIndex) this.images[i].classList.remove('hidden');
                else this.images[i].classList.add('hidden');
            }
        }
        close() {
            this.parentElement.classList.add('hidden');
        }
        left() {
            if (this.currentIndex > 0) this.currentIndex--;
            this.update();
        }
        right() {
            if (this.currentIndex < this.images.length-1) this.currentIndex++;
            this.update();
        }
        constructor(openingElement, imagePaths) {
            this.currentIndex = 0;
            this.images = [];

            openingElement.addEventListener('click', () => this.open());

            this.parentElement = document.createElement('div');
            this.parentElement.className="galleryContainer";
            
            this.background = document.createElement('div');
            this.background.className = "galleryBackground";
            
            this.imageContainer = document.createElement('div');
            this.imageContainer.className="galleryImageContainer";
            
            this.buttonClose = document.createElement('div');
            this.buttonClose.className="galleryButtonClose galleryButton";
            
            this.buttonLeft = document.createElement('div');
            this.buttonLeft.className="galleryButtonLeft galleryButton";
            
            this.buttonRight = document.createElement('div');
            this.buttonRight.className="galleryButtonRight galleryButton";

            this.parentElement.appendChild(this.background);
            this.parentElement.appendChild(this.imageContainer);
            this.parentElement.appendChild(this.buttonClose);
            this.parentElement.appendChild(this.buttonLeft);
            this.parentElement.appendChild(this.buttonRight);

            for (let path of imagePaths) {
                let element = document.createElement('img');
                element.src = path;
                element.classList.add('hidden');
                this.imageContainer.appendChild(element);
                this.images.push(element);
            }

            this.buttonClose.addEventListener('click', () => this.close());
            this.buttonLeft.addEventListener('click', () => this.left());
            this.buttonRight.addEventListener('click', () => this.right());

            this.parentElement.classList.add('hidden');
            document.body.appendChild(this.parentElement);
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
