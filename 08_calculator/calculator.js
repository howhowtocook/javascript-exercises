const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(list) {
  return list.reduce((sum, current) => sum + current, 0);
};

const multiply = function(list) {
  return list.reduce((sum, current) => sum * current, 1);
};

const power = function(num, power) {
  let total = 1;
  for (i=0; i<list.length; i++){
    total = total * num;
  }
  return total;


};

const factorial = function(num) {
  let total = 1;
  for (i=num; i>0; i--){
    total = total * i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
