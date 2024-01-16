/// Byter mellan log in och register pages ///
document.querySelector("#frontPage").addEventListener("click", (event) => {
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

/// Övergår till main page /// Måste ändras till submit senare ///
document.querySelector("#logInForm").addEventListener("click", (event) => {
  event.preventDefault();

  const mainPage = document.querySelector("#main");
  const navBar = document.querySelector("#nav");
  const frontPage = document.querySelector("#frontPage");
  const webName = document.querySelector("#webName");

  if (event.target.id == "logInButton") {
    webName.classList.add("hideMobile");
    frontPage.classList.add("hide");
    mainPage.classList.remove("hide");
    navBar.classList.remove("hide");
    console.log("logga in");
  } else if (event.target.id == "registerButton") {
    webName.classList.add("hideMobile");
    frontPage.classList.add("hide");
    mainPage.classList.remove("hide");
    navBar.classList.remove("hide");
    console.log("registrera");
  }
});

/// Funktionaliteten åt navbar länkarna /// Simplifiera den ///
document.querySelector("#nav").addEventListener("click", (event) => {
  event.preventDefault();

  const homePage = document.querySelector("#home");
  const messageBoardPage = document.querySelector("#messageboard");
  const contactPage = document.querySelector("#contact");
  const aboutUsPage = document.querySelector("#aboutUs");
  const mainPage = document.querySelector("#main");
  const navBar = document.querySelector("#nav");
  const frontPage = document.querySelector("#frontPage");
  const webName = document.querySelector("#webName");

  if (event.target.id == "homeNav") {
    messageBoardPage.classList.add("hide");
    aboutUsPage.classList.add("hide");
    contactPage.classList.add("hide");
    homePage.classList.remove("hide");
  } else if (event.target.id == "messageboardNav") {
    homePage.classList.add("hide");
    aboutUsPage.classList.add("hide");
    contactPage.classList.add("hide");
    messageBoardPage.classList.remove("hide");
  } else if (event.target.id == "aboutUsNav") {
    homePage.classList.add("hide");
    messageBoardPage.classList.add("hide");
    contactPage.classList.add("hide");
    aboutUsPage.classList.remove("hide");
  } else if (event.target.id == "contactNav") {
    homePage.classList.add("hide");
    messageBoardPage.classList.add("hide");
    aboutUsPage.classList.add("hide");
    contactPage.classList.remove("hide");
  } else if (event.target.id == "logoutNav") {
    mainPage.classList.add("hide");
    navBar.classList.add("hide");
    webName.classList.remove("hideMobile");
    frontPage.classList.remove("hide");
  }
});
