
window.addEventListener("DOMContentLoaded", function() {
    //Login form handling------------------------------------------------------
    const loginButton = document.querySelector('.nav__login-button');
    const popupLogin = document.querySelector('.popup-login');
    const popupLoginClose = document.querySelector('.popup-login__close');

    loginButton.addEventListener('click', loginHandler);
    popupLoginClose.addEventListener('click', closeLoginHandler);

    function loginHandler(event) {
        popupLogin.classList.add('popup-login_show');
    }

    function closeLoginHandler(event) {
        event.preventDefault();
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
        popupCallme.classList.remove('popup-callme_show');
    }

    function submitCallmeHandler(event) {
        event.preventDefault();
        closeCallmeHandler();

        setTimeout(
            () => {
                alert('Мы Вам перезвоним по данному номеру: ' + telnumberInput.value);
            }, 0
        );
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

        console.log('Неправильный email');
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
    