const convertToCelsius = function (degrees) {
  return Math.round(((degrees - 32) / 1.8) * 10) / 10;
};

const convertToFahrenheit = function (degrees) {
  const num = (degrees * 5) / 9 + 32;

  return Math.round(num * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
