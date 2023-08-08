function toggleNav() {
    var before_class = document.getElementById("menu-icon-mobile");
    var after_class = document.getElementById("cancel-icon");
    var hidden_class = document.getElementById("mobileNav");
    var hidden_ele_class = document.getElementById("search-line");

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
        // hidden_ele_class.classList.remove('d-none');
        // hidden_ele_class.classList.add('d-block');
        hidden_class.style.left="0";
    }
    else {
        after_class.classList.remove('d-block');
        after_class.classList.add('d-none');
        // hidden_class.classList.remove('d-block');
        // hidden_class.classList.add('d-none');
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
