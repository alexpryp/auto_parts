"use strict";window.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".nav__login-button"),o=document.querySelector(".popup-login"),t=document.querySelector(".popup-login__close"),n=document.querySelector("#popup-login__submit");e.addEventListener("click",function(){o.classList.add("popup-login_show")}),t.addEventListener("click",function(e){e.preventDefault(),o.classList.remove("popup-login_show")}),n.addEventListener("click",function(e){e.preventDefault();var t=document.forms["login-form"].email,n=document.forms["login-form"].password,r=document.querySelector("#labelEmail"),e=document.querySelector("#labelParol");f(t.value)?(r.innerText="Ваш email:",t.classList.remove("warning-input"),r.classList.remove("warning-label")):(r.innerText="Ваш email: неверный формат email",t.classList.add("warning-input"),r.classList.add("warning-label"));n.value.length<4?(e.innerText="Пароль: не меньше 4 символов",n.classList.add("warning-input"),e.classList.add("warning-label")):(e.innerText="Пароль:",n.classList.remove("warning-input"),e.classList.remove("warning-label"));o.classList.remove("popup-login_show")});var r=document.querySelector("#telnumber"),e=document.querySelector("#popup-callme__submit"),t=document.querySelector(".header__callme-button"),s=document.querySelector(".popup-callme"),n=document.querySelector(".popup-callme__close");t.addEventListener("click",function(e){e.preventDefault(),s.classList.add("popup-callme_show")}),n.addEventListener("click",function(e){e.preventDefault(),s.classList.remove("popup-callme_show")}),e.addEventListener("click",function(e){e.preventDefault(),s.classList.remove("popup-callme_show"),setTimeout(function(){alert("Мы Вам перезвоним по данному номеру: "+r.value)},0)});var n=document.querySelector(".top__forms-search-button"),c=document.querySelector(".popup-searchwarning"),e=document.querySelector(".popup-searchwarning__close");n.addEventListener("click",function(e){var t=document.forms["top__forms-search"].search.value;e.preventDefault(),t.length<2&&c.classList.add("popup-searchwarning_show")}),e.addEventListener("click",function(e){e.preventDefault(),c.classList.remove("popup-searchwarning_show")});var n=document.querySelector("#top__forms-submit-button"),a=document.forms.topforms.minprice,u=document.forms.topforms.maxprice,i=document.querySelector(".popup-topform-warning"),e=document.querySelector(".popup-topform-warning__close");n.addEventListener("click",function(e){e.preventDefault(),(+a.value<0||+u.value<0||+a.value>+u.value)&&i.classList.add("popup-topform-warning_show")}),e.addEventListener("click",function(e){e.preventDefault(),i.classList.remove("popup-topform-warning_show")}),r.addEventListener("input",function(e){var t=this.defaultValue,n=0,r=t.replace(/\D/g,""),o=this.value.replace(/\D/g,"");r.length>=o.length&&(o=r),t=t.replace(/[_\d]/g,function(e){return o.charAt(n++)||"_"}),this.value=t,(n=t.lastIndexOf(o.substr(-1)))<t.length&&t!=this.defaultValue?n++:n=t.indexOf("_"),function(e,t){t.focus(),t.setSelectionRange?t.setSelectionRange(e,e):t.createTextRange&&((t=t.createTextRange()).collapse(!0),t.moveEnd("character",e),t.moveStart("character",e),t.select())}(n,this)},!1);var n=document.querySelectorAll(".main__productcard"),l=document.querySelector(".header__compare-counter span"),p=document.querySelector(".header__favorites-counter span");function d(e){e.target.classList.contains("main__add-to-compare")&&(e.preventDefault(),"В сравнении"!=e.target.innerText&&(e.target.innerText="В сравнении",l.innerText=+(+l.innerText+1)))}function m(e){e.target.classList.contains("main__add-to-favorite")&&(e.preventDefault(),"В избранном"!=e.target.innerText&&(e.target.innerText="В избранном",p.innerText=+(+p.innerText+1)))}n.forEach(function(e){e.addEventListener("click",d),e.addEventListener("click",m)});var e=document.querySelector("#footer__subscribe-submitbutton"),v=document.querySelector(".popup-successsubscript"),n=document.querySelector(".successsubscript__close");function f(e){return 0!=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(e)}e.addEventListener("click",function(e){e.preventDefault();var t=document.querySelector("#footer__subscribe-input"),n=f(document.forms["footer__subscribe-form"]["footer__subscribe-input"].value),e=document.querySelector("#wrong-email-message");if(n)return t.classList.remove("footer__subscribe-input_error"),e.classList.remove("wrong-email-message-show"),void setTimeout(function(){v.classList.add("popup-successsubscript_show"),t.value=""},0);t.classList.add("footer__subscribe-input_error"),e.classList.add("wrong-email-message-show")}),n.addEventListener("click",function(e){e.preventDefault(),v.classList.remove("popup-successsubscript_show")})});