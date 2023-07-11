function convertMinutesToSeconds(minutes) {
  const result = minutes * 60;
  return result;
}
const convertMinutesToSecondsResult = convertMinutesToSeconds(6);
console.log('convertMinutesToSecondsResult: ', convertMinutesToSecondsResult);

function greet(name) {
  const result = 'Hey' + ', ' + name;
  return result;
}
const greetResult = greet('Hannah');
console.log('greetResult: ', greetResult);

function getArea(width, height) {
  const result = width * height;
  return result;
}
const getAreaResult = getArea(22, 3);
console.log('getAreaResult: ', getAreaResult);

function getFirstName(person) {
  const result = person.firstName;
  return result;
}
const getFirstNameResult = getFirstName({
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
});
console.log('getFirstNameResult: ', getFirstNameResult);

function getLastElement(array) {
  const result = array[array.length - 1];
  return result;
}
const getLastElementResult = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories',
]);
console.log('getLastElementResult: ', getLastElementResult);
