document.addEventListener("DOMContentLoaded", function(){
    // функции "открыть" и "закрыть" меню
    menuToggle.addEventListener('click', () => {
        document.body.classList.toggle('menuOpened');
    });

    var lastKnownScrollPosition = 0;
    
    const mainContent = document.querySelector('.content');

    point1.onmouseover = function(){
        point1.style.color = "#B89535";
        Img1.style.opacity = 1;
    }
    point2.onmouseover = function(){
        point2.style.color = "#B89535";
        Img2.style.opacity = 1;
    }
    point3.onmouseover = function(){
        point3.style.color = "#B89535";
        Img3.style.opacity = 1;
    }
    point4.onmouseover = function(){
        point4.style.color = "#B89535";
        Img4.style.opacity = 1;
    }

    point1.onmouseout = function(){
        point1.style.color = "#FFFFFF";
        Img1.style.opacity = 0;
    }
    point2.onmouseout = function(){
        point2.style.color = "#FFFFFF";
        Img2.style.opacity = 0;
    }
    point3.onmouseout = function(){
        point3.style.color = "#FFFFFF";
        Img3.style.opacity = 0;
    }
    point4.onmouseout = function(){
        point4.style.color = "#FFFFFF";
        Img4.style.opacity = 0;
    }

    // Категория "Награды" правая и левая кнопки ленты
    var i = 0;
    var Item = document.getElementsByClassName('item');
    var sumLenta = Item.length * 282;
    document.getElementById('ring2').onclick = function(){
        
        if(-1210 < i < 166){
            if(i-920 > -1210){
                i = i - 920;
                lenta.style.marginLeft = i + 'px';
                ring2.style.background = 'transparent';
                ring.style.background = 'transparent';
                shadow1.style.zIndex = 1;
                shadow2.style.zIndex = -1;
            }
            else{
                lenta.style.marginLeft = -1210 + 'px';
                ring2.style.background = '#C4C4C4';
                ring.style.background = 'transparent';
                shadow1.style.zIndex = 1;
                shadow2.style.zIndex = 1;
            }
        }
    }
    var Item = document.getElementsByClassName('item');
    var sumLenta = Item.length * 282;
    document.getElementById('ring').onclick = function(){
        if(-1210 < i < 166){
            if(i+920 < 166){
                i = i + 920;
                lenta.style.marginLeft = i + 'px';
                ring2.style.background = 'transparent';
                ring.style.background = 'transparent';
                shadow1.style.zIndex = 1;
                shadow2.style.zIndex = -1;
            }
            else{
                lenta.style.marginLeft = 166 + 'px';
                ring2.style.background = 'transparent';
                ring.style.background = '#C4C4C4';
                shadow1.style.zIndex = -1;
                shadow2.style.zIndex = -1;
            }
        }
    }

    // Категория "События" правая и левая кнопки ленты
    var i = 0;
    var Item2 = document.getElementsByClassName('item2');
    var sumLenta = Item2.length * 576;
    document.getElementById('ring4').onclick = function(){
        if(-1496 < i < 166){
            if(i-800 > -1496){
                i = i - 800;
                lenta2.style.marginLeft = i + 'px';
                ring4.style.background = 'transparent';
                ring3.style.background = 'transparent';
                shadow3.style.zIndex = 1;
                shadow4.style.zIndex = -1;
            }
            else{
                lenta2.style.marginLeft = -1496 + 'px';
                ring4.style.background = '#C4C4C4';
                ring3.style.background = 'transparent';
                shadow3.style.zIndex = 1;
                shadow4.style.zIndex = 1;
            }
        }
    }
    var Item2 = document.getElementsByClassName('item2');
    var sumLenta = Item2.length * 576;
    document.getElementById('ring3').onclick = function(){
        if(-1496 < i < 166){
            if(i+800 < 166){
                i = i + 800;
                lenta2.style.marginLeft = i + 'px';
                ring4.style.background = 'transparent';
                ring3.style.background = 'transparent';
                shadow3.style.zIndex = 1;
                shadow4.style.zIndex = -1;
            }
            else{
                lenta2.style.marginLeft = 166 + 'px';
                ring4.style.background = 'transparent';
                ring3.style.background = '#C4C4C4';
                shadow3.style.zIndex = -1;
                shadow4.style.zIndex = -1;
            }
        }
    }

})
