'use strict';

let btnNav = document.querySelector('.btn__nav');
let navList = document.querySelector('.nav__list');

let openCloseNav = () => {
  navList.classList.toggle('d-none');
};

btnNav.addEventListener('click', () => {
  openCloseNav();
});
