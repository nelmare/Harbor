var body = document.querySelector('.body');
var navMainList = document.querySelector('.main-nav__list');
var navToggle = document.querySelector('.main-nav__toggle');


navMainList.classList.remove('main-nav__list--nojs');
navToggle.classList.remove('main-nav__toggle--nojs');
navToggle.classList.add('main-nav__toggle--open');
navMainList.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
  navMainList.classList.toggle('main-nav--closed');
  navMainList.classList.toggle('main-nav--open');
  navToggle.classList.toggle('main-nav__toggle--open');
  navToggle.classList.toggle('main-nav__toggle--closed');
  body.classList.toggle('menu__open');
});
