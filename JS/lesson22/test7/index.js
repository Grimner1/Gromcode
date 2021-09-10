const btn = document.querySelectorAll('.btn');
// console.log(...btn);
const body = document.querySelector('body');
// console.log(body);

const handleClick = (event) => {
  console.log(event.target.textContent);
};

body.addEventListener('click', handleClick);
