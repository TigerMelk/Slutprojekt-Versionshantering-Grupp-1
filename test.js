// /*Tests for fetch*/
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import {
//   getDatabase,
//   ref,
//   set,
//   onValue,
//   remove,
//   push,
//   onChildAdded,
//   onChildRemoved,
// } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js"; // <---

// const firebaseConfig = {
//   apiKey: "AIzaSyCf1AUREbV5BzyIb7_5nrj4fjFxcFL8jM8",

//   authDomain: "spychat-a5f8e.firebaseapp.com",

//   databaseURL:
//     "https://spychat-a5f8e-default-rtdb.europe-west1.firebasedatabase.app",

//   projectId: "spychat-a5f8e",

//   storageBucket: "spychat-a5f8e.appspot.com",

//   messagingSenderId: "644385877729",

//   appId: "1:644385877729:web:eeab1dc8e5763371a511a0",
// };

// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);
// const BASE_URL =
//   "https://spychat-a5f8e-default-rtdb.europe-west1.firebasedatabase.app/.json";

//////////////////////////////////////////////////////////////////
/*Tests for fetch*/
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
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js"; // <---

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
  "https://testproject-93749-default-rtdb.europe-west1.firebasedatabase.app/messages.json";

async function postMessage() {
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

async function getMessages() {
  let response = await fetch(BASE_URL);
  let data = await response.json();
  console.log(data);
  return data;
}

// async function getData() {
//   let response = await fetch(BASE_URL);
//   let data = await response.json();
//   console.log(data);
// }
// getData();
// async function postData() {
//   let messageObject = { text: "Hello world", time: new Date() };

//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(messageObject),
//   };

//   let response = await fetch(BASE_URL, requestOptions);
//   let data = await response.json();
//   console.log(data);
// }
// async function putData() {
//   let messageObject = { text: "Hello world put", time: new Date() };

//   const requestOptions = {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(messageObject),
//   };

//   let response = await fetch(BASE_URL, requestOptions);
//   let data = await response.json();
//   console.log(data);
// }
// putData();
// async function patchData() {
//   let messageObject = { firstName: "Alrik", lastName: "HE" };

//   const requestOptions = {
//     method: "PATCH",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(messageObject),
//   };

//   let response = await fetch("https://demo1-3c759-default-rtdb.europe-west1.firebasedatabase.app/-NoCf2s5SInOIFR3X0VX/.json", requestOptions);
//   let data = await response.json();
//   console.log(data);

// }
// async function deleteData() {
//   const requestOptions = {
//     method: "DELETE",
//   };
//   let response = await fetch(BASE_URL, requestOptions);
//   let data = await response.json();
//   console.log(data);
// }
