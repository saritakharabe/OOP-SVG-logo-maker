const fs = require("fs");
const inquirer = require("inquirer");
const selectShape = require("./lib/selectShape.js");

const questions = [
  {
    type: "list",
    name: "shape",
    message: "What is your shape of your logo",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    type: "list",
    name: "choiceShapeColor",
    message: "Select your shape color type",
    choices: ["color keyword", "hexadecimal"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter your selected shape color",
  },

  {
    name: "text",
    message: "What is the text? (maximum three character)",
    type: "input",
    validate: (answer) => {
      if (answer.length > 3) {
        return console.log(
          "\n Text should be maximum three characters! Please try again"
        );
      }
      return true;
    },
  },
  {
    type: "list",
    name: "textColor",
    message: "Enter your text color choice",
    choices: ["color keyword", "hexadecimal"],
  },
  {
    type: "input",
    name: "choiceTextColor",
    message: "Enter your text color",
  },
];

function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      const svg =  selectShape(response);
      console.log(svg);
      fs.writeFile('./examples/logo.svg', svg, (error) =>{
          error ? console.error(error) : console.log('SVG logo is created');
      } )
    })
  
}

init();