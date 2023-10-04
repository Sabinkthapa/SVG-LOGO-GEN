const shape = require('shape');

class Rectangle extends Shape {
    constructor(width, height, color) {
        super('rectangle');
        this.width = width;
        this.height = height;
        this.color = color;
    }

    render () {
        const x = 50;
        const y = 20;
        return `<rect x="${x}" y="${y}" width="${this.width}" height="${this.height}" fill="${this.color}" />`;  
    }

    area() {
        return this.width * this.height;
    }
}

module.exports = Rectangle;