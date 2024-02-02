// Header

document.addEventListener('DOMContentLoaded', function () {
    var header = document.getElementById('header');
    var headerimg = document.getElementById('headerimg');
    var header_a = document.querySelectorAll('.header-a');
    var scrollThreshold = 56; // Adjust this value as needed

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;

        if (scrollPosition > scrollThreshold) {
            header.classList.add('solid');
            headerimg.src = "images/logos/manford-blue.png";
            header_a.forEach( (a) => {
              if (!a.classList.contains('header-active')) {
                a.style.color = "black";
              }
            })
        } else {
            header.classList.remove('solid');
            headerimg.src = "images/logos/manford-white.png";
            header_a.forEach ( (a) => {
              if (!a.classList.contains('header-active')) {
                a.style.color = "white";
              }
            })
        }
    });
});

// Sliders Button
  const productsButton = document.querySelectorAll('.products-button');
  productsButton.forEach((button) => {
    button.addEventListener('click', () => {
      window.location.href = './pages/products.html';
    })
  })

// Image Manford Logo in header as button
  const headerLogo = document.getElementById('headerimg');
  headerLogo.addEventListener('click', () => {
    window.location.href = './index.html';
  })





// Sliders


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to continuously display slides and update dots
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Call showSlides() at regular intervals (every 2 seconds in this example)
setInterval(function() {
  plusSlides(1); // Change to next slide
}, 6000); // Adjust the interval as needed (in milliseconds)








