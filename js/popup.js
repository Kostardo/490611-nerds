var feedback = document.querySelector(".feedback-btn");
var popup = document.querySelector(".feedback");
var close = document.querySelector(".feedback-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login-field]");
var mail = popup.querySelector("[name=mail-field]");
var message = popup.querySelector("[name=message-field]");
var storage = localStorage.getItem("login");

feedback.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("feedback-active");
  });

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("feedback-active");
  });

form.addEventListener("submit", function (evt) {
  if (!login.value || !mail.value) {
    popup.offsetWidth = popup.offsetWidth;
    evt.preventDefault();
    console.log("Пожалуйста, представьтесь и введите корректный email адрес");
  }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("feedback-active")) {
        popup.classList.remove("feedback-active");

      }
    }
  });
