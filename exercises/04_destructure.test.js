const noop = () => {};

const getAddress = () => ({
  city: "Salt Lake City",
  state: "UT",
  zip: 84115,
  coords: {
    lat: 40.776608,
    long: -111.920485,
  },
});

const getNumbers = () => [1, 2, 3, 4, 5, 6];

const getNestedNumbers = () => [1, 2, [3, 4, [5, 6]]];

test("04_destructure-1: can be used to pull apart objects", () => {
  // Utilitzant desestructuració, crida `getAddress()` per crear variables per 'city', 'state' i 'zip'.
  // const address = getAddress();
  // const city = address.city;
  // const state = address.state;
  // const zip = address.zip;

  const { city, state, zip } = getAddress();

  expect(city).toBe("Salt Lake City");
  expect(state).toBe("UT");
  expect(zip).toBe(84115);
});

test("04_destructure-2: sets missing values to undefined", () => {
  // Utilitzant desestructuració, crida `getAddress()` i crea una variable 'address'.
  const { address } = getAddress();
  expect(address).toBeUndefined();
});

test("04_destructure-3: can be used to pull apart objects", () => {
  // Utilitzant desestructuració, crida `getAddress()` i crea les variables 'city', 'state' i 'zip'.
  const { city, state, zip } = getAddress();

  expect(city).toBe("Salt Lake City");
  expect(state).toBe("UT");
  expect(zip).toBe(84115);
}); //Aquest exercici està duplicat

test("04_destructure-4: sets missing values to undefined", () => {
  // Utilitzant desestructuració, crida `getAddress()` i crea una variable 'address'.
  const { address } = getAddress();
  expect(address).toBeUndefined();
}); //Aquest exercici està duplicat

test("04_destructure-5: can alias destructured variables", () => {
  // Utilitzant desestructuració, crida `getAddress()` i extreu 'city', 'state' i 'zip', i assigna'ls els àlies c, s, z, respectivament.

  const { city: c, state: s, zip: z } = getAddress();

  expect(c).toBe("Salt Lake City");
  expect(s).toBe("UT");
  expect(z).toBe(84115);
  expect(() => noop(city)).toThrow();
  expect(() => noop(state)).toThrow();
  expect(() => noop(zip)).toThrow();
});

test("04_destructure-6: can destructure nested variables", () => {
  // Utilitzant desestructuració, crida `getAddress()` i crea les variables `lat` i `long`.
  const {
    coords: { lat, long },
  } = getAddress();

  expect(lat).toBe(40.776608);
  expect(long).toBe(-111.920485);
  expect(() => noop(coords)).toThrow();
});

test("04_destructure-7: can be used to pull apart arrays", () => {
  // Crida a getNumbers i extreu el primer valor com `one` i el segon com `two`.
  const [one, two] = getNumbers();

  expect(one).toBe(1);
  expect(two).toBe(2);
});

test("04_destructure-8: can skip indexes in arrays", () => {
  // Crida a getNumbers i extreu el primer valor com `one` i el tercer com `three`.
  const [one, , three] = getNumbers();

  expect(one).toBe(1);
  expect(three).toBe(3);
  expect(() => noop(two)).toThrow();
});

test("04_destructure-9: can reach nested arrays", () => {
  // Crida a getNestedNumbers i extreu el primer valor com `one`, el 3 com `three` i el 6 com `six`.
  const [one, , [three, , [, six]]] = getNestedNumbers();

  expect(one).toBe(1);
  expect(three).toBe(3);
  expect(six).toBe(6);
});
