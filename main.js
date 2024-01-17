import { closeHamburgerMenuInHamburgerMenu } from "./modules/interface.js";

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
      logIn.classList.add("hide");
      logInButton.classList.add("hide");
      createAccount.classList.remove("hide");
      registerButton.classList.remove("hide");
    } else if (event.target.id == "switchToLogIn") {
      createAccount.classList.add("hide");
      registerButton.classList.add("hide");
      logIn.classList.remove("hide");
      logInButton.classList.remove("hide");
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
    webName.classList.add("hideMobile");
    frontPage.classList.add("hide");
    mainPage.classList.remove("hide");
    navBar.classList.remove("hide");
  } else if (activeElement.id == "registerButton") {
    const logIn = document.querySelector("#logIn");
    const logInButton = document.querySelector("#logInButton");
    const createAccount = document.querySelector("#createAccount");
    const registerButton = document.querySelector("#registerButton");

    createAccount.classList.add("hide");
    registerButton.classList.add("hide");
    logIn.classList.remove("hide");
    logInButton.classList.remove("hide");
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

    homePage.classList.add("hide");
    messageboardPage.classList.add("hide");
    contactPage.classList.add("hide");
    aboutUsPage.classList.add("hide");

    switch (event.currentTarget.id) {
      case "homeNav":
        homePage.classList.remove("hide");
        closeHamburgerMenuInHamburgerMenu();
        break;
      case "messageboardNav":
        messageboardPage.classList.remove("hide");
        closeHamburgerMenuInHamburgerMenu();
        break;
      case "aboutUsNav":
        contactPage.classList.remove("hide");
        closeHamburgerMenuInHamburgerMenu();
        break;
      case "contactNav":
        aboutUsPage.classList.remove("hide");
        closeHamburgerMenuInHamburgerMenu();
        break;
      case "logoutNav":
        homePage.classList.remove("hide");
        mainPage.classList.add("hide");
        navBar.classList.add("hide");
        frontPage.classList.remove("hide");
        webName.classList.remove("hideMobile");
        closeHamburgerMenuInHamburgerMenu();
        break;
    }
  });
});

// Hamburgermenu
document.querySelector(".hamburgerMenu").addEventListener("click", (event) => {
  event.preventDefault();

  const menu = document.querySelector(".menu");
  const closeIcon = document.querySelector("#closeIcon");
  const menuIcon = document.querySelector("#menuIcon");

  if (event.target.id == "menuIcon") {
    menu.classList.add("showMenu");
    menuIcon.classList.add("hide");
    closeIcon.classList.remove("hide");
  } else if (event.target.id == "closeIcon") {
    closeIcon.classList.add("hide");
    menuIcon.classList.remove("hide");
    menu.classList.remove("showMenu");
  }
});
