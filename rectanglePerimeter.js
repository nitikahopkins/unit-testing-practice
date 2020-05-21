//Write a function that returns the perimeter of a rectangle with a width of 5 and a height of 8.

function rectanglePerimeter(l, b) {
  if (l === "" || b === "") return NaN;
  return 2 * (l + b);
}

module.exports = rectanglePerimeter;
