
//One way
function greet() {
    console.log('Hola Mundo');
}

//With arguments
function greet2(name) {
    console.log('Hola ' + name);
}

//Other way
// const greet3 = function () {
//     console.log('Hola Mundo');
// }

// Arrow Function (Most of the time, USE THIS ) const functionName = () => {}
const greetArrow = () => {
    console.log('Hello World!');
}
const greetArrow2 = (name) => {
    console.log('Hello '+ name + '!');
}


greet();
greet2('Pedro escamoso');
greetArrow();
greetArrow2('simon');
