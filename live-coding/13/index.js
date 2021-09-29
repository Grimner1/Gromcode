// =====================================Собрать объект

// input: array, array
// output: object

// ===algo
// 1. reduce
//  2.1

// 2. for
//  2.1 creat res object
//  2.2 iterate keylist
//  2.3 get value by index
//  2.4 add key-value to the object

let a = ['a', 'b', 'c'];
let b = [1, 2, 3];

// ========================================bad option 'FOR'
// =========================variant #1

// function buildObject(keysList, valuesList) {
//   const obj = {};

//   for (let i = 0; i < keysList.length; i += 1) {
//     obj[keysList[i]] = valuesList[i];
//   }

//   return obj;
// }

// =========================variant #2

function buildObject(keysList, valuesList) {
  const obj = {};

  for (let i = 0; i < keysList.length; i += 1) {
    let key = keysList[i];
    let value = valuesList[i];

    Object.assign(obj, { [key]: value });
  }

  return obj;
}

console.log(buildObject(a, b));

// =========================variant #2

function buildObject(keysList, valuesList) {
  const obj = {};

  for (let i = 0; i < keysList.length; i += 1) {
    let key = keysList[i];
    let value = valuesList[i];

    Object.assign(obj, { [key]: value });
  }

  return obj;
}

console.log(buildObject(a, b));

// =====================================refact

function buildObject(keysList, valuesList) {
  let obj = {};

  for (let i = 0; i < keysList.length; i += 1) {
    obj = { ...obj, [keysList[i]]: valuesList[i] };
  }

  return obj;
}

console.log(buildObject(a, b));

// ===========================================

// ========================================GOOD option 'REDUCE'

function buildObject(keysList, valuesList) {
  return keysList.reduce((obj, key, index) => {
    const value = valuesList[index];
    return { ...obj, [key]: value };
  }, {});
}

console.log(buildObject(a, b));

// ========================================refact

const buildObject = (keysList, valuesList) =>
  keysList.reduce((obj, key, index) => ({ ...obj, [key]: valuesList[index] }), {});

console.log(buildObject(a, b));

// =================================================Lesson#2

// 1. привести объекты в масивы
// 2. отсортировать масивы по ключам
// 3. сранить ключ-значение, ключ-значение
// 4. вернуть false или true

function compareObjects(obj1, obj2) {}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

compareObjects(obj1, obj2); // ==> false
compareObjects(obj2, obj3); // ==> false
compareObjects(obj1, obj4); // ==> true
