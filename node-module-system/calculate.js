import add from './add.js';
import subtract from './subtract.js';
import divide from './divide.js';
import multiply from './multiply.js';

const operation = process.argv[3];
const a = Number(process.argv[2]);
const b = Number(process.argv[4]);

switch (operation) {
  case 'plus':
    console.log('result: ', add(a, b));
    break;
  case 'minus':
    console.log('result: ', subtract(a, b));
    break;
  case 'time':
    console.log('result: ', multiply(a, b));
    break;
  case 'over':
    console.log('result: ', divide(a, b));
    break;
  default:
    console.log('Invalid operation.');
}
