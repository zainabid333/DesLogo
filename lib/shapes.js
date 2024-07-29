//lib for shape.js
class shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
}
//lib for triangle
class Triangle extends shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

//lib for circle
class Circle extends shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}
//lib for square

class Square extends shape {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
}
//exporting the classes
module.exports = { Triangle, Circle, Square };