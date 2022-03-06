let Menu_mobile = document.getElementById("menu");

let Screen_mobile = document.getElementById("screen");

Menu_mobile.addEventListener("click", function () {
  if (Screen_mobile.style.height == "0rem") {
    Screen_mobile.style.height = "10rem";
  } else {
    Screen_mobile.style.height = "0rem";
  }
});
