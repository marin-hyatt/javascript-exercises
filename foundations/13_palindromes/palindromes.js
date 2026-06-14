const palindromes = function (string) {
  let j = 1;
  for (let i = 0; i < string.length; i++) {
    const a = string.at(i);
    const b = string.at(j * -1);
    if (a !== b) {
      return false;
    }
    j += 1;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
