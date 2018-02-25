// const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
// let keyboard = [
//     [],
//     [],
//     []
// ];
// let arr = alphabet.split("");
//
// for (let i = 0; i < arr.length; i++) {
//     if (i < 12) {
//         keyboard[0].push(arr[i]);
//     } else if (i > 11 && i < 23) {
//         keyboard[1].push(arr[i]);
//     } else {
//         keyboard[2].push(arr[i]);
//     }
// }
//
//
// let firstWord = keyboard[1][5] + keyboard[0][2] + keyboard[1][8] + keyboard[1][8] + keyboard[0][8]; //hello
// let secondWord = keyboard[1][6] + keyboard[1][0] + keyboard[2][3] + keyboard[1][0] + keyboard[1][1] + keyboard[2][2] + keyboard[0][3] + keyboard[0][7] + keyboard[0][9] + keyboard[0][4]; //javascript
// let thirdWord = keyboard[0][4] + keyboard[0][3] + keyboard[1][0] + keyboard[0][7] + keyboard[2][5] + keyboard[0][2] + keyboard[0][3]; //trainer
//
// console.log(firstWord);
//

function addKeyboardLayout(alphabet) {
    let keyboard = [
        [],
        [],
        []
    ];
    let arr = alphabet.split("");

    for (let i = 0; i < arr.length; i++) {
        if (i < 10) {
            keyboard[0].push(arr[i]);
        } else if (i > 9 && i < 19) {
            keyboard[1].push(arr[i]);
        } else {
            keyboard[2].push(arr[i]);
        }
    }
    return keyboard;
}

function getRandCharInRow(row) {
    let keyboard = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    let str = keyboard[row - 1];
    let rand = Math.floor(Math.random() * str.length);
    return str[rand];
}

getRandCharInAlph = () =>{
    let alphabet = 'qwertyuiopasdfghjklzxcvbnm';
    let spt = alphabet.split('');
    let rand = Math.floor( Math.random() * spt.length )

    return spt[rand];
}

console.log(addKeyboardLayout("qwertyuiopasdfghjklzxcvbnm"));
console.log(getRandCharInRow(1));
console.log(getRandCharInRow(2));
console.log(getRandCharInRow(3));
console.log(getRandCharInAlph());
