document.addEventListener('DOMContentLoaded', function () {
    var header = document.getElementById('header');
    var headerimg = document.getElementById('headerimg');
    var header_a = document.querySelectorAll('.header-a');
    var scrollThreshold = 50; // Adjust this value as needed

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;

        if (scrollPosition > scrollThreshold) {
            header.classList.add('solid');
            headerimg.src = "../images/logos/manford-blue.png";
            header_a.forEach( (a) => {
              if (!a.classList.contains('header-active')) {
                a.style.color = "black";
              }
            })
        } else {
            header.classList.remove('solid');
            headerimg.src = "../images/logos/manford-white.png";
            header_a.forEach ( (a) => {
              if (!a.classList.contains('header-active')) {
                a.style.color = "white";
              }
            })
        }
    });
});
