/* exported Shape */

class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `The shape's area is ${this.area} and the perimeter is ${this.perimeter}.`;
  }
}

const aShape = new Shape(5, 10);
console.log('value of shape describe message:', aShape.describe());
