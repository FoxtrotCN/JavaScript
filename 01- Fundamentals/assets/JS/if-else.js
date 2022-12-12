let a = 2

if (a > 1) {
    console.log('a es la grasa');
} else {
    console.log('a le jiede la vida');
}

if (a < 1) {
    console.log('a sigue siendo la grasa');
} else if (a > 1) {
    console.log('a no anda en gente');
}

// Printing the weekdays with objects, without flow control structure:

let day = 5;

const weekDays = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
}

console.log(weekDays[day]);

//The same but with arrays

const weekDaysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let dayArray = 5;

console.log(weekDaysArray[dayArray]);

let dayMethod = new Date();
let today = dayMethod.getDay();
console.log(today);

if (today === 1) {
    console.log('Monday');
}
