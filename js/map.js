var mapOpen = document.querySelector(".js_open_map");
var mapPopup = document.querySelector(".modal_content_map");
var mapClose = mapPopup.querySelector(".modal_content_close");
var mapOverlay = document.querySelector(".modal_overlay");

mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("modal_content_show");
  mapOverlay.classList.add("overlay_show");
});

mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal_content_show");
  mapOverlay.classList.remove("overlay_show");
});


window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal_content_show") && mapOverlay.classList.contains("overlay_show")) {
      mapPopup.classList.remove("modal_content_show");
      mapOverlay.classList.remove("overlay_show");
    }
  }
});
