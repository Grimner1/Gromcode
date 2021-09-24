//  - по нажатию .submit-button - отправка данных формы на сервер:
//      - собрать данные в объект из: id: email, name, password;
//          или попробовать собрать с массива классов: .form-input
//      - объект отправить на сервер;
//      - объект вывести в алерт;
//      - очистить поля форы;
//  - Если произошло ошибка при создании пользователя - вывести
//       'Failed to create user' в .error-text;
//          - если было изменение в одном из полей - ошибку убрать;

const loginForm = document.querySelector('.login-form');
const inputArray = document.querySelectorAll('.form-input');
const submitButton = document.querySelector('.submit-button');
const emailField = document.querySelector('#email');
const nameField = document.querySelector('#name');
const passField = document.querySelector('#password');
const errorField = document.querySelector('.error-text');

const url = 'https://614c751d59e92d00176ad25f.mockapi.io/tasksList/user';

const setInfo = (userInfo) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userInfo),
  });

const onButtonClick = () => {
  const userInfo = {
    email: emailField.value,
    name: nameField.value,
    password: passField.value,
  };
  setInfo(userInfo)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  //   const response = setInfo(userInfo).then((el) => el);
  //   errorField.innerHTML = response;
  //   alert(response); // <===== как правильно получить ответ от сервера?
};

submitButton.addEventListener('click', onButtonClick);

loginForm.addEventListener(
  'submit',
  function () {
    if (loginForm.reportValidity()) {
      submitButton.setAttribute('enabled');
    } else {
      submitButton.setAttribute('disabled');
    }
  },
  false,
);
