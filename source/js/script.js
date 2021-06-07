'use strict';
var $jq = jQuery.noConflict();
var slide = $jq('.slider--catalog').html();

var $status = $jq('.number');
var $slider = $jq('.slider');
 $slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + 'of' + slick.slideCount/2);
    });
if (!slide) {
  $jq(document).ready(function () {
    $jq('.slider').slick({
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
}

if ($jq('.card__images').length) {
  $jq(window).on('load resize', function () {
    if ($jq(window).width() < 767) {
      $jq('.card__images').slick({
        arrows: false,
        dots: false,
        adaptiveHeight: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        cssEase: 'linear'
      });
    } else {
      $jq('.card__images').slick('unslick');
    }
  });
}

//  modalLog
var modalLogin = document.querySelector('.modal--login');
var logIn = document.querySelector('.login');
var email = document.querySelector('#modal__email');
var freezeScroll = document.querySelector('html');
var logInTablet = document.querySelector('.login--tablet');


var openLogin = function () {
  modalLogin.classList.remove('modal--hidden');
  freezeScroll.style.overflow = 'hidden';
  email.focus();
  document.addEventListener('keydown', onPopupEscPress);
};

var closeLogin = function () {
  freezeScroll.style.overflow = 'visible';
  modalLogin.classList.add('modal--hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

logIn.classList.remove('login--nojs');

logIn.addEventListener('click', function (evt) {
  evt.preventDefault();
  openLogin();
});

if (logInTablet) {
  logInTablet.classList.remove('login--nojs');

  logInTablet.addEventListener('click', function (evt) {
    evt.preventDefault();
    openLogin();
  });
}


var loginClose = document.querySelector('.modal__close--login');

loginClose.addEventListener('click', function () {
  closeLogin();
});

document.addEventListener('click', function (evt) {
  if (evt.target === modalLogin) {
    closeLogin();
  }
});

var acc = document.querySelectorAll('.accordion-item__trigger');

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function (event) {
    event.currentTarget.classList.toggle('active');
    var panel = event.currentTarget.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.display = 'none';
    } else {
      panel.style.maxHeight = panel.style.maxHeight + '500px';
      panel.style.display = 'block';
    }
  });
}

var pageHeader = document.querySelector('.header');
var headerToggle = document.querySelector('.header__toggle');

pageHeader.classList.remove('header--nojs');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('header--closed')) {
    pageHeader.classList.remove('header--closed');
    pageHeader.classList.add('header--opened');
    freezeScroll.style.overflow = 'hidden';
  } else {
    pageHeader.classList.add('header--closed');
    pageHeader.classList.remove('header--opened');
    freezeScroll.style.overflow = 'visible';
  }
});

var filter = document.querySelector('.filter');
if (filter) {
  filter.classList.remove('filter--nojs');
}

var filterToggle = document.querySelector('.filter-toggle');

if (filterToggle) {
  filterToggle.addEventListener('click', function () {
    if (filter.classList.contains('filter--closed')) {
      filter.classList.remove('filter--closed');
      filter.classList.add('filter--opened');
      freezeScroll.style.overflow = 'hidden';
      document.addEventListener('keydown', onPopupEscPress);

    } else {
      filter.classList.add('filter--closed');
      filter.classList.remove('filter--opened');
      freezeScroll.style.overflow = 'visible';
      document.removeEventListener('keydown', onPopupEscPress);
    }
  });
}

var filterClose = document.querySelector('.filter__close');

if (filterClose) {
  filterClose.addEventListener('click', function () {
    if (filter.classList.contains('filter--opened')) {
      filter.classList.remove('filter--opened');
      filter.classList.add('filter--closed');
      freezeScroll.style.overflow = 'visible';
    } else {
      filter.classList.add('filter--opened');
      filter.classList.remove('filter--closed');
    }
  });
}

var filterBtn = document.querySelectorAll('.filter-item__trigger');

for (var j = 0; j < filterBtn.length; j++) {
  filterBtn[j].addEventListener('click', function (event) {
    event.currentTarget.classList.toggle('active1');
    var panel = event.currentTarget.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.display = 'none';
    } else {
      panel.style.maxHeight = panel.style.maxHeight + '290px';
      panel.style.display = 'block';
    }
  });
}

//  modalCard

var modalCard = document.querySelector('.modal--card');

var openCard = function () {
  modalCard.classList.remove('modal--hidden');
  freezeScroll.style.overflow = 'hidden';
  document.addEventListener('keydown', onPopupEscPress);
};

var closeCard = function () {
  freezeScroll.style.overflow = 'visible';
  if (modalCard){
    modalCard.classList.add('modal--hidden');
  }
  document.removeEventListener('keydown', onPopupEscPress);
};

var addToCart = document.querySelector('.card__button');

if (addToCart) {
  addToCart.addEventListener('click', function () {
    openCard();
  });
}

var onPopupEscPress = function (evt) {
  if (evt.keyCode === 27) {
    closeCard();
    closeLogin();
    if (filter) {
      filter.classList.add('filter--closed');
    }
  }
};
var cardClose = document.querySelector('.modal__close--card');

if (cardClose) {
  cardClose.addEventListener('click', function () {
    closeCard();
  });

  cardClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      closeCard();
    }
  });
}



document.addEventListener('click', function (evt) {
  if (evt.target === modalCard) {
    closeCard();
  }
});

email.value = localStorage.getItem('email');
email.oninput = function () {
  localStorage.setItem('email', email.value);
};
