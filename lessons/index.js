var rand = Math.random() * 10;
console.log(rand);
var coins = Math.round(rand);
console.log(coins);
if(coins %2 === 0) {
    console.log('even');
}
else {
    console.log('odd');
}

switch (coins) {
    case 1:
        console.log('sdfd');
        break;

    default:
    console.log('other');
}
