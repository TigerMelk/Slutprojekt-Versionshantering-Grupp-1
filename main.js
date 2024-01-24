import {
  closeHamburgerMenuInHamburgerMenu,
  addClassToElement,
  removeClassToElement,
} from "./modules/interface.js";

import {
  loginChecker,
  register,
  postMessage,
  getMessages,
} from "./modules/fetch.js";

const messageFieldDiv = document.querySelector("#messageFieldDiv");
const loginForm = document.querySelector("#logInForm");
const registerForm = document.querySelector("#registerForm");
const loginSwitch = document.querySelector("#switchToLogIn");
const registerSwitch = document.querySelector("#switchToRegister");
const logIn = document.querySelector("#logIn");
const createAccount = document.querySelector("#createAccount");
const mainPage = document.querySelector("#main");
const navBar = document.querySelector("#nav");
const frontPage = document.querySelector("#frontPage");
const webName = document.querySelector("#webName");
const homePage = document.querySelector("#home");
const messageboardPage = document.querySelector("#messageboard");
const contactPage = document.querySelector("#contact");
const aboutUsPage = document.querySelector("#aboutUs");
const closeIcon = document.querySelector("#closeIcon");
const menuIcon = document.querySelector("#menuIcon");
const menu = document.querySelector(".menu");
const contactForm = document.querySelector("#contactForm");
const footer = document.querySelector("#footer");
const secretForm = document.querySelector("#secretForm");

// Byter mellan log in och register pages
registerSwitch.addEventListener("click", registerSwitcher);
loginSwitch.addEventListener("click", loginSwitcher);
function registerSwitcher(event) {
  event.preventDefault();
  addClassToElement([logIn, loginForm], "hide");
  removeClassToElement([createAccount, registerForm], "hide");
}
function loginSwitcher(event) {
  event.preventDefault();
  addClassToElement([createAccount, registerForm], "hide");
  removeClassToElement([logIn, loginForm], "hide");
}

// Submit för login och register form
loginForm.addEventListener("submit", loginHandler);
function loginHandler(event) {
  event.preventDefault();
  loginChecker();
  loginForm.reset();
}

registerForm.addEventListener("submit", registerHandler);
function registerHandler(event) {
  event.preventDefault();

  const username = document
    .querySelector("#registerUsername")
    .value.toLowerCase();
  const password = document.querySelector("#registerPassword").value;

  register(username, password);

  addClassToElement([webName], "hideMobile");
  addClassToElement([frontPage], "hide");
  removeClassToElement([mainPage, navBar], "hide");

  registerForm.reset();
}
// Funktionaliteten åt navbar länkarna
document.querySelectorAll("#nav a").forEach((menuLink) => {
  menuLink.addEventListener("click", (event) => {
    event.preventDefault();

    addClassToElement(
      [homePage, messageboardPage, aboutUsPage, contactPage],
      "hide"
    );

    switch (event.currentTarget.id) {
      case "homeNav":
        removeClassToElement([homePage], "hide");
        removeClassToElement([footer], "footerPosition");
        closeHamburgerMenuInHamburgerMenu();
        break;
      case "messageboardNav":
        addClassToElement([footer], "footerPosition");
        removeClassToElement([messageboardPage], "hide");
        closeHamburgerMenuInHamburgerMenu();
        getMessages().then(displayMessage);
        break;
      case "aboutUsNav":
        addClassToElement([footer], "footerPosition");
        removeClassToElement([aboutUsPage], "hide");
        closeHamburgerMenuInHamburgerMenu();
        break;
      case "contactNav":
        removeClassToElement([contactPage], "hide");
        removeClassToElement([footer], "footerPosition");
        closeHamburgerMenuInHamburgerMenu();
        break;
      case "logoutNav":
        addClassToElement(
          [mainPage, registerForm, createAccount, navBar],
          "hide"
        );
        removeClassToElement([homePage, frontPage, loginForm, logIn], "hide");
        removeClassToElement([webName], "hideMobile");
        removeClassToElement([footer], "footerPosition");
        closeHamburgerMenuInHamburgerMenu();
        break;
    }
  });
});

//Send message
document
  .querySelector("#sendMessageButton")
  .addEventListener("click", (event) => {
    event.preventDefault();
    messageFieldDiv.innerHTML = "";
    let messageInput = document.querySelector("#secretMessageInput").value;

    const coolSound = new Audio("./sounds/snare-112754.mp3");
    coolSound.play();

    // Ton grupp 3 feature start//
    postMessage(messageInput).then(getMessages).then(displayMessage);
    // Ton grupp 3 feature end//
    secretForm.reset();
  });

// Ton grupp 3 feature start//
function displayMessage(message) {
  console.log(message);
  messageFieldDiv.innerHTML = "";
  for (const key in message) {
    console.log(message[key].text);
    let messageDiv = document.createElement("div");
    let messagePara = (document.createElement("p").innerText =
      message[key].text);
    let messageUserName = (document.createElement("p").innerText = "username");

    addClassToElement([messageDiv], "message");
    messageDiv.append(messagePara);
    messageFieldDiv.append(messageUserName, messageDiv);
    messageFieldDiv.scrollTop = messageFieldDiv.scrollHeight;
  }
}
// Ton grupp 3 feature end//

// Hamburgermenu
document.querySelector(".hamburgerMenu").addEventListener("click", (event) => {
  event.preventDefault();

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

// Contact funktion
document.querySelector("#contactButton").addEventListener("click", (event) => {
  event.preventDefault();
  contactForm.reset();
});
