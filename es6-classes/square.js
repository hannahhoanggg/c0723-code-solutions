/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(width) {
    super(width);
    this.width = width;
    this.area = this.width * this.width;
    this.perimeter = this.width + this.width + this.width + this.width;
  }

  describe() {
    return `The square's area is ${this.area}, the perimeter is ${this.perimeter} and the width is ${this.width}.`;
  }
}

const aSquare = new Square(20);
console.log('value of square describe message:', aSquare.describe());
