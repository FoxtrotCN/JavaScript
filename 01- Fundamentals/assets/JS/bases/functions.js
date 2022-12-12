//
// //One way
// function greet() {
//     console.log('Hola Mundo');
// }
//
// //With arguments
// function greet2(name) {
//     console.log('Hola ' + name);
// }
//
// //Other way
// // const greet3 = function () {
// //     console.log('Hola Mundo');
// // }
//
// // Arrow Function (Most of the time, USE THIS ) const functionName = () => {}
// const greetArrow = () => {
//     console.log('Hello World!');
// }
// const greetArrow2 = (name) => {
//     console.log('Hello '+ name + '!');
// }
//
//
// greet();
// greet2('Pedro escamoso');
// greetArrow();
// greetArrow2('simon');


// A function always return a value:
function greet3(name) {
    return 'Hello ' + name;
}

console.log(greet3('manolito'));

//In an arrow way:
/*const greetArrow2 = (name) => {
    return 'Hello ' + name;
}

console.log(greetArrow2('Juanito'));*/

// When you have a simple return in an arrow function, you can just do in this way:
const greetArrow2 = (num1, num2) => num1 + num2;
console.log(greetArrow2(2, 6));

// TASK:
// A function that return a random number:
function getRandom () {
    return Math.random();
}
console.log(getRandom()); // Set it to an Arrow Function without curly brackets:

// ------------------------------------------------------

const getRandomArrow = () => Math.random();
console.log(getRandomArrow());


