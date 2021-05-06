import { Circle, Triangle } from './demo'

describe("Triangle class", () => {
  test("base and height are set from constructor params", () => {
    let triangle: Triangle = new Triangle(10, 5);
    expect(triangle.base).toBe(10);
    expect(triangle.height).toBe(5);
  });
  test("getArea calculate", () => {
    let triangle: Triangle = new Triangle(20, 30);
    expect(triangle.getArea()).toBe(300);
  });
});

describe("Circle class", () => {
  test("radius is set from constructor params", () => {
    let circle: Circle = new Circle(5);
    expect(circle.radius).toBe(5);
  });
  test("getArea calculate", () => {
    let circle: Circle = new Circle(10);
    expect(circle.getArea()).toBeCloseTo(314.16);
  });
});