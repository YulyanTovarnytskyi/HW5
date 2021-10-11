    // Функція 1

const getRandomArray = (length, min, max) => {
    let randomArray = [];
    for (let i = 0; i < length; i++) {
      randomArray.push(Math.floor(Math.random() * (max - min) + min));
    }
    return randomArray;
  };
  console.log(getRandomArray(20, 12, 58));
  // Функція 5
const filterEvenNumbers = (...numbers) =>
numbers.filter((number) => number % 2 !== 0);

console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// Функція 3

const getAverage = (...numbers) => {
    const arr = numbers.filter(number => Number.isInteger(number));
    const sumNum = arr.reduce((sum, current) => sum + current);
    return +(sumNum / arr.length).toFixed(2);
};
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
// Функція 6
const countPositiveNumbers = (...numbers) => {
    let sumNumber = numbers.reduce((result, number) => {
      if (number > 0) {
        result++;
      }
      return result;
    }, 0);
    return sumNumber;
  };
  
  console.log(countPositiveNumbers(1, -2, 3, 6, 0, 8, 9));
// Функція 7
const getDividedByFive = (...numbers) =>
  numbers.filter((number) => number % 5 === 0);
  