﻿const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// ## EVERY
// 1. Does every character have blue eyes?
// 2. Does every character have mass more than 40?
// 3. Is every character shorter than 200?
// 4. Is every character male?

const blueEyes = characters.every((character) => character.eye_color === 'blue');
const mass = characters.every((character) => character.mass > 40);
const height = characters.every((character) => character.height < 200);
const gender = characters.every((character) => character.gender === 'male');

console.log(`1. Does every character have blue eyes? ${blueEyes}`);
console.log(`2. Does every character have mass more than 40? ${mass}`);
console.log(`3. Is every character shorter than 200? ${height}`);
console.log(`4. Is every character male? ${gender}`);
