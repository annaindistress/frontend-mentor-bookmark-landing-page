'use strict';

const header = document.querySelector('.header');
const headerLogo = header.querySelector('.logo');
const headerToggle = header.querySelector('.header__toggle');
const navigation = header.querySelector('.navigation');

const newsletterForm = document.querySelector('.newsletter__form');
const newsletterField = newsletterForm.querySelector('.newsletter__field');
const newsletterInput = newsletterForm.querySelector('.newsletter__input');

headerToggle.addEventListener('click', () => {
  header.classList.toggle('header--open');
  headerLogo.classList.toggle('logo--white');
  navigation.classList.toggle('navigation--open');
});

newsletterInput.addEventListener('input', () => {
  if (newsletterField.classList.contains('newsletter__field--error')) {
    newsletterField.classList.remove('newsletter__field--error');
    newsletterInput.nextElementSibling.remove();
  }
});

newsletterForm.addEventListener('submit', evt => {
  evt.preventDefault();

  if (!newsletterInput.validity.valid) {
    newsletterField.classList.add('newsletter__field--error');

    const errorMessage = document.createElement('span');
    errorMessage.classList.add('newsletter__error');
    errorMessage.textContent = 'Whoops, make sure it’s an email';
    newsletterInput.after(errorMessage);
  }
});
