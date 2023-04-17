const shapes = require('./shapes');

describe('Circle', () => {  
    it('should return svg logo with shapeColor, text and textColor', () => {
        const circle = new shapes.Circle('yellow', 'purple', 'SDP');
        console.log(circle.render());
        expect(circle.render().toString()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="115" r="80" stroke="purple" stroke-width="1" fill="purple"/>
          <text x="150" y="125" font-size="70" text-anchor="middle" fill="yellow">SDP</text>
        </svg>
            `);
    })
});

describe('Triangle', () => {  
    it('should return svg logo with shapeColor, text and textColor', () => {
        const triangle = new shapes.Triangle('white', 'purple', 'SDP');
        expect(triangle.render().toString()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <polygon points="150, 18 244, 182 56, 182" stroke="purple" stroke-width="1"  fill="purple"/>
          <text x="150" y="125" font-size="45" text-anchor="middle" fill="white">SDP</text>
        </svg>
          `);
    })
});

describe('Square', () => {
    it('should return svg logo with shapeColor, text and textColor', () => {
        const square = new shapes.Square('blue', 'red', 'SDP');
        expect(square.render().toString()).toEqual(`
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="73" y="40" width="160" height="160" stroke-width="1"  fill="red"/>
        <text x="150" y="125" font-size="70" text-anchor="middle" fill="blue">SDP</text>
      </svg>
        `);
    })
})