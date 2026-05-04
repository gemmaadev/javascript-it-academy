test("26_arrays-1: Map - create an array with the square of each number", () => {
  const numbers = [1, 2, 3, 4];

  // Utilitza map per crear una nova array amb el quadrat de cada número
  const squares = numbers.map((num) => num * num);

  expect(squares).toEqual([1, 4, 9, 16]);
});

test("26_arrays-2: Filter - create an array with only even numbers", () => {
  const numbers = [1, 2, 3, 4];
  // Utilitza filter per crear una nova array només amb números parells
  const evenNumbers = numbers.filter((num) => num % 2 == 0);

  expect(evenNumbers).toEqual([2, 4]);
});

test("26_arrays-3: Find - find the first number greater than 10", () => {
  const numbers = [1, 10, 8, 11];

  // Utilitza find per trobar el primer número major a 10
  const result = numbers.find((num) => num > 10);
  /* INTRODUEIX EL TEU CODI AQUÍ */

  expect(result).toBe(11);
});

test("26_arrays-4: Reduce - calculate the total sum of numbers", () => {
  const numbers = [13, 7, 8, 21];

  // Utilitza reduce per calcular la suma total
  const sum = numbers.reduce((acumulador, num) => acumulador + num, 0);

  expect(sum).toBe(49);
});

test("26_arrays-5: Filter, multiply and sum in a single line", () => {
  const numbers = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

  // Crea una funció en una sola línia que:
  // - Filtri els nombres >= 10
  // - Multipliqui cada nombre filtrat per 2
  // - Calculi la suma dels nombres resultants
  const result = numbers
    .filter((num) => num >= 10)
    .map((num) => num * 2)
    .reduce((acumulador, num) => acumulador + num, 0);
  /* INTRODUEIX EL TEU CODI AQUÍ */

  expect(result).toBe(130); // (10+15+17+11+12)*2 = 130? Verifica: 10*2+15*2+17*2+11*2+12*2 = 20+30+34+22+24 = 130
  // Correcció: Suma abans = 10+15+17+11+12 = 65, després *2 cada un i suma = 130
});

test("26_arrays-6: Every and Some - check if elements are greater than 10", () => {
  const numbers = [11, 12, 13, 14];

  // Utilitza every per comprovar si TOTS els elements són > 10
  const allGreaterThan10 = numbers.every((num) => num > 10);

  // Utilitza some per comprovar si ALGUN element és > 10
  const someGreaterThan10 = numbers.some((num) => num > 10);

  expect(allGreaterThan10).toBe(true);
  expect(someGreaterThan10).toBe(true);
});

test("26_arrays-7: Every and Some - case where not all are greater than 10", () => {
  const numbers = [8, 11, 12, 9];

  // Utilitza every per comprovar si TOTS els elements són > 10
  const allGreaterThan10 = numbers.every((num) => num > 10);

  // Utilitza some per comprovar si ALGUN element és > 10
  const someGreaterThan10 = numbers.some((num) => num > 10);

  expect(allGreaterThan10).toBe(false);
  expect(someGreaterThan10).toBe(true);
});
