const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
  let total = 0;
  for (let i=0; i<arr.length; i++){
    total += arr[i];
  }
	return total;
};

const multiply = function(arr) {
  let mul = 1;
  for(let i=0;i<arr.length;i++){
    mul *= arr[i];
  }
  return mul;
};

const power = function(base,exp) {
	return (Math.pow(base,exp));
};

const factorial = function(num) {
	let result= 1;
  for (i = num; i>=1;i--){
    result *= i;
  }
  return result;
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
