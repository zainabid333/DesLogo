const {Triangle,Circle,Square}=require(`./shapes`)
describe(`Triangle`,()=>{
    test(`should render a triangle`,()=>{
        const shape=new Triangle()
        shape.setColor(`blue`)
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`)
    })
})
test (`should render a circle`,()=>{
    const shape=new Circle()
    shape.setColor(`red`)
    expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="red" />`)
})
test (`should render a square`,()=>{
    const shape=new Square()
    shape.setColor(`green`)
    expect(shape.render()).toEqual(`<rect x="90" y="40" width="120" height="120" fill="green" />`)
})