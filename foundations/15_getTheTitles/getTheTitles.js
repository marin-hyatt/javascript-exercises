const getTheTitles = function (arr) {
  let res = [];
  arr.forEach((element) => {
    res.push(getBookTitle(element));
  });

  return res;
};

const getBookTitle = (book) => {
  return book["title"];
};

// Do not edit below this line
module.exports = getTheTitles;
