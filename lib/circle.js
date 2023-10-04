const Shape = require('./shape');

class Circle extends Shape {
    constructor(radius, color) {
        super('circle');
        this.radius = radius;
        this.color = color;
    }
    render() {
        const cx = 110;
        const cy = 110;
        return `<circle cx="${cx}" cy="${cy}" r="${this.radius}" fill="${this.color}"/>`;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}

module.exports = Circle;