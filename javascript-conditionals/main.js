/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
const person = {
  name: 'Hannah Hoang',
  age: 28,
};
console.log('person:', person);

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
console.log('isUnderFive(3):', isUnderFive(3));

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log('isEven(7):', isEven(7));

function startswithJ(string) {
  if (string.charAt(0).toUpperCase() === 'J') {
    // (string[0]=== "J")
    return true;
  } else {
    return false;
  }
}
console.log('startsWithJ("Hannah"):', startswithJ('Hannah'));

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
console.log('isOldEnoughToDrink(person):', isOldEnoughToDrink(person));

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
console.log('isOldEnoughToDrive(person):', isOldEnoughToDrive(person));

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 21 && person.age >= 16) {
    return false;
  } else {
    return true;
  }
}
console.log(
  'isOldEnoughToDrinkAndDrive(person):',
  isOldEnoughToDrinkAndDrive(person)
);

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else if (pH < 0 || pH > 14) {
    return 'invalid pH level';
  }
}
console.log('categorizeAcidity(7):', categorizeAcidity(7));

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}
console.log('introduceWarnerBro(minerva):', introduceWarnerBro('minerva'));

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Die Hard';
    case 'comedy':
      return 'Mean Girls';
    case 'horror':
      return 'Insidious';
    case 'drama':
      return 'A Man Called Otto';
    case 'musical':
      return 'Pitch Perfect';
    case 'sci-fi':
      return 'M3GAN';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi.';
  }
}

console.log('recommendMovie(horror):', recommendMovie('horror'));
