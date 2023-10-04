const Rectangle = require('./rectangle');

class Square extends Rectangle {
    constructor(side, color) {
        super(side, side, color);
        this.name = 'square';
    }

    render() {
        const x = 0;
        const y = 0;
        return `<rect x="${x}" y="${y}" width="${this.width}" height="${this.height}" fill="${this.color}" />`;
     }
}

module.exports = Square;