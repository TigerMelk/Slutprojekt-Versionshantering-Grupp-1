let darkModeBtn = document.querySelector("#darkMode");
darkModeBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (darkModeBtn.innerText === "Darkmode") {
    document.body.classList.add("darkMode");
    darkModeBtn.innerText = "Lightmode";
  } else {
    document.body.classList.remove("darkMode");
    darkModeBtn.innerText = "Darkmode";
  }
})