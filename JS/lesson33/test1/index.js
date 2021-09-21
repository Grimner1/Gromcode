const input = document.querySelector('.name-form__input');
const button = document.querySelector('.name-form__btn');

const userAvatar = document.querySelector('.user__avatar');
const userNameField = document.querySelector('.user__name');
const userLocation = document.querySelector('.user__location');

const url = 'https://api.github.com/users/';

const fetchUserData = (userName) => {
  console.log(`${url}${userName}`);
  return fetch(`${url}${userName}`).then((response) => response.json());
};

const getUserData = (userData) => {
  console.log(userData);
};

const onSearch = () => {
  const searchText = input.value;
  fetchUserData(searchText).then((downloadData) => getUserData(downloadData));
};

button.addEventListener('click', onSearch);
