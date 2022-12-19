class Person {
    name;
    code;
    phrase;

    constructor(name, code, phrase) {
        this.name = name;
        this.code = code;
        this.phrase = phrase;
    }

    whoAmI() {
        console.log(`I am ${this.name} better known as ${this.code}`);
    }

    myPhrase() {
        this.whoAmI();
        console.log(`${this.code} says: ${this.phrase}`);
    }
}

const ironMan = new Person('Tony Stark', 'IronMan', 'I am iron man' );
const spiderMan = new Person('Peter Parker', 'SpiderMan', 'I am spider man' );

console.log(ironMan);
console.log(spiderMan);

ironMan.myPhrase();
spiderMan.myPhrase();