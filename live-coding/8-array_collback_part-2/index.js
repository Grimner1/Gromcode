const numbersList = [5, 0, 8, 10, -4, 50, 220];
// =====for map
console.log('numberList before map ', numbersList);

// input: callback, obj (optional)
// output: new array

// ====for callback
// input: number, index(optional), array (optional)
// output: number

// ----------------------------
const mapRes =  numbersList.map(function (el, index, array) {
    // console.log(el);
    // console.log(index);
    // console.log(array);

    return el * el;
});
// -----------------------

const mapRes =  numbersList.map(el => el * el);

console.log(mapRes);

console.log('numberList after map ', numbersList);

// ==================================FOREACH

// input: calback
// output: undrfined


// ---CALLBACK
// input: element, index(number), array
// output: undrfined



const foreach = numbersList.forEach(el => {
    if (el > 0) {
        console.log(el);
    };

// return el;
});

// ----------------------------------FOREACH_V2

const foreach = numbersList.forEach(el => el > 0 ? console.log(el) : console.log(el));


console.log(foreach);
console.log('numberList after foreach ', numbersList);

// ==================================================FIND

// input: callback
// output: element || undefined

// --------------CALLBACK
// input: calback
// output: boolean

const findRes = numbersList.find(el => {
    if (el % 2 === 0 && el > 0) {
        return true;
    } else {
    return false;
    };
});

// ---------------------

const findRes = numbersList.find(el => el % 2 === 0 && el > 0);

console.log(findRes);

// ==================================================.REDICE

const transactions = [5, 11, 8, 10, -4, 50, 220, 1203, 556, 41];

input: calback, number (accam. value, optional)
output: element

// --------------CALLBACK

input: acc (number), number, index (optional), array (optional)
output: acc (number)

const reduceRes = transactions.reduce((acc, element, index) => {
    console.log('step ' + index + ', acc is: ' + acc + ', element is: ' + element);

    acc += element;
    return acc;
}, 0);

// -------------------

const reduceRes = transactions.reduce((acc, element, index) => acc += element);

console.log(reduceRes);