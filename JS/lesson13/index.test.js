it('17 must be 17', () => {
  expect(17).toEqual(17);
});

it('18 not 17', () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = (numbers) => numbers.filter((num) => num % 2 == 0);

it('func return even numbers', () => {
  expect(1, 2, 3, 4, 5, 6).toEqual(2, 4, 6);
});
