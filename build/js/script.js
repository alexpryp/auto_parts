"use strict";

window.addEventListener("DOMContentLoaded", function () {
  //Login form handling------------------------------------------------------
  var loginButton = document.querySelector('.nav__login-button');
  var popupLogin = document.querySelector('.popup-login');
  var popupLoginClose = document.querySelector('.popup-login__close');
  loginButton.addEventListener('click', loginHandler);
  popupLoginClose.addEventListener('click', closeLoginHandler);

  function loginHandler(event) {
    popupLogin.classList.add('popup-login_show');
  }

  function closeLoginHandler(event) {
    event.preventDefault();
    popupLogin.classList.remove('popup-login_show');
  } //CallMeBack form handling-------------------------------------------------


  var telnumberInput = document.querySelector('#telnumber');
  var submitCallme = document.querySelector('#popup-callme__submit');
  var callmeButton = document.querySelector('.header__callme-button');
  var popupCallme = document.querySelector('.popup-callme');
  var popupCallmeClose = document.querySelector('.popup-callme__close');
  callmeButton.addEventListener('click', callmeHandler);
  popupCallmeClose.addEventListener('click', closeCallmeHandler);
  submitCallme.addEventListener('click', submitCallmeHandler);

  function callmeHandler(event) {
    event.preventDefault();
    popupCallme.classList.add('popup-callme_show');
  }

  function closeCallmeHandler(event) {
    popupCallme.classList.remove('popup-callme_show');
  }

  function submitCallmeHandler(event) {
    event.preventDefault();
    closeCallmeHandler();
    setTimeout(function () {
      alert('Мы Вам перезвоним по данному номеру: ' + telnumberInput.value);
    }, 0);
  } //Entering a phone number by mask


  telnumberInput.addEventListener('input', mask, false);

  function setCursorPosition(pos, telnumberInput) {
    telnumberInput.focus();

    if (telnumberInput.setSelectionRange) {
      telnumberInput.setSelectionRange(pos, pos);
    } else if (telnumberInput.createTextRange) {
      var range = telnumberInput.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }

  function mask(event) {
    var matrix = this.defaultValue,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function (a) {
      return val.charAt(i++) || "_";
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this);
  } //Handling newsletter subscription-----------------------------------------


  var subscribeButton = document.querySelector('#footer__subscribe-submitbutton');
  var popupSuccessSubscript = document.querySelector('.popup-successsubscript');
  var popupSuccessSubscriptClose = document.querySelector('.successsubscript__close');
  subscribeButton.addEventListener('click', subscribeHandler);
  popupSuccessSubscriptClose.addEventListener('click', closeSubscribeHandler);

  function subscribeHandler(event) {
    event.preventDefault();
    var emailInput = document.querySelector('#footer__subscribe-input');
    var emailSubscribeForm = document.forms['footer__subscribe-form']['footer__subscribe-input'].value;
    var isValid = emailValidate(emailSubscribeForm);
    var wrongEmailMessage = document.querySelector('#wrong-email-message');

    if (isValid) {
      emailInput.classList.remove('footer__subscribe-input_error');
      wrongEmailMessage.classList.remove('wrong-email-message-show');
      setTimeout(function () {
        popupSuccessSubscript.classList.add('popup-successsubscript_show');
        emailInput.value = "";
      }, 0);
      return;
    }

    console.log('Неправильный email');
    emailInput.classList.add('footer__subscribe-input_error');
    wrongEmailMessage.classList.add('wrong-email-message-show');
  }

  function closeSubscribeHandler(event) {
    event.preventDefault();
    popupSuccessSubscript.classList.remove('popup-successsubscript_show');
  } //Email validation


  function emailValidate(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(email) == false) {
      return false;
    }

    return true;
  }
});