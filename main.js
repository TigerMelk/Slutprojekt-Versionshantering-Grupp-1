
/// Byter mellan log in och register pages
document.querySelector("#frontPage").addEventListener("click", (event) => {
    event.preventDefault();

    const logIn = document.querySelector("#logIn");
    const logInButton = document.querySelector("#logInButton");
    const createAccount = document.querySelector("#createAccount");
    const registerButton = document.querySelector("#registerButton");

    if(event.target.id == "switchToRegister"){
        logIn.classList.add("hide");
        logInButton.classList.add("hide");
        createAccount.classList.remove("hide");
        registerButton.classList.remove("hide");
    }
    else if(event.target.id == "switchToLogIn"){
        createAccount.classList.add("hide");
        registerButton.classList.add("hide")
        logIn.classList.remove("hide");
        logInButton.classList.remove("hide");
    };
});

document.querySelector("#frontPage").addEventListener("submit", (event) => {
    event.preventDefault();
});