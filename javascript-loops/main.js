/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;

  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber += 1;
  }
  return numbers;
}
console.log('getNumbersToTen()', getNumbersToTen());

function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;

  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log('getEvenNumbersToTwenty:', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  let count = 1;
  let repeated = '';

  while (count <= times) {
    repeated += word;
    count += 1;
  }
  return repeated;
}
console.log("repeatWord('javascript', 30):", repeatWord('javascript', 30));

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}
console.log('logEachCharacter:', logEachCharacter(''));
console.log('logEachCharacter:', logEachCharacter('Hannah'));
console.log('logEachCharacter:', logEachCharacter('Hi friend'));

function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log('doubleAll([4, 5, 3, 2]', doubleAll([4, 5, 3, 2]));

function getKeys(object) {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

const Hannah = {
  color: 'pink',
  animal: 'cat',
  gender: 'female',
};

console.log('getKeys:', getKeys(Hannah));

function getValues(object) {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}

const cat = {
  color: 'white',
  breed: 'tabby',
};

console.log('getValues:', getValues(cat));
