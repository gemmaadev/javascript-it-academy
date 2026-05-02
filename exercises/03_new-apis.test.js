test("03_new-apis-1: should be easier to determine whether a string includes another", () => {
  const sentence = "It was the best of times. It was the worst of times";
  // crea una variable anomenada `result` que es defineixi com una crida a sentence.includes
  const result = sentence.includes("best");
  expect(result).toBe(true);
});

test("03_new-apis-2: should be easier to repeat a string", () => {
  const repeated = "abc123";
  // crea una variable anomenada `result` que sigui el resultat de repetir la cadena 4 vegades
  const result = repeated.repeat(4);
  expect(result).toBe("abc123abc123abc123abc123");
});

test("03_new-apis-3: should be able to take an array-like object and convert it into an array", () => {
  const obj = { length: 3, 0: "a", 1: "b", 2: "c" };
  // això és encara més útil amb un NodeList com el retornat per document.querySelector
  // crea una variable anomenada `result` i assigna-li una crida a Array.from
  const result = Array.from(obj);
  expect(result).toEqual(["a", "b", "c"]);
});

test("03_new-apis-4: should be easier to fill an array with values", () => {
  const originalArray = new Array(5);
  // crea una variable anomenada `result` i assigna-li un array omplert amb 3s excepte el primer element
  const result = originalArray.fill(3, 1);
  expect(result).toEqual([, 3, 3, 3, 3]); // eslint-disable-line no-sparse-arrays
});

test("03_new-apis-5: should be easy to copy properties from one object to another", () => {
  const source1 = {
    a: {
      b: "c",
      m: [1, 2, 3],
    },
  };
  const source2 = {
    d: false,
    z: 34,
  };
  const source3 = {
    z: 42,
    p: ["a", "b", "c"],
  };

  const target = {
    a: {
      q: "r",
      m: [4, 5, 6],
      s: {
        t: 3,
      },
    },
    d: true,
    p: ["x", "y", "z"],
  };
  // combina les fonts dins del target utilitzant Object.assign
  const result = Object.assign(target, source1, source2, source3);

  expect(result).toEqual({
    a: {
      b: "c",
      m: [1, 2, 3],
    },
    d: false,
    z: 42,
    p: ["a", "b", "c"],
  });

  // això només és aquí per indicar que l'assignació no és profunda
  expect(result).not.toEqual({
    a: {
      b: "c",
      m: [1, 2, 3],
      q: "r",
      s: {
        t: 3,
      },
    },
    d: false,
    z: 42,
    p: ["a", "b", "c"],
  });
});
