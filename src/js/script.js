
window.addEventListener("DOMContentLoaded", function() {
    //Login form handling------------------------------------------------------
    const loginButton = document.querySelector('.nav__login-button');
    const popupLogin = document.querySelector('.popup-login');
    const popupLoginClose = document.querySelector('.popup-login__close');
    const popupLoginSubmit = document.querySelector('#popup-login__submit');

    loginButton.addEventListener('click', loginHandler);
    popupLoginClose.addEventListener('click', closeLoginHandler);
    popupLoginSubmit.addEventListener('click', submitLoginHandler);

    function loginHandler() {
        popupLogin.classList.add('popup-login_show');
    }

    function closeLoginHandler( event ) {
        event.preventDefault();
        popupLogin.classList.remove('popup-login_show');
    }

    function submitLoginHandler( event ) {
        event.preventDefault();

        const loginEmailInput = document.forms['login-form']['email'];
        const loginPasswordInput = document.forms['login-form']['password'];
        const labelEmail = document.querySelector('#labelEmail');
        const labelPassword = document.querySelector('#labelParol');

        if ( !emailValidate(loginEmailInput.value) ) {
            labelEmail.innerText = 'Ваш email: неверный формат email';
            loginEmailInput.classList.add('warning-input');
            labelEmail.classList.add('warning-label');
        } else {
            labelEmail.innerText = 'Ваш email:';
            loginEmailInput.classList.remove('warning-input');
            labelEmail.classList.remove('warning-label');
        }

        if ( loginPasswordInput.value.length < 4 ) {
            labelPassword.innerText = 'Пароль: не меньше 4 символов';
            loginPasswordInput.classList.add('warning-input');
            labelPassword.classList.add('warning-label');
        } else {
            labelPassword.innerText = 'Пароль:';
            loginPasswordInput.classList.remove('warning-input');
            labelPassword.classList.remove('warning-label');
        }
    
        popupLogin.classList.remove('popup-login_show');
    }

    //CallMeBack form handling-------------------------------------------------
    const telnumberInput = document.querySelector('#telnumber');
    const submitCallme = document.querySelector('#popup-callme__submit');
    const callmeButton = document.querySelector('.header__callme-button');
    const popupCallme = document.querySelector('.popup-callme');
    const popupCallmeClose = document.querySelector('.popup-callme__close');

    callmeButton.addEventListener('click', callmeHandler);
    popupCallmeClose.addEventListener('click', closeCallmeHandler);
    submitCallme.addEventListener('click', submitCallmeHandler);

    function callmeHandler(event) {
        event.preventDefault();
        popupCallme.classList.add('popup-callme_show');
    }

    function closeCallmeHandler(event) {
        event.preventDefault();
        popupCallme.classList.remove('popup-callme_show');
    }

    function submitCallmeHandler(event) {
        event.preventDefault();
        popupCallme.classList.remove('popup-callme_show');

        setTimeout(
            () => {
                alert('Мы Вам перезвоним по данному номеру: ' + telnumberInput.value);
            }, 0
        );
    }

    //Site search validation---------------------------------------------------
    const searchButton = document.querySelector('.top__forms-search-button');
    const popupSearchWarning = document.querySelector('.popup-searchwarning');
    const popupSearchWarningClose = document.querySelector('.popup-searchwarning__close');

    searchButton.addEventListener('click', searchHandler);
    popupSearchWarningClose.addEventListener('click', closeSearchHandler);

    function searchHandler( event ) {
        const searchWord = document.forms['top__forms-search']['search'].value;

        event.preventDefault();

        if(searchWord.length < 2) {
            popupSearchWarning.classList.add('popup-searchwarning_show');
        }
    }

    function closeSearchHandler( event ) {
        event.preventDefault();
        popupSearchWarning.classList.remove('popup-searchwarning_show');
    }

    //Top form validation------------------------------------------------------
    const topFormSubmitButton = document.querySelector('#top__forms-submit-button');
    const minPrice = document.forms['topforms']['minprice'];
    const maxPrice = document.forms['topforms']['maxprice'];
    const popupTopForm = document.querySelector('.popup-topform-warning');
    const popupTopFormClose = document.querySelector('.popup-topform-warning__close');

    topFormSubmitButton.addEventListener('click', topFormsSubmitHandler);
    popupTopFormClose.addEventListener('click', popupTopFormCloseHandler);

    function topFormsSubmitHandler( event ) {
        event.preventDefault();

        if ( +minPrice.value < 0 || 
            +maxPrice.value < 0 || 
            +minPrice.value > +maxPrice.value) {
            popupTopForm.classList.add('popup-topform-warning_show');
        }
        
    }

    function popupTopFormCloseHandler( event ) {
        event.preventDefault();
        popupTopForm.classList.remove('popup-topform-warning_show');
    }

    //Entering a phone number by mask
    telnumberInput.addEventListener('input', mask, false);

    function setCursorPosition(pos, telnumberInput) {
        telnumberInput.focus();
        if (telnumberInput.setSelectionRange) {
            telnumberInput.setSelectionRange(pos, pos)
        } else if (telnumberInput.createTextRange) {
            let range = telnumberInput.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }
     
    function mask(event) {
        let matrix = this.defaultValue,
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
            
        def.length >= val.length && (val = def);
        matrix = matrix.replace(/[_\d]/g, function(a) {
            return val.charAt(i++) || "_"
        });

        this.value = matrix;
        i = matrix.lastIndexOf(val.substr(-1));
        i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
        setCursorPosition(i, this);
    }

    //Product cards handling---------------------------------------------------
    const mainProductcardsArray = document.querySelectorAll('.main__productcard');
    const headerCompareCounter = document.querySelector('.header__compare-counter span');
    const headerFavoritesCounter = document.querySelector('.header__favorites-counter span');

    mainProductcardsArray.forEach((element) => {
        element.addEventListener('click', addToCompareHandler);
        element.addEventListener('click', addToFavoritesHandler);
    });

    function addToCompareHandler (event) {
        if(event.target.classList.contains('main__add-to-compare')) {
            event.preventDefault();
            if ( event.target.innerText == 'В сравнении' ) {
                return;
            }
            event.target.innerText = 'В сравнении';
            headerCompareCounter.innerText = +(+headerCompareCounter.innerText + 1);
        }
    }

    function addToFavoritesHandler (event) {
        if(event.target.classList.contains('main__add-to-favorite')) {
            event.preventDefault();
            if ( event.target.innerText == 'В избранном' ) {
                return;
            }
            event.target.innerText = 'В избранном';
            headerFavoritesCounter.innerText = +(+headerFavoritesCounter.innerText + 1);
        }
    }

    //Handling newsletter subscription-----------------------------------------
    const subscribeButton = document.querySelector('#footer__subscribe-submitbutton');
    const popupSuccessSubscript = document.querySelector('.popup-successsubscript');
    const popupSuccessSubscriptClose = document.querySelector('.successsubscript__close');

    subscribeButton.addEventListener('click', subscribeHandler);
    popupSuccessSubscriptClose.addEventListener('click', closeSubscribeHandler);

    function subscribeHandler(event) {
        event.preventDefault();
        
        const emailInput = document.querySelector('#footer__subscribe-input');
        const emailSubscribeForm = document.forms['footer__subscribe-form']['footer__subscribe-input'].value;
        const isValid = emailValidate(emailSubscribeForm);
        const wrongEmailMessage = document.querySelector('#wrong-email-message');
        
        if (isValid) {
            emailInput.classList.remove('footer__subscribe-input_error');
            wrongEmailMessage.classList.remove('wrong-email-message-show');
            setTimeout(
                () => {
                    popupSuccessSubscript.classList.add('popup-successsubscript_show');
                    emailInput.value = "";
                }, 0
            );
            return;
        }

        emailInput.classList.add('footer__subscribe-input_error');
        wrongEmailMessage.classList.add('wrong-email-message-show');
    }

    function closeSubscribeHandler(event) {
        event.preventDefault();
        popupSuccessSubscript.classList.remove('popup-successsubscript_show');
    }

    //Email validation
    function emailValidate(email) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(reg.test(email) == false) {
           return false;
        }
        return true;
    }

});
    