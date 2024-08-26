//換圖

var slideIndex = 1;
var slideInterval = 3000; // 自動輪播間隔（以毫秒為單位）

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    slideIndex++; // 自動增加輪播索引
}

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

window.onload = function () {
    showSlides(); // 一點進系統就輪播
    setInterval(showSlides, slideInterval); // 每隔指定的時間間隔自動調動 showSlides 函數
};


//換頁
function showPage(pageNumber) {
    var pages = document.querySelectorAll('.page');
    for (var i = 0; i < pages.length; i++) {
        if (pages[i].classList.contains('index') && pageNumber === 1) {
            pages[i].style.display = 'block';
        } 
        else if (pages[i].classList.contains('Introduction') && pageNumber === 2) {
            pages[i].style.display = 'block';
        } 
        else if (pages[i].classList.contains('Advisor') && pageNumber === 3) {
            pages[i].style.display = 'block';
        }
        else if (pages[i].classList.contains('Member') && pageNumber === 4) {
            pages[i].style.display = 'block';
        }
        else if (pages[i].classList.contains('Publications') && pageNumber === 5) {
            pages[i].style.display = 'block';
        }
        else if (pages[i].classList.contains('Research') && pageNumber === 6) {
            pages[i].style.display = 'block';
        }
        else if (pages[i].classList.contains('Rule') && pageNumber === 7) {
            pages[i].style.display = 'block';
        }
        else if (pages[i].classList.contains('Map') && pageNumber === 8) {
            pages[i].style.display = 'block';
        }
		else if (pages[i].classList.contains('Video') && pageNumber === 9) {
            pages[i].style.display = 'block';
        }
        else {
            pages[i].style.display = 'none';
        }
    }
    console.log('切换到页面 ' + pageNumber);
}
