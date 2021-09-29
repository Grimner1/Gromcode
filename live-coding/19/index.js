function printMessage(country, city) {
  console.log(this);

  console.log(`Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`);
}

const user = {
  firstName: 'Andrey',
  age: 111,
  tempFunc: 'some secret data',
};

// printMessage('Urkaine', 'Lviv');
//   input: context, arg1 ... argN
//   output: func

console.dir(printMessage);

// option 1
const printMessageBinded = printMessage.bind(user);
printMessageBinded('Urkaine', 'Lviv');

// option 2
const printMessageBinded2 = printMessage.bind(user, 'UK', 'London');
printMessageBinded2('France', 'Paris');

// option 3
const printMessageBinded3 = printMessage.bind(user, 'Poland');
printMessageBinded3('Warsaw');

printMessage.bind(user)('www', 'yyy');

// ----------------------------------------------

// input: func, context,  ...args
// output: func

function myBind(func, context, ...args) {
  // call
  // input: context, ...args
  // output: func result

  return function (...funcArgs) {
    func.call(context, ...args, ...funcArgs);
  };
}

// test data
const testFunc = myBind(printMessage, user, 'UK');

testFunc('LasVegas');

// ----------------------------------------------

// input: func, context,  ...args
// output: func

function myBindAdvanced(func, context, ...args) {}

// test data
