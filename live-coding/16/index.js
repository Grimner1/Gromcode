// =================================Bad Option

// const createLogger = () => {
//   const memory = [];

//   function warn(text) {
//     const warnObj = { message: text, dateTime: new Date(), type: 'warn' };
//     memory.push(warnObj);
//   }

//   function error(text) {
//     const errorObj = {
//       message: text,
//       dateTime: new Date(),
//       type: 'error',
//     };
//     memory.push(errorObj);
//   }

//   function log(text) {
//     const logObj = {
//       message: text,
//       dateTime: new Date(),
//       type: 'log',
//     };
//     memory.push(logObj);
//   }

//   function getRecords(type = 'none') {
//     if (type !== 'none') {
//       const getmemory = memory.filter((element) => {
//         if (element.type === type) {
//           return element;
//         }
//       });
//       return getmemory.sort((a, b) => b.dateTime - a.dateTime);
//     }
//     return memory.sort((a, b) => b.dateTime - a.dateTime);
//   }

//   return {
//     warn,
//     error,
//     log,
//     getRecords,
//   };
// };

// ============================good option Refact

// const createLogger = () => {
//   const memory = [];

//   function warn(text) {
//     pusher(text, 'warn');
//   }

//   function error(text) {
//     pusher(text, 'error');
//   }

//   function log(text) {
//     pusher(text, 'log');
//   }

//   function pusher(text, type) {
//     memory.push({ message: text, dateTime: new Date(), type });
//   }

//   function getRecords(type) {
//     // const records = type ? memory.filter((element) => element.type === type) : memory;
//     return (type ? memory.filter((element) => element.type === type) : memory).sort(
//       (a, b) => b.dateTime - a.dateTime,
//     );
//   }

//   return {
//     warn,
//     error,
//     log,
//     getRecords,
//   };
// };

// // test data
// const logger1 = createLogger();
// logger1.error('some error');
// logger1.error('some error 2222');
// logger1.log('some log');
// console.log(logger1.getRecords());

// const logger2 = createLogger();
// logger2.error('sexpected error');
// // logger2.error('some error 2222');
// // logger2.log('some log');
// console.log(logger2.getRecords());

// ===============================================Всплытие

/* eslint-disable */

// hoisting var example 1
console.log(message);
var message = 'Hoisting is here!';

// hoisting var example 2
var a = 55;
console.log(a);

if (a) {
  var a = 1;

  console.log(a);
}

console.log(a);

// hoisting var example 3
var a = 77;
console.log(a);

function print() {
  var a = 2;
  console.log(a);
}
print();

console.log(a);

// hoisting func example 4
run();

function run() {
  console.log('RUN');
}

stop();
const stop = function () {
  console.log('STOP');
};
