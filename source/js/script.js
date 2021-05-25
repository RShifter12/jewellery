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
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2

        }
      }
    ]
  });
});


$(window).on('load resize', function() {
  if ($(window).width() < 767) {
    $('.card__images').slick({
      arrows: false,
      dots: false,
      adaptiveHeight: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      cssEase: 'linear'

    });
  } else {
    $('.card__images').slick("unslick");
  }
});


var acc = document.querySelectorAll('.accordion-item__trigger');

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function (event) {
    event.currentTarget.classList.toggle('active');
    var panel = event.currentTarget.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.opacity = null;
    } else {
      panel.style.maxHeight = panel.style.maxHeight + '290px';
      panel.style.opacity = panel.style.opacity + '1';
//      collapseOthers(event.currentTarget);
    }
  });
}


//function collapseOthers(clickedAccor) {
//  var accs = document.getElementsByClassName('accordion-item__trigger');
//  for (i = 0; i < accs.length; i++) {
//    if (accs[i] !== clickedAccor) {
//      accs[i].nextElementSibling.style.maxHeight = null;
//    }
//  }
//}


var pageHeader = document.querySelector('.header');
var headerToggle = document.querySelector('.header__toggle');

pageHeader.classList.remove('header--nojs');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('header--closed')) {
    pageHeader.classList.remove('header--closed');
    pageHeader.classList.add('header--opened');
  } else {
    pageHeader.classList.add('header--closed');
    pageHeader.classList.remove('header--opened');
  }
});

var filter = document.querySelector('.filter');
var filterToggle = document.querySelector('.filter-toggle');

filterToggle.addEventListener('click', function () {
  if (filter.classList.contains('filter--closed')) {
    filter.classList.remove('filter--closed');
    filter.classList.add('filter--opened');
  } else {
    filter.classList.add('filter--closed');
    filter.classList.remove('filter--opened');
  }
});


var filterClose = document.querySelector('.filter__close');

filterClose.addEventListener('click', function () {
  if (filter.classList.contains('filter--opened')) {
    filter.classList.remove('filter--opened');
    filter.classList.add('filter--closed');
  } else {
    filter.classList.add('filter--opened');
    filter.classList.remove('filter--closed');
  }
});

var filterBtn = document.querySelectorAll('.filter-item__trigger');

for (var j = 0; j < filterBtn.length; j++) {
  filterBtn[j].addEventListener('click', function (event) {
    event.currentTarget.classList.toggle('active1');
    var panel = event.currentTarget.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.opacity = null;
    } else {
      panel.style.maxHeight = panel.style.maxHeight + '290px';
      panel.style.opacity = panel.style.opacity + '1';
//      collapseOthers(event.currentTarget);
    }
  });
}

