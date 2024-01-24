import {
  addClassToElement,
  removeClassToElement,
} from "./modules/interface.js";

let darkModeBtn = document.querySelector("#darkMode");
let header = document.querySelector("#header");
darkModeBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (darkModeBtn.innerText === "Darkmode") {
    document.body.classList.add("darkMode");
    addClassToElement([header], "darkHeader");
    darkModeBtn.innerText = "Lightmode";
  } else {
    document.body.classList.remove("darkMode");
    darkModeBtn.innerText = "Darkmode";
  }
});
