const x = 5;
const y = 9;
const z = 3;

const maximumValue = Math.max(x, y, z);
console.log('maximumValue: ', maximumValue);

const heroes = [
  'Captain America',
  'Black Panther',
  'Wonder Woman',
  'Black Widow',
];
const randomNumber = Math.random() * heroes.length;

const randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);

const randomHero = heroes[randomIndex];
console.log('randomHero: ', randomHero);

const library = [
  {
    title: 'IT',
    author: 'Stephen King',
  },
  {
    title: 'Harry Potter and the Deathly Hallows',
    author: 'J.K. Rowling',
  },
  {
    title: 'Carrie',
    author: 'Stephen King',
  },
];

const lastBook = library.pop();
console.log('lastBook: ', lastBook);

const firstBook = library.shift();
console.log('firstBook: ', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library: ', library);

const fullName = 'Hannah' + ' ' + 'Hoang';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);
