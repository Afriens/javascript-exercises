const convertToCelsius = function(number) {
  const newTemp = ((number - 32) * 5) / 9;
  return Number.isInteger(newTemp) ? newTemp : parseFloat(newTemp.toFixed(1));
};

const convertToFahrenheit = function(number) {
  const newTemp = ((number * 9) / 5) + 32;
  return Number.isInteger(newTemp) ? newTemp : parseFloat(newTemp.toFixed(1));
};

console.log(convertToCelsius(32))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
