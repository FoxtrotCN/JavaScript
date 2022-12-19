class Rectangle {
    #area = 0;

    constructor(base = 0, heihgt = 0) {
        this.base = base;
        this.heihgt = heihgt;

        this.#area = base * heihgt;
    }
}

const rectangle = new Rectangle(10, 15);
// rectangle.#area = 200;
console.log(rectangle);