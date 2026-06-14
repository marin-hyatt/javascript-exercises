const sumAll = function (a, b) {
  if (a >= b) {
    return sumTwo(a, b);
  } else {
    return sumTwo(b, a);
  }
};

const sumTwo = (bigger, smaller) => {
  let arr = [];

  for (let i = smaller; i <= bigger; i++) {
    arr.push(i);
  }

  let res = 0;
  const initialValue = 0;
  const sumWithInitial = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );

  return sumWithInitial;
};

// Do not edit below this line
module.exports = sumAll;
