const btn = document.querySelector('.single-use-btn');

function oneMorNot() {
  console.log('clicked');
  btn.removeEventListener('mouseup', oneMorNot);
}

btn.addEventListener('mouseup', oneMorNot);
