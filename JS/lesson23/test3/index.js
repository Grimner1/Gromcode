const listElem = document.querySelector('.list');
const creatButton = document.querySelector('.create-task-btn');
const fieldinput = document.querySelector('.task-input');

const tasks = [];
let taskId = 1;

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);

      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
  fieldinput.value = '';
};

// -------------------------------------------

const pressToAddTask = () => {
  if (!fieldinput.value) {
    return;
  } else {
    const textOfInput = fieldinput.value;
    const newTask = { text: textOfInput, done: false, id: taskId };
    taskId += 1;
    tasks.push(newTask);
    // console.log(tasks); //------------------
    listElem.innerHTML = '';

    renderTasks(tasks);
  }
};

creatButton.addEventListener('mouseup', pressToAddTask);

// -------------------------------------------

const funcDuneCheckbox = (event) => {
  // console.log(event.target.closest('li'));
  const liElement = event.target.closest('li');
  const checkboxElement = event.target;
  // console.log(liElement);
  //   console.log(checkboxElement.dataset.id);
  //   console.log(tasks[checkboxElement.dataset.id].done);
  //   console.log(checkboxElement.checked);
  const findEl = tasks.filter(({ id }) => {
    // console.log(id);
    // console.log(checkboxElement.dataset.id == id);
    if (id == checkboxElement.dataset.id) {
      return id;
    }
  });
  // console.log(findEl[0].done);
  if (checkboxElement.checked) {
    liElement.classList.add('list__item_done');
    // console.log(checkboxElement.dataset.id);
    findEl[0].done = true;
    // tasks[checkboxElement.dataset.id].done = true;
    tasks;
  } else {
    liElement.classList.remove('list__item_done');
    // console.log(checkboxElement.dataset.id);
    findEl[0].done = false;
    // tasks[checkboxElement.dataset.id].done = false;
  }
  listElem.innerHTML = '';
  renderTasks(tasks);
};

listElem.addEventListener('change', funcDuneCheckbox);

// -----------------добавление элементов по умолчанию

const defaultElement = [
  { text: 'Buy milk', done: true },
  { text: 'Pick up Tom from airport', done: true },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: false },
  { text: 'Buy meat', done: false },
];

defaultElement.map(({ text, done }) => {
  const newTask = { text, done, id: taskId };
  taskId += 1;
  tasks.push(newTask);
  listElem.innerHTML = '';
  renderTasks(tasks);
});
