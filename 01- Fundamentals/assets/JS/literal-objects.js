let character = {
    name: 'Tony Stark',
    codeName: 'IronMan',
    alive: false,
    age: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    armors: ['Mark I', 'Mark V', 'Hulkbuster'],
    address: {
        zip: '10880-90265',
        location: 'Malibu, California'
    }
};
console.log(character)

//Accessing the elements:
console.log('Nombre:', character.name); // or
console.log('Nombre:', character['name']);

//Accessing nested elements
console.log('Coordinates:', character.coords);
console.log('Latitude:', character.coords.lat);

//Practice -> Looking for the armors quantity:
console.log('armors quantity:', character.armors);
console.log('armors quantity:', character.armors.length);

//Last armor
console.log('last armor:', character.armors[character.armors.length - 1]);

//Working in a dynamic way:
const x = 'alive';
console.log('Alive:', character[x]);