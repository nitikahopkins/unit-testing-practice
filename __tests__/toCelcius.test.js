const toCelcius = require("../toCelcius");

test("convert temperature into celcius", () => {
  expect(toCelcius(212)).toEqual(100);
  expect(toCelcius("")).toEqual(NaN);
  expect(toCelcius(-100)).toEqual(-73);
});
