"use strict";
{
    const calculateShapeArea = (shape) => {
        if (shape.shape === "circle") {
            const circleArea = parseFloat((Math.PI * shape.radius * shape.radius).toFixed(2));
            return circleArea;
        }
        else {
            const rectangleArea = shape.width * shape.height;
            return rectangleArea;
        }
    };
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea);
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 7,
    });
    console.log(rectangleArea);
}
