'use strict';

let btnNav = document.querySelector('.btn__nav');
let navList = document.querySelector('.header__list');

let openCloseNav = () => {
  navList.classList.toggle('d-none');
};

btnNav.addEventListener('click', () => {
  openCloseNav();
});
