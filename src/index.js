const { valid } = require("semver");

const strNums = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "ninteen",
];
const str10th = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];

module.exports = function toReadable (number) {
    let result = [];

    if (number > 99) {
      const x = Math.floor(number / 100);
      result.push(strNums[x-1] + ' hundred');
    }
  
    if (number < 100 && number > 19) {
      const x = Math.floor(number / 10);
      result.push(str10th[x-1]);
    }
  
    if (x < 19) {
      result.push(strNums[number]);
    }
  
    return result.join(' ');  
} 