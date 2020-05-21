//Write a function that converts fahrenheit, given as an argument, to celcius.

function toCelcius(f) {
  if (f === "") return NaN;
  return Number(((f - 32) * (5 / 9)).toFixed(0));
}

module.exports = toCelcius;
