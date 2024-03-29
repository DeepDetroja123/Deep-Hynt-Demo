function toggleNav() {
    var before_class = document.getElementById("menu-icon-mobile");
    var after_class = document.getElementById("cancel-icon");
    var hidden_class = document.getElementById("mobileNav");
    var overlay = document.getElementById("overlay");


    if (before_class.classList.contains('d-block')) {
        before_class.classList.remove('d-block')
        before_class.classList.add('d-none');

    }
    else {
        before_class.classList.remove('d-none');
        before_class.classList.add('d-block');

    }
    if (after_class.classList.contains('d-none')) {
        after_class.classList.remove('d-none');
        after_class.classList.add('d-block');
        hidden_class.style.left = "0";
        overlay.classList.remove('d-none');
        overlay.classList.add('d-block');
    }
    else {
        after_class.classList.remove('d-block');
        after_class.classList.add('d-none');
        hidden_class.style.left = "-100%";
        overlay.classList.remove('d-block');
        overlay.classList.add('d-none');
    }
}
function addImage() {
    var firstimage = document.getElementById('first-image');
    var secondimage = document.getElementById('second-image');
    if (firstimage.classList.contains('visible-block')) {
        firstimage.classList.remove('visible-block');
        firstimage.classList.add('invisible-block');
        secondimage.classList.remove('invisible-block');
        secondimage.classList.add('visible-block');
    }
    else {
        firstimage.classList.remove('invisible-block');
        firstimage.classList.add('visible-block');
        secondimage.classList.remove('visible-block');
        secondimage.classList.add('invisible-block');
    }

}
function faceToggle() {
    var faceImg = document.getElementById('btn-faceImg');
    faceImg.src = "./images/Hynt_9b@2x.png";
}
function eyesToggle() {
    var faceImg = document.getElementById('btn-faceImg');
    faceImg.src = "./images/Hynt_22a@2x.png";
}
function lipsToggle() {
    var faceImg = document.getElementById('btn-faceImg');
    faceImg.src = "./images/Hynt_13@2x.png";
}
function skinToggle() {
    var faceImg = document.getElementById('btn-faceImg');
    faceImg.src = "./images/Hynt_10b@2x.png";
}


document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth > 992) {

        document.querySelectorAll('.navbar .nav-item').forEach(function (everyitem) {

            everyitem.addEventListener('mouseover', function (e) {

                let el_link = this.querySelector('a[data-bs-toggle]');

                if (el_link != null) {
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }
            });
            everyitem.addEventListener('mouseleave', function (e) {
                let el_link = this.querySelector('a[data-bs-toggle]');

                if (el_link != null) {
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }
            })
        });

    }
});

function searchbox() {
    var dd = document.getElementById('dd2');
    var searchBox = document.getElementById('d-search');
    var searchCross = document.getElementById('search-x');
    var searchIcon = document.getElementById('search_icon');

    if (searchIcon.classList.contains('d-block')) {
        searchIcon.classList.remove('d-block');
        searchIcon.classList.add('d-none');
        searchCross.classList.remove('d-none');
        searchCross.classList.add('d-block');
        searchBox.style.top = '135px';

    } else {
        searchIcon.classList.remove('d-none');
        searchIcon.classList.add('d-block');
        searchCross.classList.remove('d-block');
        searchCross.classList.add('d-none');
        searchBox.style.top = '-155%';

    }

    // if (searchCross.classList.contains('d-none')) {
    //     searchCross.classList.remove('d-block');
    //     searchCross.classList.add('d-block');
    // } else {
    //     searchCross.classList.remove('d-block');
    //     searchCross.classList.add('d-none');
    // }

}
function youtube_video() {

    document.body.style.overflow = "hidden";
    document.body.scrollTop;
    // $("body").remove('position-static');
    var model = document.getElementById('videoModal');
    var modelContent = document.getElementById('model-content');
    if (screen.width >= 992) {
        modelContent.style.width = (screen.width / 2.4) + 40 + "px";
        modelContent.style.height = (screen.height / 3) + 40 + "px";
    }
    else if (screen.width >= 576) {
        modelContent.style.width = (screen.width) / 1.2 + "px";
        modelContent.style.height = (screen.height / 2.3) + "px";
    }
    else {
        modelContent.style.width = (screen.width - 20) + "px";
        modelContent.style.height = (screen.height / 4.01) + "px";
    }
    model.classList.remove('invisible-block');
    model.classList.add('visible-block');
    model.shadowRoot;
}


function closeModal() {
    document.body.style.overflow = "visible";
    // $("body").remove('noscroll');
    var model = document.getElementById('videoModal');
    model.classList.remove('visible-block');
    model.classList.add('invisible-block');
    model.shadowRoot;
}


var swiper = new Swiper('.mySwiper', {
    slidesPerView: "auto",
    loop: true,
    navigation: {
        nextEl: '.swiper-button-n',
        prevEl: '.swiper-button-p',
    },
    breakpoints: {
        992: {
            slidesPerView: 4,
        },
    },

});

var swiper = new Swiper(".newSwiper", {
    slidesPerView: image_band(),
    loop: true,
});

function image_band() {
    if (screen.width >= 992)
        return '2';
    else
        return 'auto';

}
var swiper = new Swiper(".content-swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});
document.addEventListener("DOMContentLoaded", function () {
    var image_swiper = new Swiper('.imageSlider', {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 5,
        speed: 5000,
        autoplay: {
            disableOnInteraction: false,
            delay: 1,
        },

        breakpoints: {
            1200: {
                slidesPerView: 5.68,
            },
        },
    });

    function startAutoplay() {
        setInterval(function () {
            if (!image_swiper.isBeginning) {
                image_swiper.slidePrev();
            } else {
                image_swiper.slideTo(image_swiper.slides.length - 1);
            }
        }, image_swiper.params.speed);
    }

    startAutoplay();
});


