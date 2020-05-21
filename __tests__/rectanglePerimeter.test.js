const rectanglePerimeter = require("../rectanglePerimeter");

test("permieter of a rectangle", () => {
  expect(rectanglePerimeter(6, 5)).toEqual(22);
  expect(rectanglePerimeter("", 5)).toEqual(NaN);
  expect(rectanglePerimeter("", "")).toEqual(NaN);
});
