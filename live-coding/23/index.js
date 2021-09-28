// input: object
// output: undefined
function saveUser(userData) {
  // input: string (url), obj (header, body....)
  // output: promis (obj)
  const res = fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    // input: callback;
    // output: promis;
    .then((response) => response.json()) // <=== тут у нас промис
    .then((body) => console.log(body)); // <=== тут у нас боди промиса

  console.log(res);
}

// testdata
const user = {
  email: 'dima@email.com',
  firstName: 'Dima',
  lastName: 'Ursul',
  city: 'Kiev',
  age: '34',
};

console.log(JSON.stringify(user));

saveUser(user);
