const a = [1, 6, 4, 2, 8, 10];
const b = [6, 7, 1, 9, 11, 8];


function getDifferences(a, b) {
    let difference = [];

    for (let i of a) {
        if (!b.includes(i)) {
            difference.push(i);
        };
    };

    for (let i of b) {
        if (!a.includes(i)) {
            difference.push(i);
        };
    };

    return difference;
  };

  
  console.log(getDifferences(a, b));