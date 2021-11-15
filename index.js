
function popupOnClik() {
  let popup = document.getElementById ("myPopup");
  popup.classList.add("visible");
  setTimeout (function () {
    popup.classList.remove("visible");
  }, 10000);
}
