const Shape = require('./shape');

class Circle extends Shape {
    constructor(radius, color) {
        super('circle');
        this.radius = radius;
        this.color = color;
    }
    render() {
        const coord_x = 90;
        const coord_y = 90;
        return `<circle coord_x="${coord_x}" coord_y="${coord_y}" radius="${this.radius}" fill="${this.color}"/>`;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}

module.exports = Circle;