
// const arr = new Array(10);
// console.log(arr);
//
// const array = [];
// console.log(array);

const videoGames = ['Mario 3', 'Megaman', 'Chrono Triger'];
console.log(videoGames);
console.log({ videoGames });

//Accesing an element in the array
console.log(videoGames[1]);

const mixed = [
    true,
    123,
    false,
    'perro',
    'wawawa',
    100 + 12,
    function () {},
    () =>{},
    {a: 1},
    ['X','MegaMan', 'Zero', 'Dr. Light']
];

console.log(mixed);

//Printing an element from other array "ONE WAY"
/*let mixed9 = mixed[9];
console.log(mixed9[3]);*/

//The same from above but shorter:

console.log(mixed[9][3]);