const loginForm = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');
const errorText = document.querySelector('.error-text');

const url = `https://6141977c357db50017b3db7a.mockapi.io/api/v1/users2/`;
// const user = {
//   email: emailInput.value,
//   name: nameInput.value,
//   password: passwordInput.value,
// };
// const getData = (event) => {
const validateFormHeandler = () => {
  //   const emailText = emailInput.value;
  //   user.email = emailText;

  //   const userName = nameInput.value;
  //   user.name = userName;

  //   const passwordText = passwordInput.value;
  //   user.password = passwordText;

  //   const requiredFields = loginForm.reportValidity();
  if (loginForm.reportValidity()) {
    submitBtn.removeAttribute('disabled', 'disabled');
  } else {
    submitBtn.setAttribute('disabled', 'disabled');
  }
};
loginForm.addEventListener('input', validateFormHeandler);

// const sendDataBtn = document.querySelector('.submit-button');

// eslint-disable-next-line arrow-body-style
// eslint-disable-next-line no-shadow
// eslint-disable-next-line arrow-body-style

// eslint-disable-next-line no-return-assign
// const createUser = (usersData) =>
//   fetch(`https://6141977c357db50017b3db7a.mockapi.io/api/v1/users2/`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json;charset=utf-8' },
//     body: JSON.stringify(usersData),
//   });
// function getUsers() {
//   return fetch(`https://6141977c357db50017b3db7a.mockapi.io/api/v1/users2/`).then((response) =>
//     response.json(),
//   );
// }
// function getUsersById(userId) {
//   return fetch(`${`https://6141977c357db50017b3db7a.mockapi.io/api/v1/users2/`}${userId}`).then(
//     (response) => response.json(),
//   );
// }

// =======
// algo
// read form - get user info (creat userObject)
// send data to server (creat http request)
// handle server response
// =======

const CreatedUserHeandler = (event) => {
  event.preventDefault();

  //   Option 1 BAD
  //   const user = {
  //     email: emailInput.value,
  //     name: nameInput.value,
  //     password: passwordInput.value,
  //   };

  //   Option 2 GOOD

  const userData = Object.fromEntries(new FormData(loginForm));

  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((body) => {
      loginForm.reset();
      alert(JSON.stringify(body));
    })

    // .then(() => getUsers())
    // .then((user) => {
    //   getUsersById(user.length).then((user) => alert(JSON.stringify(user)));
    // })
    // .then(() => {
    //   emailInput.value = '';
    //   nameInput.value = '';
    //   passwordInput.value = '';
    // })
    // eslint-disable-next-line no-return-assign
    .catch(() => (errorText.textContent = 'Failed to create user'));
};
loginForm.addEventListener('submit', CreatedUserHeandler);
