let arr = [1, 2, 3, 4, 5, 6];
const a = 2;
const b = 5;

export const getSquaredArray = (array) => array.map((el) => el * el);
console.log(getSquaredArray(arr));
export const getOddNumbers = (array) => array.filter((el) => el % 2 === 0);
console.log(getOddNumbers(arr));
export default const defaultFunc = (number1, number2) => number1 + number2;
console.log(defaultFunc(a, b));
