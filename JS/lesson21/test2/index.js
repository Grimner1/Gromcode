export function getItemList() {
  let elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
}
console.log(getItemList());

export function getItemArray() {
  let elements = document.querySelectorAll('.tool');
  //   let elementsArray = [...elements];
  console.dir(Array.from(elements));
  return Array.from(elements);
}

console.log(getItemArray());
