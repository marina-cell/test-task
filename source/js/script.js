// Логин
var loginPopup = document.querySelector('.modal-login');
var loginOpenButton = document.querySelector('.user-nav__link--user');
var closeButton = loginPopup.querySelector(".modal__close-button");

loginOpenButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  loginPopup.classList.add('modal--show');
});

closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (loginPopup.classList.contains("modal--show")) {
      loginPopup.classList.remove("modal--show");
    }
  }
});

// Главное меню
var mainNav = document.querySelector('.main-nav');
var mainNavToggle = document.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--nojs');

mainNavToggle.addEventListener('click', function() {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
  }
});
