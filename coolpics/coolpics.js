const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector("nav");

function toggleMenu() {
  navMenu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);
