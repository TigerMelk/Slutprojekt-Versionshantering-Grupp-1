/*Tests for fetch*/
// async function getFetch(id) {

// }
// async function postFetch(id) {

// }
// async function putFetch(id) {

// }
// async function patchFetch(id) {

// }
// async function deleteFetch(id) {

// }

const url =
  "https://spychat-a5f8e-default-rtdb.europe-west1.firebasedatabase.app/boys/.json";
fetch(url, {
  method: "POST",
  body: JSON.stringify({
    username: "blahname",
    password: 1338,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

//unfinsished function
function userameAndPassword(name, password) {}
