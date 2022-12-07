// Code your solutions in this file

function writeCards(arr, eventName) {
    let cardArray = [];
    for(let i = 0; i < arr.length; i++) {
        cardArray.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`);
    }

    return cardArray;
};

writeCards(["Guadalupe", "Ollie", "Aki"], 'birthday');



function countDown(num) {

    while( num >= 0 ) {

        console.log(num);
        num --;
    }
};

countDown(10);