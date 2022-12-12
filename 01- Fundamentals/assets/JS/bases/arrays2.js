let games = ['Zelda', 'Mario', 'Metroid', 'Call of Duty'];
console.log('largo:', games.length);

// let first = games[0];
// let last = games[games.length - 1];
// console.log({ first, last });

games.forEach((element, index, arr) => {
    console.log(element, index, arr);
});

//Adding elements

games.push('NBA 2K');
console.log('nuevo largo:', games.length);
console.log(games);
games.forEach((element, index, arr) => {
    console.log(element, index, arr);
});

//Adding at the beginning of the array: .unshift('');
games.unshift("FIFA")
console.log('nuevo largo:', games.length)
console.log(games);

//Deleting the last element in the array:
let deletedGame = games.pop();
console.log({ deletedGame, games });
console.log(games);

//Deleting an element at specified index:
let pos = 1;
let gameDeleted = games.splice(pos, 1);
console.log({gameDeleted, gameDeleted});

//Looking for a specific index:
let callOfDutyIndex = games.indexOf('Call of Duty');
console.log({callOfDutyIndex});


