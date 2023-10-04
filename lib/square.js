const Rectangle = require('./rectangle');

class Square extends Rectangle {
    constructor(length, color) {
        super(length, length, color);
        this.name = 'square';
    }

    render() {
        const x = 0;
        const y = 0;
        return `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${this.color}" />`;
     }
}

module.exports = Square;