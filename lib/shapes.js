class Shapes {
    constructor(textColor, shapeColor, text){
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.text = text;
    }
}

class Square extends Shapes {
  constructor(textColor, shapeColor, text) {
    super(textColor, shapeColor, text);
  }

  render() {
    return `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="73" y="40" width="160" height="160" stroke-width="1"  fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>
        `;
  }
}
  
  class Triangle extends Shapes {
    constructor(textColor, shapeColor, text) {
      super(textColor, shapeColor, text);
    }
  
    render() {
      return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <polygon points="150, 18 244, 182 56, 182" stroke="${this.shapeColor}" stroke-width="1"  fill="${this.shapeColor}"/>
          <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
          `;
    }
  }
  
  class Circle extends Shapes {
    constructor(textColor, shapeColor, text) {
      super(textColor, shapeColor, text);
    }
  
    render() {
      return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="115" r="80" stroke="${this.shapeColor}" stroke-width="1" fill="${this.shapeColor}"/>
          <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
            `;
    }
  }
module.exports = { Shapes, Circle, Triangle, Square }