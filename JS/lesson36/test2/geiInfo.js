import { getFetch } from './fetchGateway.js';
import { renderList, renderUserInfo } from './renderer.js';

const inputForm = document.querySelector('.name-form__input');
const spinner = document.querySelector('.spinner');

const url = 'https://api.github.com/users/';

const showShinner = () => {
  spinner.classList.remove('spinner_hidden');
};

const hideSpinner = () => {
  spinner.classList.add('spinner_hidden');
};

const getUserRepo = async (repoUrl) => {
  const userInfoInObject = await getFetch(repoUrl);
  renderList(userInfoInObject);
};

// ============= специально оставил то, что было до рефакторинга
// getFetch(repoUrl)
//   .then((userInfoInObject) => renderList(userInfoInObject))
//   .catch(() => alert('Failed to load data'))
//   .finally(() => {
//     hideSpinner();
//   });

export const getUserInfo = async () => {
  showShinner();
  const userUrl = inputForm.value;

  try {
    const userData = await getFetch(url + userUrl);
    const repoUrl = renderUserInfo(userData);
    getUserRepo(repoUrl);
  } catch {
    alert('Failed to load data');
  } finally {
    hideSpinner();
  }

  // ============= специально оставил то, что было до рефакторинга
  // return getFetch(url + userUrl)
  //   .then((userData) => renderUserInfo(userData))
  //   .then((repoUrl) => getUserRepo(repoUrl))
  //   .catch(() => alert('Failed to load data'))
  //   .finally(() => {
  //     hideSpinner();
  //   });
};
