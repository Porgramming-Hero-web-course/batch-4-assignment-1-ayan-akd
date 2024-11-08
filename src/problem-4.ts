{
  // Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type shape = Circle | Rectangle;

  const calculateShapeArea = (shape: shape): number => {
    if (shape.shape === "circle") {
      const circleArea = parseFloat(
        (Math.PI * shape.radius * shape.radius).toFixed(2)
      );
      return circleArea;
    } else {
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
