export abstract class Shape {
    constructor(public color: string) {}
    abstract getArea(): number;
  }
  
  // Triangle (base, height)
  export class Triangle extends Shape {
    constructor(public base: number, public height: number,
                color: string = "black") {
      super(color);
    }
    getArea(): number {
      return this.base * this.height / 2;
    }
  }
  
  // Circle (radius)
  export class Circle extends Shape {
    constructor(public radius: number, color: string = "black") {
      super(color);
    }
    getArea(): number {
      return Math.PI * this.radius ** 2;
    }
  }
  
  // Square (side)
  export class Square extends Shape {
    constructor(public side: number, color: string = "black") {
      super(color);
    }
    getArea(): number {
      return this.side ** 2;
    }
  }
  
  let shapes: Shape[] = [
    new Triangle(4, 5),
    new Square(4),
    new Circle(3.5),
    new Triangle(20, 3, "pink"),
    new Square(6, "orange"),
    new Circle(5, "green")
  ];
  console.log(shapes);
  
  // Sum
  let sum = 0;
  for (let shape of shapes) {
    console.log(shape.getArea());
    sum += shape.getArea();
  }
  console.log("Sum:", sum);

  //Find average area
  console.log("Avg:", sum / shapes.length);

  //Find shape with largest area
  let largeShape: Shape = shapes[0];
  for (let shape of shapes) {
    if (shape.getArea() > largeShape.getArea()) {
        largeShape = shape;
    }
  }
  console.log(largeShape);

  //Sort by area (largest area first)
  shapes.sort((shapeA, shapeB) => {
    if (shapeA.getArea() < shapeB.getArea()) {
        return 1;
    } else if (shapeA.getArea() === shapeB.getArea()) {
        return 0;
    } else {
        return -1;
    }
  });

  console.log(shapes);

  //Find all pink
const pinkShapes = shapes.filter(shape => shape.color === "pink");
console.log(pinkShapes);

//Find all the squares
const squares = shapes.filter(shape => shape instanceof Square);
console.log(squares);