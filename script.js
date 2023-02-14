'use strict';

const header = document.querySelector('.header');
const headerLogo = header.querySelector('.logo');
const headerToggle = header.querySelector('.header__toggle');
const navigation = header.querySelector('.navigation');

const newsletterForm = document.querySelector('.newsletter__form');
const newsletterField = newsletterForm.querySelector('.newsletter__field');
const newsletterInput = newsletterForm.querySelector('.newsletter__input');

const features = document.querySelector('.features');
const featuresTabList = features.querySelector('.features__tabs');
const featuresTabs = features.querySelectorAll('.features__tab-link');
const featuresPanels = features.querySelectorAll('.features__tab-content');

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

  if (
    !newsletterInput.validity.valid &&
    !newsletterField.classList.contains('newsletter__field--error')
  ) {
    newsletterField.classList.add('newsletter__field--error');

    const errorMessage = document.createElement('span');
    errorMessage.classList.add('newsletter__error');
    errorMessage.textContent = 'Whoops, make sure it’s an email';
    newsletterInput.after(errorMessage);
  }
});

const switchTab = (oldTab, newTab) => {
  newTab.focus();
  newTab.removeAttribute('tabindex');
  newTab.setAttribute('aria-selected', 'true');
  oldTab.removeAttribute('aria-selected');
  oldTab.setAttribute('tabindex', '-1');
  let newIndex = Array.from(featuresTabs).indexOf(newTab);
  let oldIndex = Array.from(featuresTabs).indexOf(oldTab);
  featuresPanels[oldIndex].hidden = true;
  featuresPanels[newIndex].hidden = false;
};

Array.from(featuresTabs).forEach((tab, index) => {
  tab.setAttribute('role', 'tab');
  tab.parentNode.setAttribute('role', 'presentation');
  tab.setAttribute('tabindex', '-1');

  tab.addEventListener('click', evt => {
    evt.preventDefault();
    let currentTab = featuresTabList.querySelector('[aria-selected]');
    if (evt.currentTarget !== currentTab) {
      switchTab(currentTab, evt.currentTarget);
    }
  });

  tab.addEventListener('keydown', evt => {
    let index = Array.from(featuresTabs).indexOf(evt.currentTarget);
    let dir;
    switch (evt.key) {
      case 'ArrowLeft': {
        dir = index - 1;
        break;
      }
      case 'ArrowRight': {
        dir = index + 1;
        break;
      }
      case 'ArrowDown': {
        dir = 'down';
        break;
      }
      default: {
        dir = null;
      }
    }
    if (dir !== null) {
      evt.preventDefault();
      if (dir === 'down') {
        featuresPanels[i].focus();
      } else if (featuresTabs[dir]) {
        switchTab(evt.currentTarget, featuresTabs[dir]);
      } else {
        void 0;
      }
    }
  });
});

Array.from(featuresPanels).forEach((panel, index) => {
  panel.setAttribute('role', 'tabpanel');
  panel.setAttribute('tabindex', '-1');
  panel.setAttribute('aria-labelledby', featuresTabs[index].id);
  panel.hidden = true;
});

featuresTabList.setAttribute('role', 'tablist');
featuresTabs[0].removeAttribute('tabindex');
featuresTabs[0].setAttribute('aria-selected', 'true');
featuresPanels[0].hidden = false;
