const hamburgerMenu = document.querySelector(".icons__hamburger");
const navigationMenu = document.querySelector(".navigation__menu");

function onHamburgerMenuClick(event) {
  navigationMenu.classList.toggle("display--hidden");
}

hamburgerMenu.addEventListener("click", onHamburgerMenuClick);
