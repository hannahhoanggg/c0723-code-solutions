/* exported isVowel */

function isVowel(char) {
  char = char.charAt(0);

  switch (char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
      return true;
    default:
      return false;
  }
}
