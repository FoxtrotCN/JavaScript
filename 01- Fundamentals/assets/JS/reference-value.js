let juana = 'Juana';
let pedro = juana;

console.log({juana, pedro});

pedro = 'pedro';
console.log({juana, pedro});

// let maria = {name: 'Maria'};
// let ana  = maria;
// console.log({maria, ana});
//
// ana.name = 'Ana';
// console.log({maria, ana});

const changeName = (person) => {
    person.name = 'Tony';
    return person;
}

let peter = {name: 'Peter'};
let tony = changeName(peter);
console.log({peter, tony});

// Solve this problem working with spread operator < ... >
let maria = {name: 'Maria'};
let ana  = {...maria};
ana.name = 'Ana';
console.log({maria, ana});

//With Arrays

/*const fruits = ['apple', 'banana', 'kiwi'];
const otherFruits = fruits;

console.table({fruits, otherFruits});

otherFruits.push('passion fruit');
console.table({fruits, otherFruits});*/

const fruits = ['apple', 'banana', 'kiwi'];
const otherFruits = [...fruits];

console.table({fruits, otherFruits});

otherFruits.push('passion fruit');
console.table({fruits, otherFruits});

fruits.push('mango', 'blueberrys');
console.table({fruits, otherFruits});

fruits.splice(2, 1);
console.table({fruits, otherFruits});