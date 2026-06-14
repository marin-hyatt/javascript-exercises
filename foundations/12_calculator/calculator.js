const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let res = 0;
  arr.forEach((element) => {
    res += element;
  });

  return res;
};

const multiply = function (a, b) {
  return a * b;
};

const power = function (base, exp) {
  let res = 1;
  for (let i = 0; i < exp; i++) {
    res *= base;
  }
  return res;
};

const factorial = function (num) {
  let res = 1;
  for (let i = num; i > 0; i--) {
    res *= i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
