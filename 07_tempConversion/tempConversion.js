const convertToCelsius = function(fahrenheit){
  let celsius = (fahrenheit -32)*5/9
  return Math.round(celsius);
}

const convertToFahrenheit = function(celsius) {
  let fahrenheit = celsius*9/5+32;
  return Math.round(fahrenheit);
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

