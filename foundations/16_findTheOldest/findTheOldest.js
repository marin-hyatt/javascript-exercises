const findTheOldest = function (people) {
  return people.reduce(getOldestPerson);
};

const getOldestPerson = (a, b) => {
  const aAge =
    (a["yearOfDeath"] ?? new Date().getFullYear()) - a["yearOfBirth"];
  const bAge =
    (b["yearOfDeath"] ?? new Date().getFullYear()) - b["yearOfBirth"];
  if (aAge >= bAge) {
    return a;
  }
  return b;
};

// Do not edit below this line
module.exports = findTheOldest;
