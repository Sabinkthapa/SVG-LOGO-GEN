const Shape = require('./shape');

class Rectangle extends Shape {
    constructor(width, height, color) {
        super('rectangle');
        this.width = width;
        this.height = height;
        this.color = color;
    }
    render () {
        const x = 70 - this.width / 2;
        const y = 100 - this.height / 2;
        return `<rect x="${x}" y="${y}" width="${this.width}" height="${this.height}" fill="${this.color}"/>`;  
    }

    area() {
        return this.width * this.height;
    }
}

module.exports = Rectangle;