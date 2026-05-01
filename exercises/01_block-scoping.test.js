const noop = () => {};
test("01_scope-1: can be used in place of `var`", () => {
  // Declara bandName utilitzant 'let'
  let bandName = "Queen";
  // Declara isBestBand utilitzant 'let'
  let isBestBand = true;

  expect(bandName).toBe("Queen");
  expect(isBestBand).toBe(true);
});

test("01_scope-2: can modify the value of a `let` variable even in the next block statement", () => {
  // Declara releaseName utilitzant 'let'
  let releaseName = "ES6";
  {
    // Modifica el valor de releaseName dins del bloc
    releaseName = "ES2015";
  }
  expect(releaseName).toBe("ES2015");
});

test("01_scope-3: cannot modify the value of a `const` variable", () => {
  function getReleaseName() {
    // Tria el teu costat. Li dius ES6 o ES2015?
    // No pots utilitzar `const` i reasignar el valor!
    let releaseName = "ES6"; // Si li dius ES2015, canvia això a let o var
    releaseName = "ES2015"; // Si li dius ES6, elimina aquesta reasignació
    return releaseName;
  }
  expect(getReleaseName).not.toThrow();
});

test("01_scope-4: is trapped inside of an `if` statement", () => {
  if (true) {
    // Canvia `var` a `let`, perquè b estigui limitat dins de l\'if
    let b = 1;
  }
  expect(() => noop(b)).toThrow("b is not defined");
});

test("01_scope-5: can't redeclare using the same name", () => {
  function doLoop() {
    // Canvia el comptador del bucle a `let` perquè estigui limitat dins del bucle i no es pugui retornar.
    for (let i = 0; i < 10; i++) {
      /* eslint no-empty:"off" */
    }
    return i;
  }

  expect(doLoop).toThrow("i is not defined");
});

test("01_scope-6: means that we can start using block statements", () => {
  // BLOC DE CODI
  {
    // Canvia a una declaració `const`
    const d = 2;
  }

  expect(() => noop("d", d)).toThrow("d is not defined");
});

//////// EXTRA CREDIT ////////

test.skip("01_scope-7: means that we can declare constant with the same name in block statement", () => {
  // Declara una 'd' utilitzant 'const', assignant-li el valor 5
  // BLOC DE CODI
  const d = 5;
  {
    // Declara una 'd' utilitzant 'const', assignant-li el valor 10
    const d = 10;
    expect(d).toBe(10);
  }
  expect(d).toBe(5);
});

/* eslint no-constant-condition:0 */
