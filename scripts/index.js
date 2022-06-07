const desktopNav = document.querySelector(".desktop-navigation");
const burgerBtn = document.querySelector(".burger-btn");
const mobileMenu = document.querySelector(".mobile-navigation");
const closeBtn = document.querySelector(".mobile-navigation-close-btn");

const screenWidth = window.screen.width;

if (screenWidth <= 768) {
  desktopNav.classList.add("d-none");
  burgerBtn.classList.remove("d-none");
  mobileMenu.classList.remove("d-none");
}
if (screenWidth > 768) {
  desktopNav.classList.remove("d-none");
  burgerBtn.classList.add("d-none");
  mobileMenu.classList.add("d-none");
}

burgerBtn.addEventListener("click", () => {
  console.log("clicked");
  mobileMenu.classList.remove("mobile-navigation-animation-end");
  mobileMenu.classList.add("mobile-navigation-animation-start");
  burgerBtn.classList.add("d-none");
});

closeBtn.addEventListener("click", () => {
  console.log("clicked");
  mobileMenu.classList.remove("mobile-navigation-animation-start");
  mobileMenu.classList.add("mobile-navigation-animation-end");
  burgerBtn.classList.remove("d-none");
});
