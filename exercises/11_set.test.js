test("11_set-1: has an add method and a has method", () => {
  // Crea un nou Set anomenat 'mySet'
  const mySet = new Set();
  // Afegeix els números 1, 2 i 3 al set
  mySet.add(1);
  mySet.add(2);
  mySet.add(3);

  expect(mySet.has(1)).toBe(true);
  expect(mySet.has(2)).toBe(true);
  expect(mySet.has(3)).toBe(true);
  expect(mySet.has(4)).toBe(false);
});

test("11_set-2: doesn`t allow duplicates", () => {
  // Crea un nou Set
  const mySet = new Set();
  // Afegeix els següents números al set utilitzant set.add(num): 1, 1, 1
  mySet.add(1);
  mySet.add(1);
  mySet.add(1);

  expect(mySet.has(1)).toBe(true);
  expect(mySet.has(2)).toBe(false);
  expect(mySet.has(3)).toBe(false);
  expect(mySet.has(4)).toBe(false);
});
