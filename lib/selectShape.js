const Shape = require("./shapes");

class Square extends Shape {
  constructor(svgShape, textColor, shapeColor, text) {
    super(textColor, shapeColor, text);
    this.svgShape = svgShape
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="${this.shapeColor}"/>
          <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>
      `;
  }
}

class Triagle extends Shape {
  constructor(svgShape,textColor, shapeColor, text) {
    super(textColor, shapeColor, text);
    this.svgShape = svgShape
  }

  render() {
    return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg>
          <polygon points="200,10 250,190 160,210" fill="${this.shapeColor}"/>
          <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
         </svg>
        `;
  }
}

class Circle extends Shape {
  constructor(svgShape, textColor, shapeColor, text) {
    super(textColor, shapeColor, text);
    this.svgShape = svgShape
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg>
          <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.shapeColor}"/>
          <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>
          `;
  }
}

function selectShape(response) {
  if (response.shape === "Triangle") {
    let selectedShape = new Triangle(
      response.textColor,
      response.shapeColor,
      response.text
    );
    return selectedShape.render();
  }

  if (response.shape === "Circle") {
    let selectedShape = new Circle(
      response.textColor,
      response.shapeColor,
      response.text
    );
    return selectedShape.render();
  }

  if (response.shape === "Square") {
    let selectedShape = new Square(
      response.textColor,
      response.shapeColor,
      response.text
    );
    return selectedShape.render();
  }
}

module.exports = selectShape;
module.exports = Circle;
module.exports = Square;
module.exports = Triagle;