/* exported getWords */

function getWords(string) {
  const newArray = [];

  if (string === '') {
    return newArray;
  } else {
    return string.split(' ');
  }
}
