'use strict';

const headerElement = document.querySelector('.header');
const headerToggleElement = headerElement.querySelector('.header__toggle');
const navigationElement = headerElement.querySelector('.navigation');

headerToggleElement.addEventListener('click', () => {
  headerElement.classList.toggle('header--open');
  navigationElement.classList.toggle('navigation--open');
});
