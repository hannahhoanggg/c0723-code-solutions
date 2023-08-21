/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(width) {
    super(width * width, 4 * width);
    this.width = width;
  }

  describe() {
    return `The square's width is ${this.width}. ${super.describe()}`;
  }
}

const aSquare = new Square(20);
console.log('value of square describe message:', aSquare.describe());
