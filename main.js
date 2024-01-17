import {
  closeHamburgerMenuInHamburgerMenu,
  addClassToElement,
  removeClassToElement,
} from "./modules/interface.js";

/// Byter mellan log in och register pages /// Simplifiera den ///
document
  .querySelector("#switchFrontPage")
  .addEventListener("click", (event) => {
    event.preventDefault();

    const logIn = document.querySelector("#logIn");
    const logInButton = document.querySelector("#logInButton");
    const createAccount = document.querySelector("#createAccount");
    const registerButton = document.querySelector("#registerButton");

    if (event.target.id == "switchToRegister") {
      addClassToElement([logIn, logInButton], "hide");
      removeClassToElement([createAccount, registerButton], "hide");
    } else if (event.target.id == "switchToLogIn") {
      addClassToElement([createAccount, registerButton], "hide");
      removeClassToElement([logIn, logInButton], "hide");
    }
  });

/// Övergår till main page /// Simplifiera den ///
document.querySelector("#logInForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const loginForm = document.querySelector("#logInForm");
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  console.log(username);
  console.log(password);

  const mainPage = document.querySelector("#main");
  const navBar = document.querySelector("#nav");
  const frontPage = document.querySelector("#frontPage");
  const webName = document.querySelector("#webName");
  const activeElement = document.activeElement;

  if (activeElement.id == "logInButton") {
    addClassToElement([webName], "hideMobile");
    addClassToElement([frontPage], "hide");
    removeClassToElement([mainPage, navBar], "hide");
  } else if (activeElement.id == "registerButton") {
    const logIn = document.querySelector("#logIn");
    const logInButton = document.querySelector("#logInButton");
    const createAccount = document.querySelector("#createAccount");
    const registerButton = document.querySelector("#registerButton");

    addClassToElement([createAccount, registerButton], "hide");
    removeClassToElement([logIn, logInButton], "hide");
  }
  loginForm.reset();
});

/// Funktionaliteten åt navbar länkarna
document.querySelectorAll("#nav a").forEach((menuLink) => {
  menuLink.addEventListener("click", (event) => {
    event.preventDefault();

    const homePage = document.querySelector("#home");
    const messageboardPage = document.querySelector("#messageboard");
    const contactPage = document.querySelector("#contact");
    const aboutUsPage = document.querySelector("#aboutUs");
    const mainPage = document.querySelector("#main");
    const navBar = document.querySelector("#nav");
    const frontPage = document.querySelector("#frontPage");
    const webName = document.querySelector("#webName");

    addClassToElement(
      [homePage, messageboardPage, aboutUsPage, contactPage],
      "hide"
    );

    switch (event.currentTarget.id) {
      case "homeNav":
        removeClassToElement([homePage], "hide");
        closeHamburgerMenuInHamburgerMenu();
        break;
      case "messageboardNav":
        removeClassToElement([messageboardPage], "hide");
        closeHamburgerMenuInHamburgerMenu();
        break;
      case "aboutUsNav":
        removeClassToElement([aboutUsPage], "hide");
        closeHamburgerMenuInHamburgerMenu();
        break;
      case "contactNav":
        removeClassToElement([contactPage], "hide");
        closeHamburgerMenuInHamburgerMenu();
        break;
      case "logoutNav":
        addClassToElement([mainPage, navBar], "hide");
        removeClassToElement([homePage, frontPage], "hide");
        removeClassToElement([webName], "hideMobile");
        closeHamburgerMenuInHamburgerMenu();
        break;
    }
  });
});

/// Hamburgermenu
document.querySelector(".hamburgerMenu").addEventListener("click", (event) => {
  event.preventDefault();

  const menu = document.querySelector(".menu");
  const closeIcon = document.querySelector("#closeIcon");
  const menuIcon = document.querySelector("#menuIcon");

  if (event.target.id == "menuIcon") {
    addClassToElement([menu], "showMenu");
    addClassToElement([menuIcon], "hide");
    removeClassToElement([closeIcon], "hide");
  } else if (event.target.id == "closeIcon") {
    addClassToElement([closeIcon], "hide");
    removeClassToElement([menuIcon], "hide");
    removeClassToElement([menu], "showMenu");
  }
});
