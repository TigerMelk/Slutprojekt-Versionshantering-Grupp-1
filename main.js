
/// Byter mellan log in och register pages
document.querySelector("#frontPage").addEventListener("click", (event) => {
    event.preventDefault();

    const logIn = document.querySelector("#logIn");
    const createAccount = document.querySelector("#createAccount");

    if(event.target.id == "switchToRegister"){
        logIn.classList.add("hide");
        createAccount.classList.remove("hide");
        console.log("Register Mode");
    }
    else if(event.target.id == "switchToLogIn"){
        createAccount.classList.add("hide");
        logIn.classList.remove("hide");
        console.log("Log In Mode");
    };
});