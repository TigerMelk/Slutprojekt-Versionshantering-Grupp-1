function closeHamburgerMenuInHamburgerMenu() {
  const closeIcon = document.querySelector("#closeIcon");
  const menuIcon = document.querySelector("#menuIcon");
  const menu = document.querySelector(".menu");

  closeIcon.classList.add("hide");
  menuIcon.classList.remove("hide");
  menu.classList.remove("showMenu");
}

export { closeHamburgerMenuInHamburgerMenu };
