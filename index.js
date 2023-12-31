//imported node js module for file system and interactive command line prompts
const fs = require("fs");
const inquirer = require("inquirer");

const { Circle, Square, Rectangle } = require("./lib");

class SVG {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }

  render() {
    return `<svg width="200" height="170" xmlns="http://www.w3.org/2000/svg">
        ${this.shapeElement}
        ${this.textElement}
      
        </svg>`;
  }

  setTextElement(text, color) {
    const fontSize = 40; // change as per requirement
    const x = 110;
    const y = 110;
    this.textElement = `<text x="${x}" y="${y}" font-size="${fontSize}" fill="${color}" text-anchor="middle" alignment-baseline="middle">${text}</text>`;
  }

  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}
const questions = [ // array of questions to answer using inquirer module
  {
    type: "input",
    name: "text",
    message: "Enter upto 3 characters:",
    validate: (input) =>
      input.length <= 3 || "Text should be max 3 characters!",
  },

  {
    type: "input",
    name: "textColor",
    message: "Enter text color or hexadecimal number:",
  },

  {
    type: "list",
    name: "shapeType",
    message: "Enter shape type:",
    choices: ["Circle", "Rectangle", "Square"],
  },

  {
    type: "input",
    name: "shapeColor",
    message: "Enter shape color or hexadecimal number:",
  },
];

inquirer.prompt(questions).then((answers) => {
  const { text, textColor, shapeType, shapeColor } = answers; 
  const svg = new SVG();
  svg.setTextElement(text, textColor);

  switch (shapeType) {
    case "Circle":
      svg.setShapeElement(new Circle(50, shapeColor));
      break;
    case "Rectangle":
      svg.setShapeElement(new Rectangle(150, 50, shapeColor));
      break;
    case "Square":
      svg.setShapeElement(new Square(100, shapeColor));
      break;
  }
//fs.writeFile method to write the file
  fs.writeFile("logo.svg", svg.render(), (err) => {
    if (err) {
      console.log("Error saving logo.svg:", err);
      return;
    }
    console.log("Logo.svg saved successfully");
  });
});
