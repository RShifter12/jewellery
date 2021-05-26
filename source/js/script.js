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

//modalLog
var modalLogin = document.querySelector('.modal--login');
var modal = document.querySelector('.modal');
var logIn = document.querySelector('.login');
var email = document.querySelector('#modal__email');

var openLogin = function () {

  modalLogin.classList.remove('modal--hidden');
  freezeScroll.style.overflow = 'hidden';
  footer.style.opacity = '0.25';
  main.style.opacity = '0.25';
  header.style.opacity = '0.25';

  email.focus();
  document.addEventListener('keydown', onPopupEscPress);
};

var closeLogin = function () {
  freezeScroll.style.overflow = 'visible';
  modalLogin.classList.add('modal--hidden');
  footer.style.opacity = '1';
  main.style.opacity = '1';
  header.style.opacity = '1';

  document.removeEventListener('keydown', onPopupEscPress);

};

logIn.classList.remove('login--nojs');


logIn.addEventListener('click', function (evt) {
  evt.preventDefault();
  openLogin();
});

var loginClose = document.querySelector('.login__close');

loginClose.addEventListener('click', function () {
  closeLogin();

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

//var filter = document.querySelector('.filter');
//var filterToggle = document.querySelector('.filter-toggle');
//
//filterToggle.addEventListener('click', function () {
//  if (filter.classList.contains('filter--closed')) {
//    filter.classList.remove('filter--closed');
//    filter.classList.add('filter--opened');
//  } else {
//    filter.classList.add('filter--closed');
//    filter.classList.remove('filter--opened');
//  }
//});
//
//
//
//var filterClose = document.querySelector('.filter__close');
//
//filterClose.addEventListener('click', function () {
//  if (filter.classList.contains('filter--opened')) {
//    filter.classList.remove('filter--opened');
//    filter.classList.add('filter--closed');
//  } else {
//    filter.classList.add('filter--opened');
//    filter.classList.remove('filter--closed');
//  }
//});



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

//modalCard

var modalCard = document.querySelector('.modal--card');
var freezeScroll = document.querySelector('html');
var body = document.querySelector('body');

var header = document.querySelector('header');
var main = document.querySelector('main');
var footer = document.querySelector('footer');




var openCard = function () {
  modalCard.classList.remove('modal--hidden');
  freezeScroll.style.overflow = 'hidden';
  footer.style.opacity = '0.25';
  main.style.opacity = '0.25';
  header.style.opacity = '0.25';

//  nameInputModal.focus();
  document.addEventListener('keydown', onPopupEscPress);
};




var closeCard = function () {
  freezeScroll.style.overflow = 'visible';
  modalCard.classList.add('modal--hidden');
  footer.style.opacity = '1';
  main.style.opacity = '1';
  header.style.opacity = '1';

  document.removeEventListener('keydown', onPopupEscPress);

};

var addToCart = document.querySelector('.card__button');

addToCart.addEventListener('click', function () {
  openCard();
});

var onPopupEscPress = function (evt) {
  if (evt.keyCode === 27) {
    closeCard();
    closeLogin();
  }


};
var cardClose = document.querySelector('.card__close');

cardClose.addEventListener('click', function () {
  closeCard();

});

cardClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closeCard();
    closeLogin();

  }
});



//header.addEventListener('click', function () {
//  if (!modalCard.classList.contains('modal--hidden')) {
//    modalCard.classList.add('modal--hidden');
//  } else {
//    header.style.opacity = '1';
//    main.style.opacity = '1';
//    footer.style.opacity = '1';
//  }
//});
//
//main.addEventListener('click', function () {
//  if (!modalCard.classList.contains('modal--hidden')) {
//    modalCard.classList.add('modal--hidden');
//  } else {
//    header.style.opacity = '1';
//    main.style.opacity = '1';
//    footer.style.opacity = '1';
//  }
//
//});
//
//footer.addEventListener('click', function () {
//  if (!modalCard.classList.contains('modal--hidden')) {
//    modalCard.classList.add('modal--hidden');
//  } else {
//    header.style.opacity = '1';
//    main.style.opacity = '1';
//    footer.style.opacity = '1';
//  }
//
//});

//var overlayClick = function () {
//if (!modalCard.classList.contains('modal--hidden')) {
//    modalCard.classList.add('modal--hidden');
//  } else {
//    header.style.opacity = '1';
//    main.style.opacity = '1';
//    footer.style.opacity = '1';
//  }
//};

