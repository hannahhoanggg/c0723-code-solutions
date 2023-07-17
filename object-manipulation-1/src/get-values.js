/* exported getValues */

function getValues(object) {
  const newArray = [];

  for (const value in object) {
    newArray.push(object[value]);
  }
  return newArray;
}
