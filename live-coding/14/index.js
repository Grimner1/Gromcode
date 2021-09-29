// 1. сделать копию объекта через спред;
// 2. преобразовать объект в массив через Object.entries():
//    - структура на данном этапе: [id, {user, age}];
// 3. Через деструктуризацию(спред) переносим id внутрь объекта:
//    - структура на данном этапе: [{id, user, age}];
// 5. Сортируем объекты внутри массива по ключу age через .sort();
// 6. Возвращаем массив;

// const getCustomersList = (obj) => {
// input: callback;
// output: array;
// .map();
// input: array;
// output: object;
// ===================================befote refactoring
// const res = Object.entries(obj)
//   .map((arr) => {
//     console.log(arr);
//     let obj = { id: arr[0] };
//     console.log(obj);
//     const value = arr[1];
//     obj = { ...obj, ...value };
//     return obj;
//   })
//   .sort((a, b) => a.age - b.age);
// console.log(res);
// return res;
//  ===================================refactoring
// return Object.entries(obj)
//   .map(([id, customer]) => ({ id, ...customer }))
//   .sort((a, b) => a.age - b.age);
// };

// ============================refact #1
// const getCustomersList = obj => {
//   const objToArray = Object.entries(obj);
//   const changeUserId = objToArray.map(([id, user]) => ({ id, ...user }));
//   const sortUsersByAge = changeUserId.sort((a, b) => a.age - b.age);
//   return sortUsersByAge;
// }

// ============================refact #2 <== final version
const getCustomersList = (obj) =>
  Object.entries(obj)
    .map(([id, user]) => ({ id, ...user }))
    .sort((a, b) => a.age - b.age);

// ======================================================test data

const users = {
  'user-id-1': {
    name: 'Greg',
    age: 22,
  },
  'user-id-2': {
    name: 'Sam',
    age: 12,
  },
  'user-id-3': {
    name: 'L',
    age: 58,
  },
  'user-id-4': {
    name: 'D',
    age: 18,
  },
  'user-id-5': {
    name: 'V',
    age: 118,
  },
  'user-id-6': {
    name: 'Liza',
    age: 8,
  },
};

console.log(getCustomersList(users));
console.log(users);
