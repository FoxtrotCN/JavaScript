class Person {
    name;
    code;
    phrase;
    constructor(name, code, phrase) {
        this.name = name;
        this.code = code;
        this.phrase = phrase;
    }
}

const ironMan = new Person('Tony Stark', 'IronMan', 'I am iron man' );
const spiderMan = new Person('Peter Parker', 'SpiderMan', 'I am spider man' );

console.log(ironMan);
console.log(spiderMan);
