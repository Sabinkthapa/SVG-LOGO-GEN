const Shape = require("../lib/shape");
const Circle = require("../lib/circle");
const Rectangle = require("../lib/rectangle");
const Square = require("../lib/square");

describe("Shape", () => {
  test("should have a name property", () => {
    const shape = new Shape("shapeName");
    expect(shape.name).toEqual("shapeName");
  });

  describe("Circle", () => {
    describe("Circle", () => {
      test("should have a name property", () => {
        const circle = new Circle(2, "red");
        expect(circle.name).toEqual("circle");
      });

      test("should have a radius property", () => {
        const circle = new Circle(2, "red");
        expect(circle.radius).toEqual(2);
      });

      test("should have a color property", () => {
        const circle = new Circle(2, "red");
        expect(circle.color).toEqual("red");
      });

      test("should calculate the area correctly", () => {
        const circle = new Circle(2, "red");
        expect(circle.area()).toBeCloseTo(12.566370614359172);
      });
      const Rectangle = require("../lib/rectangle");

      describe("Rectangle", () => {
        test("should have a name property", () => {
          const rectangle = new Rectangle(2, 3, "blue");
          expect(rectangle.name).toEqual("rectangle");
        });

        test("should have a width property", () => {
          const rectangle = new Rectangle(2, 3, "blue");
          expect(rectangle.width).toEqual(2);
        });

        test("should have a height property", () => {
          const rectangle = new Rectangle(2, 3, "blue");
          expect(rectangle.height).toEqual(3);
        });

        test("should have a color property", () => {
          const rectangle = new Rectangle(2, 3, "blue");
          expect(rectangle.color).toEqual("blue");
        });

        test("should calculate the area correctly", () => {
          const rectangle = new Rectangle(2, 3, "blue");
          expect(rectangle.area()).toEqual(6);
        });
        const Square = require("../lib/square");

        describe("Square", () => {
          test("should have a name property", () => {
            const square = new Square(2, "green");
            expect(square.name).toEqual("square");
          });
          test("should have a color property", () => {
            const square = new Square(2, "green");
            expect(square.color).toEqual("green");
          });

          test("should calculate the area correctly", () => {
            const square = new Square(2, "green");
            expect(square.area()).toEqual(4);
          });
        });
      });
    });
  });
});
