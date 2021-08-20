







// =================================================

// function buildObject(keysList, valuesList) {
//   let obj = {};

//   keysList.forEach(element => {
//     obj[element] = '';

  // values.forEach(element => {

  // });

    
//   });
//   console.log(obj);
//   keysList.reduce((a, b, c, d) => console.log(a, b, c, d));
//   keysList.reduce((a, b, c, d) => console.log(a));
//   keysList.reduce((a, b, c, d) => console.log(b));
//   keysList.reduce((a, b, c, d) => console.log(c));
//   keysList.reduce((a, b, c, d) => console.log(d));
// };

// let x = {
//   ttt: 111,
//   vvv: 555,
//   mmm: 333,
// };

// console.log(x);

// let y = {};
// let z = ['f', 'g', 'h'];
// let r = [1, 2, 3];


// // examples
// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];
// const result = buildObject(keys, values); 
// ==> { name: 'Bob', address: 'Ukraine', age: 56 }

// buildObject(keys, values);






// ===============================================================

// const users = {
//   'user-id-1': {
//     name: 'Greg',
//     age: 22,
//   },
//   'user-id-2': {
//     name: 'Sam',
//     age: 12,
//   },
//   'user-id-3': {
//     name: 'L',
//     age: 58,
//   },
//   'user-id-4': {
//     name: 'D',
//     age: 18,
//   },
//   'user-id-5': {
//     name: 'V',
//     age: 118,
//   },
//   'user-id-6': {
//     name: 'Liza',
//     age: 8,
//   },
// }
// console.log(users);
// const getCustomersList = obj => {
//   // const newObj = {...obj};
//   const newObj = Object.assign({}, obj);
//   const objToArr = Object.entries(newObj);
//   const addUserId = objToArr.map(index => index[1].id = index[0]);
//   const deleteUserId = objToArr.map(index => index = index[1]);
//   const sortUsersByAge = deleteUserId.sort((a, b) => a.age - b.age);
  
//   return sortUsersByAge;
// };

// console.log(getCustomersList(users));
