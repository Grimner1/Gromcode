export const body = document.querySelector('body');

function handleClick(event) {
  // console.log(event.target.tagName);
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  console.log(event.target.dataset.pageNumber);
}

body.addEventListener('click', handleClick);
