'use strict';
$(document).ready(function() {
  $('.slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 100,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
});

var pageHeader = document.querySelector('.header');
var headerToggle = document.querySelector('.header__toggle');

pageHeader.classList.remove('page-header--nojs');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('header--closed')) {
    pageHeader.classList.remove('header--closed');
    pageHeader.classList.add('header--opened');
  } else {
    pageHeader.classList.add('header--closed');
    pageHeader.classList.remove('header--opened');
  }
});

