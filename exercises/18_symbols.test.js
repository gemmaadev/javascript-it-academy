test("18_symbols-1: creating symbols", () => {
  // Crea un símbol i comprova que el tipus sigui 'symbol'
  const symbol = Symbol("I wanna be a symbol one day");
  expect(typeof symbol).toBe("symbol");
});

test("18_symbols-2: giving a symbol a description", () => {
  // Crea un símbol amb una descripció
  const symbol = Symbol("use the force"); // dona-li una etiqueta
  expect(String(symbol)).toBe("Symbol(use the force)");
});

test("18_symbols-3: symbols are unique", () => {
  // Comprova que els símbols són únics
  const s1 = Symbol();
  const s2 = Symbol();
  expect(s1 === s2).toBe(false);

  const s3 = Symbol("I am a symbol");
  const s4 = Symbol("I am a symbol");
  expect(s3 === s4).toBe(false);
});

test("18_symbols-4: symbols on objects", () => {
  const symbol = Symbol("metadata");
  // Crea un objecte anomenat `game` que faci que aquest test passi
  const game = {
    name: "The Legend of Zelda",
    releaseDate: "February 21, 1986",
    [symbol]: {
      fans: "about a billion",
    },
  };

  expect(JSON.parse(JSON.stringify(game))).toEqual({
    name: "The Legend of Zelda",
    releaseDate: "February 21, 1986",
  });
  expect(game[symbol]).toEqual({
    fans: "about a billion",
  });
});
