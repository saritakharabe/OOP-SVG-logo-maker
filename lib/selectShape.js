const Shape = require("./shapes.js");


function selectShape(response) {
  if (response.shape === "Triangle") {
    var selectedShape = new Shape.Triangle(
      response.textColor,
      response.shapeColor,
      response.text
    );
    return selectedShape.render();
  }

  if (response.shape === "Circle") {
    var selectedShape = new Shape.Circle(
      response.textColor,
      response.shapeColor,
      response.text
    );
    return selectedShape.render();
  }

  if (response.shape === "Square") {
    var selectedShape = new Shape.Square(
      response.textColor,
      response.shapeColor,
      response.text
    );
    return selectedShape.render();
  }
}

module.exports = selectShape;