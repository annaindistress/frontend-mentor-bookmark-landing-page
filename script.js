'use strict';

const headerElement = document.querySelector('.header');
const headerLogoElement = headerElement.querySelector('.logo')
const headerToggleElement = headerElement.querySelector('.header__toggle');
const navigationElement = headerElement.querySelector('.navigation');

headerToggleElement.addEventListener('click', () => {
  headerElement.classList.toggle('header--open');
  headerLogoElement.classList.toggle('logo--white');
  navigationElement.classList.toggle('navigation--open');
});
