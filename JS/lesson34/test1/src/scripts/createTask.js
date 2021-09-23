import { setItem } from './storage.js';

// ----------------------old version for localStorage
// let taskId = 1;
// const randumId = () => Math.random();

// export const createTask = (text) => {
//   const tasksList = getItem('tasksList') || [];
//   const newTask = { text, done: false, id: randumId() };
//   taskId += 1;
//   const tasks = [...tasksList, newTask];
//   setItem('tasksList', tasks);
// };

// ----------------------

export const createTask = (text) => {
  const newTask = { text, done: false };
  setItem(newTask);
};
