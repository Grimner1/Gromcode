// map:
// input:callback(element, index, array)
// output: changes element

// const callback = (element, index, array) => {
//   element = element * 10;
//   return element;
// };

// console.log(callback(2));

// const mapArrayElements = (arr, callback) => {
//   const newArray = [];
//   arr.map((el, index, arr) => {
//     newArray.push(callback(el, index, arr));
//     console.log(el, index, arr);
//   });

//   return newArray;
// };

// const arr = [2, 4, 5, 10, 100];

// console.log(mapArrayElements(arr, callback));

// const a = [1, '2.268', '  3', '4.2854   ', '   5   ', '6asc', 'afca7', 'wsdvc8sad', '9asvac0'];

// const cleanTransactionsList = (array) => {
//   let newArr = [];
//   array.forEach((el) => {
//     if (typeof el === typeof 1) {
//       let x = el.toFixed(2);
//       newArr.push('$' + x);
//       console.log(x);
//     } else if (isFinite(el)) {
//       let x = +el.trim();
//       x = x.toFixed(2);
//       newArr.push('$' + x);
//       console.log(x);
//     }
//   });

//   return newArr;
// };
// console.log(cleanTransactionsList(a));
// console.log(typeof 1);

// ===============================================Count occurences

// const str = 'dfvsdv dimasdvasdvsddima;lkuhva     l;ASjvdimalasdi;l   aiovpodima ohpovh dimadima ';
// const w = 'dima';

// function countOccurrences(string, word) {
//   if (!Boolean(word)) {
//     return null;
//   }
//   let num = 0;
//   let index = 0;
//   while (string.includes(word, index)) {
//     num += 1;
//     index = string.indexOf(word, index) + word.length;
//     console.log(index);
//   }

//   return num;
// }

// console.log(countOccurrences(str, w));

// ============================================Разбить текст на строки

// let a = 'wqvsadvs dvs34634dvsdvва иваяив2346ативя атив3462 твт';
// let b = 4;
// let string = 654;

// -----------------------------------------don't pass
// function splitText(string, value = 10) {
//   if (typeof string !== typeof 'a') {
//     return null;
//   }

//   let newString = string;
//   const array = [];

//   while (newString.length > 0) {

//     array.push(newString[0].toUpperCase() + newString.slice(1, value));
//     newString = newString.slice(value, newString.length);
//   }
//   return array.join('\n');
// }

// console.log(splitText(string, value));
// console.log(splitText(string));
// ----------------------------------------don't pass

// function splitString(text, len = 10) {
//   if (typeof text !== typeof 'a') {
//     return null;
//   }

//   const strArr = [];
//   let startPosition = 0;

//   while (true) {
//     let chunk = text.substr(startPosition, len);
//     if (chunk.length === 0) {
//       break;
//     }

//     // let x = chunk[0].toUpperCase() + chunk.slice(1);
//     chunk = chunk.padEnd(len, '.');
//     strArr.push(chunk);
//     startPosition += len;
//   }

//   return strArr;
// }

// console.log(splitString(a, b));

// =================================================Собрать объект

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

// ===============================================================Объект в масив пользователей

// input: object{object};
// output: array{object};

// =================bad option
// 1. сделать копию объекта;
// 2. преобразовать объект в массив через Object.entries():
//    - структура на данном этапе: [id, {user, age}];
// 3. добавляем ключ id в объект пользовтелей через .map(), значение ключа: array[0]:
//    - структура на данном этапе: [id, {user, age, id}];
// 4. удаляем array[0] через .map():
//    - структура на данном этапе: [{user, age, id}];
// 5. Сортируем объекты внутри массива по ключу age через .sort();
// 6. Возвращаем массив;

// =================good option
// input: object{object};
// output: array{object};

// 1. сделать копию объекта через спред;
// 2. преобразовать объект в массив через Object.entries():
//    - структура на данном этапе: [id, {user, age}];
// 3. Через деструктуризацию(спред) переносим id внутрь объекта:
//    - структура на данном этапе: [{id, user, age}];
// 5. Сортируем объекты внутри массива по ключу age через .sort();
// 6. Возвращаем массив;

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
// };

// const getCustomersList = (obj) => {
// ====================================old
// // const newObj = { ...obj }; ------ ненужная опция
// // const newObj = Object.assign({}, obj);
// console.log(obj); // ------test
// const objToArray = Object.entries(obj);
// console.log(objToArray); // --------test

// // objToArray.map((value) => (value[1].id = value[0])); ---- bad option
// const changeUserId = objToArray.map(([id, user]) => ({ id, ...user }));
// console.log(changeUserId); // --------test
// // const deleteUserId = objToArray.map((value) => (value = value[1])); --- bad option

// const sortUsersByAge = changeUserId.sort((a, b) => a.age - b.age);

// return sortUsersByAge;

// ====================================================not refactoring
// const objToArray = Object.entries(obj);
// const changeUserId = objToArray.map(([id, user]) => ({ id, ...user }));
// const sortUsersByAge = changeUserId.sort((a, b) => a.age - b.age);
// return sortUsersByAge;

// ====================================================new refactoring
// return Object.entries(obj).map(([id, user]) => ({id, ...user,})).sort((a, b) => a.age - b.age);
// };

// console.log(getCustomersList(users)); // --------test
// console.log(users); // --------test

// --------------------------------------------Working case
// const getCustomersList = (obj) => {
//   return Object.entries(obj)
//     .map(([id, user]) => ({ id, ...user }))
//     .sort((a, b) => a.age - b.age);
// };

// console.log(getCustomersList(users));

// ==============================================================Лексическое окружение

// let message = 'Just learn it';

// // export
// function sendMessage(name) {
//   const sender = 'Gromcode';
//   console.log(`${name}, ${message}! Your ${sender}`);
// }

// // export
// function setMessage(text) {
//   message = text;
// }
// console.log(sendMessage('Xek'));
// setMessage('la - la - land');
// console.log(sendMessage('leroy'));

// ============================================================Вложенные функции

// let message = 'Just learn it';
// let sender = 'Bob';

// // export default
// function createMessenger() {
//   function sendMessage(name) {
//     console.log(`${name}, ${message}! Your ${sender}`);
//   }

//   function setMessage(text) {
//     message = text;
//   }

//   function setSender(name) {
//     sender = name;
//   }

//   return {
//     sendMessage,
//     setMessage,
//     setSender,
//   };
// }

// // import {} from 'test.js';

// const letMessage = createMessenger();

// letMessage.sendMessage('Leroy');
// letMessage.setMessage('oh my GOD');
// letMessage.sendMessage('Lui');
// letMessage.setSender('babababa');
// letMessage.sendMessage('LOL');

// =============================================================Калькулятор с памятью

// let memory = 0;

// function add(argument) {
//   memory += argument;
// }

// function decrease(argument) {
//   memory -= argument;
// }

// function reset() {
//   memory = 0;
// }

// function getMemo(argument) {
//   memory = argument;
// }

// add(10);
// console.log(memory);
// add(25);
// console.log(memory);
// decrease(100);
// console.log(memory);
// reset();
// console.log(memory);
// getMemo(166);
// console.log(memory);

// =====================================================калькулятор с паматью

// export const createCalculator = () => {
//   let memoryNumbers = 0;

//   const add = (number) => {
//     memoryNumbers += number;
//     return memoryNumbers;
//   };

//   const decrease = (number) => {
//     memoryNumbers -= number;
//     return memoryNumbers;
//   };

//   const reset = () => {
//     memoryNumbers = 0;
//     return memoryNumbers;
//   };

//   const getMemo = () => memoryNumbers;

//   return {
//     add,
//     decrease,
//     reset,
//     getMemo,
//   };
// };

// const let1 = createCalculator();
// const let2 = createCalculator();

// console.log('let1 +10:', let1.add(10));
// console.log('let1 reset:', let1.reset());

// console.log('let1 +10:', let1.add(10));
// console.log('let2 +8:', let2.add(8));

// console.log('let2 +5:', let2.add(5));
// console.log('let2 +2:', let2.add(2));

// console.log('let1 -3:', let1.decrease(3));
// console.log('let2 -2:', let2.decrease(2));

// =========================================================logger

// 1. функция-объект с методами;
//     - функция содержит память: массив который  содержит объекты;
// 2. функция принимает string в контексте своего (указанного через точку) метода (тип сообщения);
// 3. Функция добавляет в массив объект:
//     - каждый объект состоит из: [{message: ..., dataTime: ..., type: ...}];
// 4. функция возвращает результат указанного (через точку) метода:
// 5. Функция содержит методы для генерации объекта в массив: log(), warn(), error(); Аргументы данных методов - сроки;
//     - при актвации одного из методов, в массив добавляется объект, в котором:
//            {
//            message: 'аргумент активированого метода';
//            dataTime: 'время активации метода'; - сделать через объкт Date();
//            type: 'имя активированого метода';
//            };
// 6. функция имеет метод вывода сообщений: getRecords(); инпут данного метода - string (имя одного из методов: log, warn, error);
//     - при выводе весь массив должен быть отсортирован по ключу dataTime: самое новые в начале;
//          -
//     - если аргумент не передан: выводит весь массив объектов;
//     - Если передано название одного из методов - фильтрует массив и возвращает объекты в которых значение ключа type: 'указанный метод';
//     - Если память-массив пуст - метод тоже должен вывести пустой массив;
// 7. Функция должна экспортироваться из файла index.js с именем 'createLogger';

// Вопросы:
// ??? - каков должен быть результат, если передан не верный аргумент?
// ??? - каков должен быть результат, если указан не верный метод?
// ??? - откуда брать значение строк? Оно уже указано в тестах или задавать самому?
//
// input createLogger():
// output createLogger():
//
// input message, dataTime, type: string;
// output message, dataTime, type: undefined;
//
// input getRecords: ничего;
// output getRecords: Array[{Object}, {Object}, ...{Object}];

// =============================================Start Logger-Project

// function createLogger() {
//   const logs = [];

//   function log(message) {
//     const newlog = { ['message']: message, ['dateTime']: new Date(), ['type']: 'log' };
//     logs.push(newlog);
//   }

//   function warn(message) {
//     const newlog = { ['message']: message, ['dateTime']: new Date(), ['type']: 'warn' };
//     logs.push(newlog);
//   }

//   function error(message) {
//     const newlog = { ['message']: message, ['dateTime']: new Date(), ['type']: 'error' };
//     logs.push(newlog);
//   }

//   function getRecords(argument) {
//     // logs.sort((el1, el2) => el2.dataTime - el1.dataTime);
//     // logs.sort(function(a,b){
//     //   let c = new Date(a.date);
//     //   let d = new Date(b.date);
//     //   return c-d;
//     //   });

//     if (argument) {
//       return logs.filter((el) => el.type === argument);
//     } else {
//       return logs;
//     }
//   }

//   return { log, warn, error, getRecords };
// }

// // ====== Data test:

// // Объявляем логгеры
// const logger = createLogger();
// const logger2 = createLogger();

// // заполняем массив
// logger.log('log 1');
// logger.error('error 1');
// logger.warn('warn 1');
// logger.log('log 2');
// logger.error('error 2');
// logger.warn('warn 2');
// logger.log('log 3');
// logger.error('error 3');
// logger.warn('warn 3');

// // Проверяем вывод
// console.log(logger.getRecords('log')); // выводит только log
// console.log(logger.getRecords('error')); // выводит только error
// console.log(logger.getRecords('warn')); // выводит только warn
// console.log(logger.getRecords()); // выводить весь массив
// console.log(logger2.getRecords()); // проверка на независимость логгеров

// // Тест на ошибки
// let test;
// console.log('======тетс на ошибки======');
// logger.log(111);
// logger.error(test);
// logger.warn(1 + 2);
// logger.warn(NaN);
// logger.warn(undefined);
// logger.warn(Infinity);
// console.log(logger.getRecords(123));
// console.log(logger.getRecords(test));
// console.log(logger.getRecords(NaN));
// console.log(logger.getRecords(undefined));
// console.log(logger.getRecords(Infinity));
// console.log(logger.getRecords()); // выводить весь массив

// ======================================================================Фабрика функций

// // export
// function createArrayOfFunctions(num) {
//   const array = [];

//   if (!num) {
//     // console.log(1, Boolean(num));
//     return array;
//   } else if (!(typeof num === typeof 12)) {
//     // console.log(2, num);
//     return null;
//   } else {
//     // console.log(3, num);
//     for (let i = 0; i < num; i += 1) {
//       array[i] = function () {
//         return i;
//       };
//     }

//     return array;
//   }
// }

// console.log(createArrayOfFunctions());
// console.log(createArrayOfFunctions('123'));
// console.log(createArrayOfFunctions('qwe'));
// console.log(createArrayOfFunctions([1, 2, 3]));
// console.log(createArrayOfFunctions(5));
// console.log(createArrayOfFunctions(6)[3]());

// =======================================================var головоломка

// var foo = 1;

// function bar() {
//   if (!foo) {
//     let foo = 10;
//   }

//   return foo;
// }

// export default var foo = bar();

// console.log(foo);

// ========================================================Контекст выполнения функции

// const user = {
//   firstName: 'Jhon',
//   lastName: 'Doe',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(user.getFullName());

// =============================================================Привязка контекста

// const callbackPrompt = {
//   message: 'Tell me some...',
//   showPrompt() {
//     const promptText = prompt(this.message);
//     console.log(promptText);
//   },
//   showDefferedPrompt(ms) {
//     setTimeout(this.showPrompt.bind(this), ms);
//   },
// };

// callbackPrompt.showDefferedPrompt(1000);

// =============================================================Переадресация вызова

// function defer(func, ms) {
//   return function () {
//     // setTimeout(() => func(this, ...arguments), ms); // === don't work
//     setTimeout(() => func.apply(this, arguments), ms);
//   };
// }

// const sum = (a, b) => {
//   console.log(a + b);
// };

// const deferredSum = defer(sum, 2500);

// deferredSum(10, 11);

// =============================================================================================Вызов ф-ции с помощью call

// /* ===> 1 <=== */
// const student = {
//   name: 'Tom',
// };

// // export
// function sayName() {
//   console.log(this.name);
// }

// // student.sayName = sayName;
// // student.sayName();
// // const toLog = student.sayName;
// // toLog.call({ name: 'Bruce' });
// sayName.call(student);

// // student.name = 'Bruce';
// // student.sayName();
// sayName.call({ name: 'Bruce' });

// // вызовите ф-цию sayName так, чтобы в консоль вывелось имя студента
// // ... your code here

// // вызовите ф-цию sayName так, чтобы в консоль вывелось имя 'Bruce' (используйте другой объект)
// // ... your code here

// /* ===> 2 <=== */
// const company = {
//   companyName: 'Microsoft',
// };

// function greeting(firstName, lastName) {
//   console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
// }

// // вызовите ф-цию greeting так, чтобы в консоль вывелось
// // 'Hello, Bob Marley. Welcome to the Microsoft'
// // используйте объект company

// const func = greeting.call(company, 'Bob', 'Marley');

// /* ===> 3 <=== */
// const country = {
//   countryName: 'Ukraine',
//   capital: 'Kyiv',
// };

// function getPopulation(population) {
//   return `Population in ${this.countryName} is ${population}`;
// }

// const pop = getPopulation.call(country, 43000);
// console.log(pop);

// // вызовите ф-цию getPopulation так, чтобы она вернула
// // 'Population in Ukraine is 43000'
// // 43000 передавайте в виде числа
// // используйте объект country
// // результат работы ф-ции getPopulation присвойте в переменную и выведите в консоль
// // ... your code here

// /* ===> 4 <=== */
// const transaction = {
//   amount: 1200,
//   operation: 'sell',
//   currency: 'USD',
//   exchange: 'NYSE',
//   printTransaction() {
//     console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
//   },
// };

// const anotherTransaction = {
//   amount: 400,
//   operation: 'buy',
//   currency: 'USD',
//   exchange: 'NASDAQ',
// };

// // вызовите метод transaction.printTransaction так, чтобы в консоль вывелось
// // '400 USD - buy on NASDAQ'
// // используйте объект anotherTransaction как контекст

// const xxx = transaction.printTransaction;
// xxx.call(anotherTransaction);

// =============================================================================================Вызов ф-ции с помощью call

// /* ===> 1 <=== */
// const student = {
//   name: 'Tom',
// };

// function sayName() {
//   console.log(this.name);
// }

// // вызовите ф-цию sayName так, чтобы в консоль вывелось имя студента
// const sayTom = sayName.apply(student);

// // вызовите ф-цию sayName так, чтобы в консоль вывелось имя 'Bruce' (используйте другой объект)
// const student2 = {
//   name: 'Bryce',
// };
// const sayBryce = sayName.apply(student2);

// /* ===> 2 <=== */
// const company = {
//   companyName: 'Microsoft',
// };

// function greeting(firstName, lastName) {
//   console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
// }

// // вызовите ф-цию greeting так, чтобы в консоль вывелось
// // 'Hello, Bob Marley. Welcome to the Microsoft'
// // используйте объект company
// const greatBob = greeting.apply(company, ['Bob', 'Marley']);

// /* ===> 3 <=== */
// const country = {
//   countryName: 'Ukraine',
//   capital: 'Kyiv',
// };

// function getPopulation(population) {
//   return `Population in ${this.countryName} is ${population}`;
// }

// // вызовите ф-цию getPopulation так, чтобы она вернула
// // 'Population in Ukraine is 43000'
// // 43000 передавайте в виде числа
// // используйте объект country
// // результат работы ф-ции getPopulation присвойте в переменную и выведите в консоль
// const whatPopulation = getPopulation.apply(country, [43000]);
// console.log(whatPopulation);

// /* ===> 4 <=== */
// const transaction = {
//   amount: 1200,
//   operation: 'sell',
//   currency: 'USD',
//   exchange: 'NYSE',
//   printTransaction() {
//     console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
//   },
// };

// const anotherTransaction = {
//   amount: 400,
//   operation: 'buy',
//   currency: 'USD',
//   exchange: 'NASDAQ',
// };

// // вызовите метод transaction.printTransaction так, чтобы в консоль вывелось
// // '400 USD - buy on NASDAQ'
// // используйте объект anotherTransaction как контекст
// const usd400 = transaction.printTransaction.apply(anotherTransaction);

// ============================================================================================================Функция с закрепленным контекстом

// /* ===> 1 <=== */
// const student = {
//   name: 'Tom',
// };

// function sayName() {
//   console.log(this.name);
// }

// /*
//  * создайте ф-цию sayStudentName которая будет выводить в консоль имя студента 'Tom'
//  * используйте .bind и ф-цию sayName
//  */
// const sayStudentName = sayName.bind(student);
// sayStudentName();
// /*
//  * создайте ф-цию sayBruceName которая будет выводить в консоль имя 'Bruce'
//  * используйте ф-цию sayName и .bind с нужным объектом
//  */
// const sayBruceName = sayName.bind({ name: 'Bruce' });
// sayBruceName();
// /* ===> 2 <=== */
// const company = {
//   companyName: 'Microsoft',
// };

// function greeting(firstName, lastName) {
//   console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
// }

// /*
//  * создайте ф-цию specialGreeting которая будет выводить в консоль
//  * 'Hello, Bob Marley. Welcome to the Microsoft`
//  * используйте ф-цию greeting и .bind с нужным объектом и аргументами
//  * specialGreeting не должна принимать ни одного аргумента
//  */
// const specialGreeting = greeting.bind(company, 'Bob', 'Marley');
// specialGreeting();
// /* ===> 3 <=== */
// const country = {
//   countryName: 'Ukraine',
//   capital: 'Kyiv',
// };

// function getPopulation(population) {
//   return `Population in ${this.countryName} is ${population}`;
// }

// /*
//  * создайте ф-цию getUkrainePopulation которая будет возвращать строку
//  * 'Population in Ukraine is 43000`
//  * 43000 передавайте в виде числа
//  * используйте ф-цию getPopulation и .bind с нужным объектом и аргументами
//  * getUkrainePopulation не должна принимать ни одного аргумента
//  */
// const getUkrainePopulation = getPopulation.bind(country, 43000);
// console.log(getUkrainePopulation());
// /* ===> 4 <=== */
// const transaction = {
//   amount: 1200,
//   operation: 'sell',
//   currency: 'USD',
//   exchange: 'NYSE',
//   printTransaction() {
//     console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
//   },
// };

// const anotherTransaction = {
//   amount: 400,
//   operation: 'buy',
//   currency: 'USD',
//   exchange: 'NASDAQ',
// };

// /*
//  * создайте ф-цию printSpecialTransaction которая будет выводить в консоль
//  * '400 USD - buy on NASDAQ`
//  * используйте метод transaction.printTransaction и .bind с нужным объектом
//  * printSpecialTransaction не должна принимать ни одного аргумента
//  */
// const printSpecialTransaction = transaction.printTransaction.bind(anotherTransaction);
// printSpecialTransaction();

// ============================================================================================================Полное имя

// const user = {
//   firstName: 'Zidan',
//   lastName: 'Madrid',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   setFullName(fullName) {
//     const fullName2 = fullName.split(' ');
//     user.firstName = fullName2[0];
//     user.lastName = fullName2[1];
//   },
// };
// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.getFullName());
// user.setFullName('Mery Jane');
// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.getFullName());

// ============================================================================================================

// function compareObjects(obj1, obj2) {
//   let exam = true;
//   const arr1 = Object.entries(obj1);
//   const arr2 = Object.entries(obj2);
//   //   console.log(arr2);
//   arr1.reduce((acc, [key, value], index) => {
//     // console.log(key, value);
//     // console.log(arr2[index][0], arr2[index][1]);
//     console.log(`${key} === ${arr2[index][0]}, ${value} === ${arr2[index][1]}`);
//     console.log(!(key === arr2[index][0]), !(value === arr2[index][1]));
//     if (!(key === arr2[index][0]) || !(value === arr2[index][1])) {
//       exam = false;
//     }
//   }, 0);

//   return exam;

//   arr1.forEach((element) => {
//     index = 0;
//     console.log(index);
//     index += 1;
//     console.log(index);
//   });
// }

// examples
// const obj1 = {
//   name: 'Tom',
//   age: 17,
// };

// const obj2 = {
//   name: 'Bob',
//   age: 117,
// };

// const obj3 = {
//   name: 'Bob',
//   age: 17,
//   student: false,
// };

// const obj33 = {
//   age: 17,
//   student: false,
//   name: 'Bob',
// };

// const obj4 = {
//   name: 'Tom',
//   age: 17,
// };

// -----------============================================================================Сравнить 2 объекта

// input: obj1, obj2;
// output: Boolean;

// 1. объявляем переменную bollean;
// 2. приводим объекты к масиву для сравнения через .reduce();
// 3. проводим сравнение массивов через индексы, где:
//     - item - вложенные массивы, в котором item[0] - ключ, item[1] - значение ключа;
// 4. В .reduce() через if () - если ключ или значение не равно - переменная  Boolean = false$
// 5. Возвращаем переменную Boolean;
// 6. проводим тестирование и вносим правки в алгоритм
// 7. Дополнительные правки:
//     - проверка на равенство длины массивов;
//     - сортировка вложенных массивов по алфавиту;

// function compareObjects(obj1, obj2) {
//   let exam = true;
//   const arr1 = Object.entries(obj1).sort();
//   const arr2 = Object.entries(obj2).sort();
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   arr1.reduce((acc, [key, value], index) => {
//     if (!(key === arr2[index][0]) || !(value === arr2[index][1])) {
//       exam = false;
//     }
//   }, 0);

//   return exam;
// }

// console.log(compareObjects(obj2, obj33));

// ----------------------------------------------option1 BAD

// function compareObjects(obj1, obj2) {
//   const arr1 = Object.entries(obj1);
//   const arr2 = Object.entries(obj2);

//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let index = 0; index < arr1.length; index += 1) {
//     const key = arr1[index];
//     // const key2 = arr2[index];
//     const value1 = obj1[key];
//     const value2 = obj2[key];
//     console.log(key, value1, value2);

//     if (value1 !== value2) {
//       return false;
//     }
//   }
// }

// compareObjects(obj2, obj1);

// ==============================option2 refact SOME

// function compareObjects(obj1, obj2) {
//   const keys1 = Object.entries(obj1);

//   if (keys1.length !== Object.entries(obj2).length) {
//     return false;
//   }

//   return !keys1.some((key) => obj1[key] !== obj2[key]);
// }

// console.log(compareObjects(obj1, obj1));

// ========================================================================This в callback

// const event = {
//   message: `welcome to the party!`,
//   guests: [
//     {
//       name: 'Fill',
//       age: 12,
//       email: 'f@list.rust',
//     },
//     {
//       name: 'Gill',
//       age: 17,
//       email: 'g@list.rust',
//     },
//     {
//       name: 'Bill',
//       age: 19,
//       email: 'b@list.rust',
//     },
//     {
//       name: 'Zill',
//       age: 29,
//       email: 'z@list.rust',
//     },
//     {
//       name: 'Hill',
//       age: 9,
//       email: 'h@list.rust',
//     },
//     {
//       name: 'Dbill',
//       age: 99,
//       email: 'd@list.rust',
//     },
//   ],
//   getInvitations() {
//     return this.guests
//       .filter(({ age }) => age >= 18)
//       .map(({ name, email }) => ({ email, message: `Dear ${name}! ${this.message}` }));
//   },
// };

// console.log(event.getInvitations());

// ========================================================================This в callback

// const wallet = {
//   transaction: [10, 25, 12, 99, 199, -20, -100, -199],
//   getMax() {
//     return Math.max(...this.transaction);
//   },
//   getMin() {
//     return Math.min(...this.transaction);
//   },
// };

// console.log(wallet.getMax());
// console.log(wallet.getMin());

// ========================================================================This в callback

// function sumOfSquares() {
//   let array = [...arguments].reduce((acc, number) => acc + number * number, 0);
//   return array;
// }

// console.log(sumOfSquares(2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10, 5));

// ========================================================================Обертка - шпион

// saveCalls:
// input: function;
// output: function withMemory;

// withMemory:
// input: function
// output:

// function test(a, b) {
//   return a + b;
// }

// function saveCalls(func) {
//   const calls = [];
//   function withMemory(...args) {
//     calls.push(args);

//     // console.log(args);
//     return func.apply(this, args);
//   }

//   withMemory.calls = calls;
//   console.log(calls);
//   return withMemory;
// }

// const testCall = saveCalls(test);
// testCall(13, 2);
// testCall(2, 4);
// testCall(8, 1);

// ========================================================================Корабль - прототипы

// const vehicle = {
//   move() {
//     console.log(`${this.name} is moving`);
//   },
//   stop() {
//     console.log(`${this.name} stopped`);
//   },
// };

// const ship = {
//   name: 'Argo',
//   startMachine() {
//     console.log(`${this.name} lifting anchr up`);
//     ship.move();
//   },
//   stopMachine() {
//     console.log(`${this.name} lifting anchor down`);
//     ship.stop();
//   },
//   __proto__: vehicle,
// };

// // ship.move();
// // ship.stop();
// // ship.startMachine();
// // ship.stopMachine();

// // console.log(Object.keys(ship));

// ========================================================================Перебор собственных свойств объекта (for..in)

// // const getOwnProps = (obj) => Object.keys(obj); // -----только собственные свойства

// function getOwnProps(obj) {
//   const arraySelfProps = [];
//   for (let prop in obj) {
//     if (obj.hasOwnProperty(prop) && typeof obj[prop] !== typeof getOwnProps) {
//       console.log(prop);
//       arraySelfProps.push(prop);
//     }
//   }
//   return arraySelfProps;
// }

// console.log(getOwnProps(ship));
// console.log(Object.keys(ship));

// ========================================================================Конструктор объектов - прототипы
// function User:
// input: String, Number
// output: undefined;

// proto.requestNewPhoto:
// input: ничего, это метод коллбэк;
// output: undefined

// proto.setAge:
// input: Number
// output: результат if => false or Number;

// 1. функция-конструктор принимает два значения: имя и возраст(name, age);
// 2. имя и возраст должны записываться в контекст объекта, в котором вызывается данный метод (через .this);
// 3. нужно создать прототип, который будет иметь методы:
//     - requestNewPhoto: Выводит в консоль текст: `New photo request was sent for ${name}`;
//     - setAge: перезаписывает свойство age и выводит в консоль метод 'requestNewPhoto' if (age >= 25);
//       - if (age < 0) => return false and break; else => return age;

// const proto = {
//   requestNewPhoto() {
//     console.log(`New photo request was sent for ${name}`);
//   },
//   setAge(age) {
//     // this.age = age;
//     if (age >= 25) {
//       console.log(this.requestNewPhoto());
//     }

//     if (age < 0) {
//       return false;
//     } else {
//       return (this.age = age);
//     }
//   },
// };

// function User(name, age) {
//   this.name = name;
//   this.age = age;

//   this.requestNewPhoto = function () {
//     console.log(`New photo request was sent for ${name}`);
//   };

//   this.setAge = function (num) {
//     if (num >= 25) {
//       console.log(this.requestNewPhoto());
//     }

//     if (num < 0) {
//       return false;
//     } else {
//       return (this.age = num);
//     }
//   };
// }

// const newUser = new User('Barbara', 44); // создаём новый массив через созданный конструктор
// console.log(newUser); // Выводим новый массив - << true >> ===> User{name: "Barbara", age: 44};

// // тесты метода proto.setAge ===========================
// console.log(proto.setAge(20)); // тест метода
// console.log(proto.setAge(-20));
// proto.setAge(26);
// console.log(proto.setAge('yh'));
// console.log(proto.setAge([1, 2, 3]));

// // тест унаследованного метода ==============================
// newUser.requestNewPhoto(); // ++
// console.log(newUser.setAge(-1), newUser);
// console.log(newUser.setAge(0), newUser);
// console.log(newUser.setAge(21), newUser);
// console.log(newUser.setAge(26), newUser);
// console.log(newUser.setAge('yh'), newUser);

// ======================================================================option #2
// function User:
// input: String, Number
// output: undefined;

// requestNewPhoto:
// input: ничего, это метод коллбэк;
// output: undefined

// setAge:
// input: Number
// output: результат if => false or Number;

// 1. функция-конструктор принимает два значения: имя и возраст(name, age);
// 2. имя и возраст должны записываться в контекст объекта, в котором вызывается данный метод (через .this);
// 3. нужно создать два прототипа:
//     - requestNewPhoto: Выводит в консоль текст: `New photo request was sent for ${name}`;
//     - setAge: перезаписывает свойство age и выводит в консоль `New photo request was sent for ${name}`; if (age >= 25);
//       - if (age < 0) => return false and break; else => return age;

// создаём функцию User
// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// User.prototype.sayHi = function () {
//   console.log(`Hi, I am ${this.name}`);
// };

// User.prototype.requestNewPhoto = function () {
//   console.log(`New photo request was sent for ${this.name}`);
// };

// User.prototype.setAge = function (num) {
//   if (num >= 25) {
//     console.log(`New photo request was sent for ${this.name}`);
//   }

//   if (num < 0) {
//     return false;
//   } else {
//     return (this.age = num);
//   }
// };

// // создаём функцию для просмотра свойств собственных и прототипов
// function test1(func) {
//   for (let i in func) {
//     console.log(i);
//   }
// }

// console.log(test1(User)); // - тестируем на наличие присвоенного прототипа - << true >>

// const newUser = new User('Koko', 87); // создаём объект через конструктор

// newUser.sayHi(); // естируем на наличие присвоенного прототипа - << true >>

// console.log(newUser); // тестируем объект- << true >> ===> User {name: "Koko", age: 87};
// есть унаследованные методы в прототипе: [[Prototype]]: Object; requestNewPhoto: ƒ requestNewPhoto(); setAge: ƒ setAge(num);

// newUser.requestNewPhoto(); // тестируем прототип - << true >>

// тестируем прототип setAge
// console.log(newUser.setAge(26));
// console.log(newUser.setAge(24));
// console.log(newUser.setAge(-1));
// console.log(newUser.setAge(0));
// console.log(newUser.setAge('tg'));
// console.log(newUser.setAge([1, 2, 3]));

// ======================================================================Объект пользователя

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(value) {
//     const [firstName, lastName] = value.split(' ');
//     this.firstName = firstName;
//     this.lastName = lastName;
//   },
// };

// console.log(user.fullName);
// user.fullName = 'Mikki Muse';
// console.log(user.fullName);

// ======================================================================Конструктор объектов

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHi() {
//     console.log(`Hi, I am ${this.name}`);
//   }

//   requestNewPhoto() {
//     console.log(`New photo request was sent for ${this.name}`);
//   }

//   setAge(age) {
//     if (age < 0) {
//       return false;
//     } else {
//       this.age = age;
//       if (age >= 25) {
//         console.log(`New photo request was sent for ${this.name}`);
//       }
//     }

//     return age;
//   }

//   static createEmpty() {
//     return {
//       name: '',
//       age: null,
//     };
//   }
// }

// // // testing data
// // const user007 = new User('Vladimir', 143);
// // console.log(user007);
// // user007.sayHi();
// // user007.requestNewPhoto();
// // user007.setAge(87);
// // user007.setAge(24);
// // console.log(user007);
// // console.log(user007.setAge(-1));
// // console.log(user007.creatEmpty);
// // console.log(User.creatEmpty);
// // const user001 = User.createEmpty();
// // console.log(user001);

// ======================================================================Корабль

// class Vehicle {
//   constructor(name, numberOfWheels) {
//     this.name = name;
//     this.numberOfWheels = numberOfWheels;
//   }

//   move() {
//     console.log(`${this.name} is moving`);
//   }

//   stop() {
//     console.log(`${this.name} is stopped`);
//   }
// }

// class Ship extends Vehicle {
//   move() {
//     console.log(`${this.name} lifting anchor up`);
//     super.move();
//   }

//   stop() {
//     super.stop();
//     console.log(`${this.name} lifting anchor down`);
//   }
// }

// // // test data
// // const avrora = new Ship('Avrora', 0);
// // console.log(avrora);
// // avrora.move();
// // avrora.stop();

// ======================================================================Защищенные поля

// // export
// class Wallet {
//   #balance = 0;

//   getBalance() {
//     return this.#balance;
//   }

//   deposit(value) {
//     this.#balance += value;
//   }

//   withdraw(value) {
//     if (value > this.#balance) {
//       console.log(`No enough founds`);
//       return;
//     }

//     this.#balance -= value;
//   }
// }

// // test data
// const myWallet = new Wallet();
// console.log(myWallet.getBalace());
// myWallet.deposit(100);
// console.log(myWallet);
// myWallet.deposit(60);
// console.log(myWallet);
// myWallet.withdraw(200);
// console.log(myWallet);
// myWallet.withdraw(75);
// console.log(myWallet);
// myWallet.withdraw(25);
// console.log(myWallet);
// console.log(myWallet.balance);

// ======================================================================Order класс

// // input: number, string, string
// // output: undefined

// //  - создать класс Order
// //  - конструктор принимает аргументы: (price, city, type);
// //  - ID - рандумный;
// //  - по умолчанию заказ false;
// //  - класс имеет следующие поля  со следующими типами данных:
// //      * @field {string} id - генерируется рандемно
// //      * @field {number} price - передаётся как аргумент
// //      * @field {date} dateCreated - генерируется при создании заказа Через метод --> Date();
// //      * @field {boolean} isConfirmed - по умолчанию faled;
// //      * @field {date} dateConfirmed - генерируется при активации метода confirmOrder();
// //      * @field {string} city  - передаётся как аргумент
// //      * @field {string} type - передаётся как аргумент
// //  - класс имеет следующие методы:
// // * checkPrice() - проверяет сумму заказа: if (summ > 1000) {true} else {false};
// // * confirmOrder() - Меняет поле --> isConfirmed = true; и задаёт значение полю -->  dateConfirmed = Date();
// // * isValidType() - как аргумент принимает string; должен проверять только два значени --> if 'Buy' --> return true; if 'Sell' --> return false;

// // export
// class Order {
//   randomId() {
//     return (Math.random() * 10).toFixed(0);
//   }

//   id = this.randomId();

//   dateCreated = new Date();

//   isConfirmed = false;

//   dateConfirmed = null;

//   constructor(price, city, type) {
//     this.price = price;
//     this.city = city;
//     this.type = type;
//   }

//   checkPrice() {
//     if (this.price > 1000) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   confirmOrder() {
//     this.isConfirmed = true;
//     this.dateConfirmed = new Date();
//   }

//   isValidType() {
//     if (this.type === 'Buy' || this.type === 'Sell') {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// // // testing Data
// // // right value
// // const newOrder = new Order(1050, 'Lacosta', 'Buy');
// // console.log(newOrder);
// // console.log(newOrder.checkPrice());
// // newOrder.confirmOrder();
// // console.log(newOrder);
// // console.log(newOrder.isValidType());

// // // enither value
// // const newOrder2 = new Order(500, 'Lacosta', 'Buys');
// // console.log(newOrder2);
// // console.log(newOrder2.checkPrice());
// // newOrder2.confirmOrder();
// // console.log(newOrder2);
// // console.log(newOrder2.isValidType());

// ======================================================================User repository

// // class User:
// // input: constructor: number(id), string(name), string(sessionId);
// // output: ?
// // - закрыта модификация полей;
// // - возможность чтения полей;

// // class UserRepository:
// // input: constructor: number(id), string(name), string(sessionId);
// // output: ?
// // - масив должен быть заморожен методом Object.freeze();
// // - четыре геттера: id, name, sessionId, users[];
// // - имеет методы:
// //      - getUsersName(), getUsersIds() ==> это фильтр, который из масиива объектов, создаёт массив значений ключей
// //      - getUsersNameById(); - это фильтр, который по значению id возвращает значение ключа name этого де объекта;

// // export
// class UserRepository {
//   //   #users;

//   constructor(users) {
//     this._users = Object.freeze(users);
//   }

//   getUserNames() {
//     let arr = [];
//     this.users.forEach((obj) => arr.push(obj.name));
//     return arr;
//   }

//   getUserIds() {
//     let arr = [];
//     this.users.forEach((obj) => arr.push(obj.id));
//     return arr;
//   }

//   getUserNameById(id) {
//     let name = '';
//     this.users.forEach((obj) => {
//       if (obj.id === id) {
//         name = obj.name;
//       }
//     });

//     return name;
//   }

//   get id() {
//     return this._id;
//   }

//   get name() {
//     return this._name;
//   }

//   get sessionId() {
//     return this._sessionId;
//   }

//   get users() {
//     return this._users;
//   }
// }

// // export
// class User extends UserRepository {
//   //   #id;
//   //   #name;
//   //   #sessionId;

//   constructor(id, name, sessionId) {
//     super(id, name, sessionId);
//     this._id = id;
//     this._name = name;
//     this._sessionId = sessionId;
//     this._users = [{ id, name, sessionId }];
//     // super(this.users); ----- нужен?
//   }
// }

// const newUser = new User('6001', 'Mikhle', 'session-What???');
// console.log(newUser); // +++
// console.log(newUser.id); // +++
// console.log(newUser.name); // +++
// console.log(newUser.sessionId); // +++
// console.log(newUser.users); // +++
// console.log(newUser.getUserNames()); // +++
// console.log(newUser.getUserIds()); // +++
// console.log(newUser.getUserNameById('6001')); // +++

// // 1. мы не передали юзерс, но заюзали фриз - правильно?
// // 2. почему если указывается только геттер, нужно задавать приватность через "_"?
// // 3. судя по условиям задачи, класс UserRepository - должен быть коллектором всех объектов, которые объявляются через класс User - в этом случае абсолютно не ясен синтаксис;

// ======================================================================
