class Person {
    static counting = 0;

    static get _counting() {
        return Person.counting + ' instances';
    }

    static message() {
        console.log('I am a static method')
    }

    name = '';
    code = '';
    phrase = '';
    food = '';

    constructor(name, code, phrase) {
        this.name = name;
        this.code = code;
        this.phrase = phrase;

        Person.counting++;
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

class Hero extends Person {
    clan = '';

    constructor(name, code, phrase, food, clan) {
        super(name, code, phrase, food, clan);
        this.clan = clan;

    }

}
// --------------------------------------------------------------------------------------


const ironMan = new Person('Tony Stark', 'IronMan', 'I am iron man');

const aquaMan = new Hero('AquaMan', 'AquaMan', 'El agua e mi vida', 'Peces', 'los monos de jaragua');
console.log(aquaMan);
aquaMan.myPhrase();

