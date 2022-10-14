const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
  
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  let newUpper = strings.map(upperCase => {
    return upperCase.toUpperCase();
  });
  return newUpper;
};

const reverseWordsInArray = strings => {
  return strings.map(newString =>
    newString.split('').reverse().join(''));
};

const onlyEven = numbers => {
  const newNumbers = numbers.filter(even => even % 2 === 0);
  return newNumbers;
};

const removeNthElement2 = (index, array) => {
  return array.slice(0, index).concat(array.slice(index +1));
};

const elementsStartingWithAVowel = strings => {
  let vowel = /^[aeiou]/i;
  return strings.filter(str => vowel.test(str));
};

const removeSpaces = string => {
  return string.replace(/\s/g, '');
};

const sumNumbers = numbers => {
  const startPoint = 0;
  const total = numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    startPoint
  );
  return total;
};

const sortByLastLetter = strings => {
  const reverseString = item =>
    item
      .split('')
      .reverse()
      .join('');

  return strings
    .map(reverseString)
    .sort()
    .map(reverseString);
};
// couldn't do this


module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
