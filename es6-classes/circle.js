/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    super(radius);
    this.radius = radius;
    this.area = 3.1415926535 * (this.radius * this.radius);
    this.perimeter = 2 * 3.1415926535 * this.radius;
  }

  describe() {
    return `The circle's radius is ${this.radius}, the area is ${this.area}, and the perimeter is ${this.perimeter}.`;
  }
}

const aRadius = new Circle(4);
console.log('value of circle describe message:', aRadius.describe());
