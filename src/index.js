import './styles/main.scss'
import './slick.min.js'
import $ from 'jquery'

const burger = document.querySelector('.header__burger')
const burgerLine = document.querySelector('.header__burger-line')
const menu = document.querySelector('.header__menu')
const acc = document.getElementsByClassName("faq__card");

burger.addEventListener('click', function() {
  burgerLine.classList.toggle('header__burger-line--open')
  menu.classList.toggle('header__menu--open')
})

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  });
}

// sliders //

$('.hero__slider').slick({
  dots: true,
  adaptiveHeight: true,
})

$('.our-spaces__slider').slick({
  centerMode: true,
  centerPadding: '30px',
  slidesToScroll: 1,
  slidesToShow: 3,
  focusOnSelect: true,
  dots: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
})

$('.gallery__slider').slick({
  centerMode: true,
  slidesToScroll: 2,
  slidesToShow: 3,
  dots: true,
  focusOnSelect: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 360,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
})

$('.reviews__slider').slick({
  centerMode: true,
  slidesToScroll: 3,
  centerPadding: '20px',
  slidesToShow: 2,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },
  ]
})

$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});