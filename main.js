// cursor----------------
const cursor = document.querySelector(".center-cursor");
const cursor_2 = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  cursor_2.style.left = e.pageX + "px";
  cursor_2.style.top = e.pageY + "px";
});
//  ------------nav bar -------------

const toggle_menu = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const hamburger = document.querySelector("#hamburger_menu");

function toggle_nav() {
  menu.classList.toggle("active");
  hamburger.classList.toggle("is-active");
}
function closeMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    hamburger.classList.remove("is-active");
  }
}

// //  ------------nav bar end-------------
