const body = document.querySelector('body');

function handleClick(event) {
  console.log(event.target.dataset.pageNumber);
}

body.addEventListener('click', handleClick);
