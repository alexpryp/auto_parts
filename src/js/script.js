console.log('Hello, world');

const enterButton = document.querySelector('.nav__login-button');
const popupLogin = document.querySelector('.popup-login');
const popupLoginClose = document.querySelector('.popup-login__close');

enterButton.addEventListener("click", loginHandler);
popupLoginClose.addEventListener("click", closeLoginHandler)

function loginHandler(event) {
    event.preventDefault();
    popupLogin.classList.add("popup-login_show");
}

function closeLoginHandler(event) {
    event.preventDefault();
    popupLogin.classList.remove("popup-login_show");
}