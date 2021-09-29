const listElem = document.querySelector('.list');

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderTasks = (tasksList) => {
  console.log('render');
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');

      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', index);
      // checkbox.dataset.id = index; // это аналог ерхней строки
      checkbox.checked = done;

      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// 1. add event to the element
// 2. creat event handlers

const creatBtnElement = document.querySelector('.create-task-btn');

// input: object
// output: undefined

// 1. get data input text
// 2. creat task object, add to array
// 3. re-render

function CreateTaskHandler(event) {
  console.log(event);

  const inputElement = document.querySelector('.task-input');
  console.dir(inputElement);
  // const value = inputElement.value;
  const { value } = inputElement; // что бы не ругался эслинт строкой выше;
  console.log(value);

  // const task = {
  //   text: value,
  //   done: false,
  // };

  tasks.push({
    text: value,
    done: false,
  });
  renderTasks(tasks);
}

// WEB FLOW
// 1. get data
// 2. render
// 3. update data ==> DON'T UPDATE DOM!!!
// 4. re-render

// input: string, callback
// output: indefined

creatBtnElement.addEventListener('click', CreateTaskHandler);

// algo
// 1. check if clicked on checkbox
// 2. find task where clicked
// 3. upsate task
// 4. re-render

function updateTaskHandler(event) {
  console.log(event.target);
  console.log(event.target.classList);
  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }

  console.log('checkbos is checked');
  console.log(event.target.dataset);
}

listElem.addEventListener('click', updateTaskHandler);
