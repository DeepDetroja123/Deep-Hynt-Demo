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
//  function addImage(){
//     var before_image = document.getElementById('first-image');
//     var after_image = document.getElementById('second-image');
    
//      if(before_image.classList.contains('d-block')){
//         before_image.classList.add('d-block');
//         before_image.classList.add('d-none');
//     }else{
//         after_image.classList.remove('d-block');
//         after_image.classList.add('d-none');
//     }
//  }

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
    var dd=document.getElementById('dd2');
    var searchBox = document.getElementById('d-search');
    var searchCross = document.getElementById('search-x');
    var searchIcon = document.getElementById('search_icon');
     
    if (searchIcon.classList.contains('d-block')) {
        searchIcon.classList.remove('d-block');
        searchIcon.classList.add('d-none');
        searchCross.classList.remove('d-none');
        searchCross.classList.add('d-block');
        searchBox.style.top='135px';
      
    } else {
        searchIcon.classList.remove('d-none');
        searchIcon.classList.add('d-block');
        searchCross.classList.remove('d-block');
        searchCross.classList.add('d-none');
       searchBox.style.top='-155%';
      
    }

    // if (searchCross.classList.contains('d-none')) {
    //     searchCross.classList.remove('d-block');
    //     searchCross.classList.add('d-block');
    // } else {
    //     searchCross.classList.remove('d-block');
    //     searchCross.classList.add('d-none');
    // }

}

