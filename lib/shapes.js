//lib for shape.js
class shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
}

class Triangle extends shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}
class Circle extends shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}
class Square extends shape {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
}
module.exports = { Triangle, Circle, Square };