const { Shapes, Circle, Triangle, Square} = require("./lib/shapes");

//add tests here, they should test for shapes

 // circle test

 // triangle test
 const shape = new Triangle();
 shape.setColor("blue");
 expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
 // square test

 module.exports = testingShapeName;