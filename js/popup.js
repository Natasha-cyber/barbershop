  var link = document.querySelector(".login");
  var popup = document.querySelector(".modal_content");
  var close = popup.querySelector(".modal_content_close");
  var form = popup.querySelector("form");
  var login = popup.querySelector("[name=login]");
  var password = popup.querySelector("[name=password]");
  var storage = localStorage.getItem("login");
  var overlay = document.querySelector(".modal_overlay");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal_content_show");
    overlay.classList.add("overlay_show");
    if (storage) {
      login.value = storage;
      password.focus();
    } else {
      login.focus();
    }
  });

  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal_content_show");
    overlay.classList.remove("overlay_show");
    popup.classList.remove("modal_error");
  });

  form.addEventListener("submit", function(event) {
    if (!login.value || !password.value) {
      event.preventDefault();
      popup.classList.add("modal_error");
    } else {
      localStorage.setItem("login", login.value);
    }
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal_content_show") && overlay.classList.contains("overlay_show")) {
        popup.classList.remove("modal_content_show");
        overlay.classList.remove("overlay_show");
        popup.classList.remove("modal_error");
      }
    }
  });
