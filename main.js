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

const blur = document.querySelector(".blur");
const nav = document.querySelector(".nav-items");
const nav_item = document.querySelectorAll(".nav-item");

function openMenu() {
  blur.classList.add("animation1");
  nav.classList.add("animation2");
}

function closeMenu() {
  if (blur.classList.contains("animation1")) {
    blur.classList.remove("animation1");
    nav.classList.remove("animation2");
  }
}

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function (e) {
  if (this.oldScroll > this.scrollY && this.oldScroll > 600) {
    console.log(this.scrollY);
    console.log(this.oldScroll > this.scrollY);
    navbar.classList.add("scroll-nav");
  } else {
    navbar.classList.remove("scroll-nav");
  }
  this.oldScroll = this.scrollY - 2;
});

// //  ------------nav bar end-------------
