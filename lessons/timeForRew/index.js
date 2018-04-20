// let time = document.getElementById('setTime');
// time.value = setInterval(function getTime() {
//     let timeMs = new Date();
//     return (timeMs.getTime());
// }, 1);

let time = document.createElement('h1');
time.innerText = setInterval(function getTime() {
    let timeMs = new Date();
    return (timeMs.getTime());
}, 1);
