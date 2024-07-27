const inquirer = require('inquirer')
const fs = require('fs')
const { Triangle, Circle, Square } = require('./lib/shapes.js')
const path = require('path')

function generateSVG(text, textColor, shape, shapeColor) {
    let shapeInstance
    switch (shape) {
        case 'Triangle':
            shapeInstance = new Triangle()
            break
        case 'Circle':
            shapeInstance = new Circle()
            break
        case 'Square':
            shapeInstance = new Square()
            break
    }
    shapeInstance.setColor(shapeColor)
    return `<?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeInstance.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`	.trim()
}
async function promptUser() {
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            validate: input => input.length <= 3 || 'Please enter up to three characters.'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color for the text (keyword or hexadecimal number):'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for the logo:',
            choices: ['Triangle', 'Circle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color for the shape (keyword or hexadecimal number):'
        }
    ])
    return userInput
}
async function main() {
    const userInput = await promptUser()
    const svgContent = generateSVG(userInput.text, userInput.textColor, userInput.shape, userInput.shapeColor)
    const examplePath = path.join(__dirname, 'examples')
    if (!fs.existsSync(examplePath)) {
        fs.mkdirSync(examplePath)
    }

    const fileName = `${userInput.text.toLowerCase()}_logo.svg`
    const filePath = path.join(examplePath, fileName)
    fs.writeFileSync(filePath, svgContent)
    console.log('Generated logo.svg')
}

main()
    .catch(err => console.error(err))