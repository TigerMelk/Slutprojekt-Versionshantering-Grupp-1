/*Tests for fetchs */
const url = 'https://helloworld-9d8f2-default-rtdb.europe-west1.firebasedatabase.app/';
fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })