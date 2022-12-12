// This is an abbreviation of if else

/*
Labor days We're open at 11.
Weekdens we're open at 9.*/

const day = 0;
const currentHour = 17;

let openTime;
let message; // Esta abierto, Esta cerrado, Hoy abrimos a las XX

// We can do this in two ways, the first one:

/*if (day === 0 || day === 6) {
    console.log('Fin de semana');
    openTime = 9;
    message = `Hoy abrimos a las ${openTime}`;
} else {
    console.log('Dia de semana');
    openTime = 11;
    message = `Abrimos a las ${openTime}`;
    console.log(message);
}*/

/*
if ([0,6].includes(day)) {
    console.log('Fin de semana');
    openTime = 9;
    message = `Hoy abrimos a las ${openTime}`;
}
*/

/*if (currentHour >= 9) {
    message = 'Esta abierto';
    console.log(message)
}*/

// THIS IS THE BEST WAY

openTime = ([0,6].includes(day)) ? 9 : 11;
message = (currentHour >= openTime) ? 'Esta abierto' : 'Esta cerrado';



console.log({openTime, message});

