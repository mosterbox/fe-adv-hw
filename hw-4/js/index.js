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
    // let keyboard = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
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
