import {
  closeHamburgerMenuInHamburgerMenu,
  addClassToElement,
  removeClassToElement,
} from "./modules/interface.js";
import { postMessage, getMessages } from "./test.js";

import {
  getData,
  postData,
  putData,
  patchData,
  deleteData,
} from "./modules/fetch.js";

// globala variabler
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

  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  console.log(username);
  console.log(password);

  addClassToElement([webName], "hideMobile");
  addClassToElement([frontPage], "hide");
  removeClassToElement([mainPage, navBar], "hide");

  loginForm.reset();
}

registerForm.addEventListener("submit", registerHandler);
function registerHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#registerUsername").value;
  const password = document.querySelector("#registerPassword").value;

  console.log(username);
  console.log(password);

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
    let messageInput = document.querySelector("#secretMessageInput").value;
    let messageFieldDiv = document.querySelector("#messageFieldDiv");
    let messageDiv = document.createElement("div");
    let messagePara = document.createElement("p");
    
    const coolSound = new Audio("./sounds/snare-112754.mp3")
    coolSound.play();
    
    messageDiv.classList.add("message");

    messagePara.innerText = messageInput;
    messageDiv.append(messagePara);
    messageFieldDiv.append(messageDiv);
    postMessage();
    messageFieldDiv.scrollTop = messageFieldDiv.scrollHeight;
  });
// function showMessages(){
//   getMessages()
// // }
// getMessages();

console.log(getMessages());
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
