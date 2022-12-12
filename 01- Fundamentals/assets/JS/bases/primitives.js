//Strings

let name = 'Tony Stark';
console.log(name);

name = "Iron Man";
console.log(name);

name = `Marvel`;
console.log(name);

console.log(typeof (name));

//Number

let a = 123456;
console.log(a);
a = 3.23728929;
console.log(a);

console.log(typeof (a));

//Booleans
let b = true,
    c = false;

console.log(b);
console.log(c);

console.log(typeof (b));
console.log(typeof (c));

//Undefined

let iamUndefined;
console.log(iamUndefined);

//Null

let iamNull = null;
console.log(iamNull);
console.log(typeof iamNull); // --> object

//Symbol
let symbol1 = Symbol('a');
let symbol2  =Symbol('a');
console.log(typeof (symbol1));
console.log(typeof (symbol2));

console.log(symbol1 === symbol2); // -> false

