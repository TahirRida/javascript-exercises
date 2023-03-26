const add = function(item1 , item2) {
  return item1 + item2;
	
};

const subtract = function(item1 , item2) {
  return item1 - item2
	
};

const sum = function(array) {
  let sum = 0;
  for (let i = 0; i<array.length;i++){
    sum += array[i];
  }
  return sum;
	
};

const multiply = function(array) {
  let mul = 1;
  for (let i = 0; i<array.length;i++){
    mul *= array[i];
  }
  return mul;

};

const power = function(item , exponent) {
  return Math.pow(item , exponent);
	
};

const factorial = function(item) {
  if (item === 0 || item === 1){
    return 1;
  }
	else{
    return item * factorial(item - 1);
  }
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
