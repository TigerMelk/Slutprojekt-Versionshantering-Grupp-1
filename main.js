
/// Byter mellan log in och register pages
document.querySelector("#frontPage").addEventListener("click", (event) => {
    event.preventDefault();

    const logIn = document.querySelector("#logIn");
    const createAccount = document.querySelector("#createAccount");

    if(event.target.id == "switchToRegister"){
        logIn.classList.add("hide");
        createAccount.classList.remove("hide");
    }
    else if(event.target.id == "switchToLogIn"){
        createAccount.classList.add("hide");
        logIn.classList.remove("hide");
    };
});

document.querySelector("#frontPage").addEventListener("submit", (event) => {
    event.preventDefault();

    if(event.target.id == "logInButton"){
        console.log("you are logged in");
    }
    else if(event.target.id == "registerButton"){
        console.log("you have registered in");
    };
});