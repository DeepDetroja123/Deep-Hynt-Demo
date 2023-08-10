function toggleNav() {
    var before_class = document.getElementById("menu-icon-mobile");
    var after_class = document.getElementById("cancel-icon");
    var hidden_class = document.getElementById("mobileNav");


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
        hidden_class.style.left="0";
    }
    else {
        after_class.classList.remove('d-block');
        after_class.classList.add('d-none');
        hidden_class.style.left="-100%";
    }
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
    var before = document.getElementById('d-search');
    var after = document.getElementById('search-x');
    var after1 = document.getElementById('search_icon');
    var search_box =document.getElementById('d-search');

    if (before.classList.contains('d-block')) {
        before.classList.remove('d-block');
        before.classList.add('d-none');
        after1.classList.remove('d-none');
        after1.classList.add('d-block');
        search_box.style.top='-130%';
      
    } else {
        before.classList.remove('d-none');
        before.classList.add('d-block');
        after1.classList.remove('d-block');
        after1.classList.add('d-none');
      
        search_box.style.top='130px';
      
    }

    if (after.classList.contains('d-none')) {
        after.classList.remove('d-none');
        after.classList.add('d-block');
    } else {
        after.classList.remove('d-block');
        after.classList.add('d-none');
    }
}

