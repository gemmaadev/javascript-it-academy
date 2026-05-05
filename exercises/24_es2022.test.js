test("24_es2022-1: Class fields and private methods", () => {
  // Crea una classe amb un camp privat i un mètode privat. Afegeix un getter per accedir al camp privat.
  class Person {
    // Resol aquí...
    #secret = "secret";
    static publicField = "public";

    getSecret() {
      return this.#privateMethod();
    }

    #privateMethod() {
      return this.#secret;
    }
  }

  const person = new Person();
  expect(person.getSecret()).toBe("secret");
  expect(Person.publicField).toBe("public");
});

test("24_es2022-2: at() method for indexing arrays and strings", () => {
  // Utilitza el mètode at() per accedir als elements d'un array i una cadena.
  const array = [1, 2, 3, 4];
  const string = "hello";

  const lastArrayElement = (array.at(3)); 
  const secondLastStringChar = (string.at(3));

  expect(lastArrayElement).toBe(4);
  expect(secondLastStringChar).toBe("l");
});

test("24_es2022-3: Top-level await in modules", async () => {
  // Utilitza await a nivell superior per resoldre una promesa.
  const result = await Promise.resolve("Top-level await works!");

  expect(result).toBe("Top-level await works!");
});
