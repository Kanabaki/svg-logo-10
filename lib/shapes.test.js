const { Circle, Triangle, Square} = require("./shapes");
// These tests test if the render methods match the colors passed in.

 // Circle shapeColor test ============================================
describe("Shape Tests", () => {

 describe("Circle Test", () => {
it("Should render a given shape color", () => {
    const newCircle = new Circle("circle", "丸", "white", "pink");

    expect(newCircle.circleRender()).toEqual(`<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="pink" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">丸</text> 
</svg>`)
})
});

 // Triangle shapeColor test ============================================
 describe("Triangle Test", () => {
    it("Should render a given shape color", () => {
        const newTriangle = new Triangle("triangle", "!!!", "white", "firebrick");
    
        expect(newTriangle.triangleRender()).toEqual(`<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<polygon points="150,7 296,170 7,170"
stroke="firebrick" fill="firebrick" stroke-width="5"/>
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">!!!</text> 
</svg>`)
})
});

 // Square shapeColor test ============================================
 describe("Square Test", () => {
    it("Should render a given shape color", () => {
        const newSquare = new Square("square", "SVG", "maroon", "black");
    
        expect(newSquare.squareRender()).toEqual(`<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<rect x="50" y="10" width="200" height="200"
stroke="black" fill="black" stroke-width="5"/>
<text x="150" y="125" font-size="60" text-anchor="middle" fill="maroon">SVG</text> 
</svg>`)
})
});

});
