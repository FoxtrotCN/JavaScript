class Person {
    name = '';
    code = '';
    phrase = '';
    food = '';

    constructor(name, code, phrase) {
        this.name = name;
        this.code = code;
        this.phrase = phrase;
    }

    set setFavoriteFood(food) {
        this.food = food.toUpperCase();
    }

    get getFavoriteFood() {
        return `The ${this.name} favorite food is ${this.food}`;
    }

    whoAmI() {
        console.log(`I am ${this.name} better known as ${this.code}`);
    }

    myPhrase() {
        this.whoAmI();
        console.log(`${this.code} says: ${this.phrase}`);
    }
}

const ironMan = new Person('Tony Stark', 'IronMan', 'I am iron man');
const spiderMan = new Person('Peter Parker', 'SpiderMan', 'I am spider man');

console.log(ironMan);
console.log(spiderMan);

ironMan.myPhrase();
// spiderMan.myPhrase();
ironMan.setFavoriteFood = `Carne de Re'`;
console.log(ironMan);
console.log(ironMan.getFavoriteFood);
