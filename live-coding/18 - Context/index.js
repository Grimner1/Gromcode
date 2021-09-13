'use strict';

export const timer = {
  secondPassed: 0,
  minsPassed: 0,
  timerId: null,

  startTimer() {
    // console.log(this);

    this.timerId = setInterval(() => {
      console.log(this);

      this.secondPassed += 1;

      if (this.secondPassed === 60) {
        this.minsPassed += 1;
        this.secondPassed = 0;
      }
    }, 1000);

    // [1, 2, 3].filter(function () {
    //   console.log('filter this ' + this);
    // });

    // dont work =========
    // setInterval(function () {
    //   console.log(this);

    // work =========
    //   this.secondPassed += 1;
    // }, 1000);

    // work =========
    // setInterval(() => {
    //   console.log(this);

    //   this.secondPassed += 1;
    // }, 1000);

    // work =========
    // setInterval(
    //   function () {
    //     console.log(this);

    //     this.secondPassed += 1;
    //   }.bind(this),
    //   1000,
    // );

    // ==========================
    // fix content with bind:
    // const callbackFunc = function () {
    //   console.log(this);

    //   this.secondPassed += 1;
    // };

    // const bindedCallbackFunc = callbackFunc.bind(this);

    // setInterval(bindedCallbackFunc, 1000);
  },

  stopTimer() {
    clearInterval(this.timerId);
  },

  getTime() {
    let sec;

    if (this.secondPassed < 10) {
      sec = '0' + this.secondPassed;
    } else {
      sec = this.secondPassed;
    }
    return `${this.minsPassed}:${sec}`;
  },

  resetTimer() {
    this.secondPassed = 0;
    this.minsPassed = 0;
  },
};

// test data
// timer.startTimer();
// console.log(timer.getTime());

// lose context case #1 -------
// const startTimerFunc = timer.startTimer;
// startTimerFunc();

// lose context case #2 -------
// [1, 2, 3].filter(function () {
//   console.log('filter this ' + this);
// });

// function filter (callback) {
//     ...
//     ...
//     callback(); --- коллбек вызывается сам по себе
//     ...
//     ...
// }

// function setInterval(callback) {
//  ...
//  ...
//  window.callback();
//  ...
//  ...
// };

// set interval exaple

// setInterval(() => {
//   console.log('Monday');
// }, 2000);

// context
// --- Что нужно понимать при работе с контекстом:
// 1. нужно понимать когда контекст теряется и когда не теряется (всего 2 - 3 типичных (самых распространённых) случая потери контекста);
//      1.1. //
//      1.2. В коллбеках: фиксится с помощю стрелочных функций или binde;
//      1.3. //
// 2. Нужно уметь фиксить контекст;

// конектст это объект в рамках которой выполняется функция
// контест нужен для того, что бы результатом функций из одних объектов можно было использовать в других объектах
// конекст про изоляцию. Переменные внутри объекта изолированы
// конекст один из источников данных для функции.
// Другие источники данных для функции: из глобала и из аргументов и третий источник .this
// Брать данные внутри функции из глобала плохая практика, всё должно быть изолировано.
//
