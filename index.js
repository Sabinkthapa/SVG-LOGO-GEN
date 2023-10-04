const fs = require("fs");
const inquirer = require("inquirer");

const { Circle, Square, Rectangle } = require("./lib");

class SVG {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }

  render() {
    return `<svg width="250" height="150" xmlns="http://www.w3.org/2000/svg">
        ${this.textElement}
        ${this.shapeElement}
        </svg>`;
  }

  setTextElement(text, color) {
    const fontSize = 40; // change as per requirement
    const x = 80;
    const y = 80;
    this.textElement = `<text x="${x}" y="${y}" font-size="${fontSize}" fill="${color}" text-anchor="middle" alignment-baseline="middle">${text}</text>`;
  }

  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}
const questions = [
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
      svg.setShapeElement(new Circle(90, shapeColor));
      break;
    case "Rectangle":
      svg.setShapeElement(new Rectangle(200, 100, shapeColor));
      break;
    case "Square":
      svg.setShapeElement(new Square(200, shapeColor));
      break;
  }

  fs.writeFile("logo.svg", svg.render(), (err) => {
    if (err) {
      console.log("Error saving logo.svg:", err);
      return;
    }
    console.log("Logo.svg saved successfully");
  });
});
