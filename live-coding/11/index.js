// ---------------------------------------version 1

// // input: obj, ключ объекта, значение ключа объекта
// // output: obj

// let a = [];
// let b = 'www';
// let c = '123';

// // function addPropertyV1(obj, key, value) {
// //     let xx = obj;
// //     xx[key] = value;
// //     return xx;
// //   }

// //   console.log(addPropertyV1(a, b, c));

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// test data
const transaction = {
  value: 170,
};

console.log(addPropertyV1(transaction, 'currency', 'USD'));
console.log(transaction);

// ---------------------------version 2

// Object.assign();
// input: целевой object, ...object
// output: измененный целевой object

const transaction2 = {
  value: 70,
};

function addPropertyV2(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}

console.log(addPropertyV2(transaction2, 'currency2', 'USD2'));
console.log(transaction2);

// -------------------------------version3

const transaction3 = {
  value: 707,
};

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

console.log(addPropertyV3(transaction3, 'currency3', 'USD3'));
console.log(transaction3);

// --------------------------------verion4

// spred operator
const numbers = [10, 11, 18, 7, 0];
console.log(numbers);
console.log(...numbers);
const numbersCopy = [66, 666, ...numbers, 22, 222];
console.log(numbersCopy);

const transaction4 = {
  value: 707,
  //   const nttt() {
  //     return 'lalala';
  //   },
};

function addPropertyV4(obj, key, value) {
  const resObj = { ...obj, [key]: value };
  return resObj;
}

console.log(addPropertyV4(transaction4, 'currency3', 'USD3'));
console.log(addPropertyV4(transaction4, '777', '128'));
console.log(transaction4);

// ------------------------------------------------rest operstor
function sum(param1, ...params) {
  console.log(param1);
  console.log(params);

  return params.reduce((acc, el) => {
    acc += el;
    return acc;
  });
}

// test data
console.log(sum(1, 2, 55, 9, 0));

// -------------------------------------------------

const mass = [1, 2, 3, 4, 5, 6];
const [a, ...www] = mass;
console.log(a);
console.log(www);

const mass2 = [['a1', 'a2'], ['b3', 'b4', 'b5'], 'g6', 'g7', 'g9'];
let aa1 = [...mass2[0], ...mass2[1], ...mass2];
console.log(aa1);
