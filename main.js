
/// Byter mellan log in och register pages
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
    }
    else if (event.target.id == "switchToLogIn") {
        createAccount.classList.add("hide");
        registerButton.classList.add("hide");
        logIn.classList.remove("hide");
        logInButton.classList.remove("hide");
    };
});

/// Övergår till main page. Måste ändras till submit senare
document.querySelector("#logInForm").addEventListener("click", (event) => {
    event.preventDefault();

    const mainPage = document.querySelector("#main");
    const navBar = document.querySelector("nav");
    const frontPage = document.querySelector("#frontPage");
    
    if (event.target.id == "logInButton") {
        frontPage.classList.add("hide");
        mainPage.classList.remove("hide");
        navBar.classList.remove("hide");
        console.log("logga in");
    }
    else if(event.target.id == "registerButton"){
        frontPage.classList.add("hide");
        mainPage.classList.remove("hide");
        navBar.classList.remove("hide");
        console.log("registrera");
    }
});