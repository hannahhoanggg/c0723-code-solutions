/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    super(Math.PI * radius * radius, 2 * Math.PI * radius);
    this.radius = radius;
  }

  describe() {
    return `The circle's radius is ${this.radius}. ${super.describe()}.`;
  }
}

const aRadius = new Circle(4);
console.log('value of circle describe message:', aRadius.describe());
