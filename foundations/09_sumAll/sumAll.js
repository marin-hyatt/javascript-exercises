const sumAll = function (a, b) {
  if (a >= b) {
    return sumTwo(a, b);
  } else {
    return sumTwo(b, a);
  }
};

const sumTwo = (bigger, smaller) => {
  let res = 0;
  for (let i = smaller; i <= bigger; i++) {
    res += i;
  }
  return res;
};

// Do not edit below this line
module.exports = sumAll;
