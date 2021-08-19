// How to work on tech tasks. Step by step guide

// 1. Learn requirement
// 2. Create step by step algo (& input/output for functions)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

// ===============Prime numbers

// algo
// 1. iterate from 2 to number;
// 2. check every number in prime;
//     2.1 iterate from 2 to N;
    // 2.2 check if num / index === 0 - nit prime


// examples
// 9 -->
// step 1...N: 9/2...9*8 

// input: number
// output: undefined

// const primeNumber = num=> {
    
//     for (let index = 2; index <= num; index +=1) {
//         let isPrime = true;

//         for (let number = 2; number < index; number +=1) {
//             if  (index % number === 0) {
//                 isPrime = false;
//                 break;
//             };
//         };

//         if (isPrime) {
//             console.log(index);
//         };
//     };
// };

// input: number
// output: boolean

function isPrime(number) {
    for (let index = 2; index < number; index +=1) {
        if (number % index === 0)         {
            return false;
        };
    };
    return true;
};

function getPrimes(num) {
    for (let index = 2; index <= num; index +=1) {
        if (isPrime(index)) {
            console.log(index);
        };
    };
};

getPrimes(13);

