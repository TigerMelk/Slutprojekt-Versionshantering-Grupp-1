/*Tests for fetch*/
import { addClassToElement } from "./interface.js";
import { removeClassToElement } from "./interface.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getDatabase,
    ref,
    set,
    onValue,
    remove,
    push,
    onChildAdded,
    onChildRemoved,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const mainPage = document.querySelector("#main");
const navBar = document.querySelector("#nav");
const frontPage = document.querySelector("#frontPage");
const webName = document.querySelector("#webName");

const firebaseConfig = {
    apiKey: "AIzaSyCf1AUREbV5BzyIb7_5nrj4fjFxcFL8jM8",

    authDomain: "spychat-a5f8e.firebaseapp.com",

    databaseURL:
        "https://spychat-a5f8e-default-rtdb.europe-west1.firebasedatabase.app",

    projectId: "spychat-a5f8e",

    storageBucket: "spychat-a5f8e.appspot.com",

    messagingSenderId: "644385877729",

    appId: "1:644385877729:web:eeab1dc8e5763371a511a0",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const BASE_URL =
    "https://spychat-a5f8e-default-rtdb.europe-west1.firebasedatabase.app/users/.json";

////////////////////////////////////////////////////////
////////////////////////GET DATA/ checka vad som finns inuti BASE_URL\\\\\\\\\\\\\\\\\\\\\
////////////////////////////////////////////////////////
export async function getData() {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    let response = await fetch(BASE_URL);
    let data = await response.json();
    // for (const userId in data) {
    //     const userName = data[userId].username;
    //     const userPass = data[userId].password;
    //     console.log("LOGIN; ", userId, userName, userPass);
    //     if (username === userName && password === userPass) {
    //         addClassToElement([webName], "hideMobile");
    //         addClassToElement([frontPage], "hide");
    //         removeClassToElement([mainPage, navBar], "hide");
    //     }
    //     else {
    //         alert('wrong user name or password')
    //     }
    // }
    let userName;
    let userPass;
    for (const userId in data) {
        userName = data[userId].username;
        userPass = data[userId].password;

        console.log("LOGIN; ", data[userId], userName, userPass);
    }
    if (username === userName && password === userPass) {
        addClassToElement([webName], "hideMobile");
        addClassToElement([frontPage], "hide");
        removeClassToElement([mainPage, navBar], "hide");
    }
    else {
        alert('wrong user name or password')
    }
}
////////////////////////////////////////////////////////
////////////////////////registrera\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////////////////////////////////////
export async function register(username, password) {
    let loginInfo = { username, password };

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginInfo),
    };

    let response = await fetch(BASE_URL, requestOptions);
    let data = await response.json();
    console.log(data);
}
////////////////////////////////////////////////////////
////////////////////////PUT DATA/ vet inte om vi behöver den TBH\\\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////////////////////////////////////
export async function putData() {
    let messageObject = { text: "Hello world put", time: new Date() };

    const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(messageObject),
    };

    let response = await fetch(BASE_URL, requestOptions);
    let data = await response.json();
    console.log(data);
}
////////////////////////////////////////////////////////
////////////////////////PATCH DATA/ uppdatera saker\\\\\\\\\\\\\\\\\\\\\
////////////////////////////////////////////////////////
export async function patchData(property) {
    const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(messageObject),
    };

    let response = await fetch(BASE_URL, requestOptions);
    let data = await response.json();
    console.log(data);
}

////////////////////////////////////////////////////////
////////////////////////Delete DATA\\\\\\\\\\\\\\\\\\\\\
////////////////////////////////////////////////////////
export async function deleteData() {
    const requestOptions = {
        method: "DELETE",
    };
    let response = await fetch(BASE_URL, requestOptions);
    let data = await response.json();
    console.log(data);
}

////////////////////////////////////////////////////////
////////////////////////Post message\\\\\\\\\\\\\\\\\\\\\
////////////////////////////////////////////////////////

export async function postMessage() {
    let message = document.querySelector("#secretMessageInput").value;
    let messageObject = { text: message, time: new Date() };

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(messageObject),
    };

    let response = await fetch(BASE_URL, requestOptions);
    let data = await response.json();
    console.log(data);
}


////////////////////////////////////////////////////////
////////////////////////Get message\\\\\\\\\\\\\\\\\\\\\
////////////////////////////////////////////////////////

export async function getMessages() {
    let response = await fetch(BASE_URL);
    let data = await response.json();
    console.log(data);
    return data;
}