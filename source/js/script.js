'use strict';


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

