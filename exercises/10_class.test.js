test("10_class-1: has a constructor for initialization", () => {
  // Crea una classe Animal
  // Afegeix un constructor que prengui un paràmetre, el nom.
  // Assigna this.name al nom passat com a paràmetre
  class Animal {
    constructor(name) {
      this.name = name;
    }
  }

  const animal = new Animal();
  const dog = new Animal("Dog");

  expect(animal.name).toBeUndefined();
  expect(dog.name).toBe("Dog");
});

test("10_class-2: constructor can have default param values", () => {
  // Crea una classe Animal amb un constructor
  // Fes que la classe tingui un valor per defecte (utilitzant paràmetres per defecte) per al nom: 'Honey Badger'
  class Animal {
    constructor(name = "Honey Badger") {
      this.name = name;
    }
  }

  const animal = new Animal();
  const dog = new Animal("Dog");

  expect(animal.name).toBe("Honey Badger");
  expect(dog.name).toBe("Dog");
});

test("10_class-3: can have instance methods", () => {
  // Crea una classe Animal, passa el nom al constructor i afegeix una funció sayName a la definició de la classe
  class Animal {
    constructor(name = "Honey Badger") {
      this.name = name;
    }

    sayName() {
      return `My name is: ${this.name}`;
    }
  }

  const animal = new Animal();

  expect(animal.sayName).toBeDefined();
  expect(Animal.sayName).toBeUndefined();
  expect(animal.sayName()).toBe("My name is: Honey Badger");
});

test("10_class-4: can have static methods", () => {
  // Crea una classe Animal, passa el nom al constructor,
  class Animal {
    constructor(name = "Honey Badger") {
      this.name = name;
    }

    // i afegeix un mètode estàtic create que prengui un nom i retorni una instància
    static create(name) {
      return new Animal(name);
    }
  }

  const animal = new Animal();

  expect(animal.create).toBeUndefined();
  expect(Animal.create).toBeDefined();
});

test("10_class-5: can extend another class", () => {
  // Crea una classe Animal
  class Animal {
    constructor(name = "Honey Badger") {
      this.name = name;
    }
  }
  // Crea una classe Dog que extengui Animal
  // Afegeix el mètode sayName a Dog
  class Dog extends Animal {
    sayName() {
      return `My name is: ${this.name}`;
    }
  }

  const dog = new Dog("Fido");

  expect(dog instanceof Dog).toBe(true);
  expect(dog instanceof Animal).toBe(true);
  expect(Animal.prototype.sayName).toBeUndefined();
  expect(Dog.prototype.sayName).toBeDefined();
});

test("10_class-6: can use property setters and getters", () => {
  // Crea una classe Animal (no passis el nom al constructor)
  class Animal {
    // Afegeix un setter per a la propietat name
    set name(newName) {
      this._name = newName;
    }

    // Afegeix un getter per a la propietat name
    get name() {
      return `${this._name} type of animal`;
    }
  }

  const animal = new Animal();
  animal.name = "Dog";
  expect(animal.name).toBe("Dog type of animal");
  animal.name = "Cat";
  expect(animal.name).toBe("Cat type of animal");
});
