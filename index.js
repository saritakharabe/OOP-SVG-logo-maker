const fs = require("fs");
const inquirer = require("inquirer");
const setShape = require("./lib/selectShape.js");
const colorKeywords = require("./lib/colorList.js");

const questions = [
  {
    type: "list",
    name: "shapes",
    message: "What is your shape of your logo",
    choices: ["Triangle", "Cricle", "Square"],
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
    message: "Enter your selected shape color code choice ",
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
    message: "Enter your choice color keyword",
  },
];

function createLogo(response) {
  const svg = new setShape(response);
  fs.writeFile(
    "./examples/logo.svg",
    JSON.stringify(svg, null, "\t"),
    (error) => {
      error ? console.error(error) : console.log("SVG logo is created");
    }
  );
}

function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      createLogo(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

init();