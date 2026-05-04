import { jest } from "@jest/globals";

// Exercici 1.3: Callbacks

test("27_callbacks-1: Basic callback - invoke callback passing a number", () => {
  // Crea una funció 'processNumber' que accepti un número i una funció callback
  // La funció ha d'invocar el callback passant-li el número

  const processNumber = (number, callback) => {
    callback(number);
  };

  const mockCallback = jest.fn();
  processNumber(5, mockCallback);

  expect(mockCallback).toHaveBeenCalledWith(5);
  expect(mockCallback).toHaveBeenCalledTimes(1);
});

test("27_callbacks-2: Callbacks with mathematical operations - calculator", () => {
  // Crea una funció 'calculator' que accepti dos números i una funció callback
  // La funció ha d'invocar el callback amb els dos números com a paràmetres

  const calculator = (number1, number2, callback) => {
    return callback(number1, number2);
  };

  const sum = (a, b) => a + b;
  const result = calculator(3, 4, sum);

  expect(result).toBe(7);
});

test("27_callbacks-3: Callbacks in asynchronous functions - wait and greet", (done) => {
  // Crea una funció 'waitAndGreet' que accepti un nom i un callback
  // La funció ha d'esperar 2 segons (usa setTimeout) i després invocar el callback amb el nom

  const waitAndGreet = (name, callback) => {
    setTimeout(() => {
      callback(name);
    }, 2000);
  };

  const startTime = Date.now();

  waitAndGreet("Maria", (name) => {
    const elapsed = Date.now() - startTime;
    expect(name).toBe("Maria");
    expect(elapsed).toBeGreaterThanOrEqual(1900); // Tolerància de 100ms
    expect(elapsed).toBeLessThan(2500);
    done();
  });
}, 3000); // Timeout del test de 3 segons

test("27_callbacks-4: Callbacks with arrays - process elements", () => {
  // Crea una funció 'processElements' que accepti un array i un callback
  // La funció ha d'invocar el callback per cada element de l'array

  const processElements = (elements, callback) => {
    elements.forEach((element) => callback(element));
  };

  const elements = ["a", "b", "c"];
  const results = [];

  processElements(elements, (element) => {
    results.push(element.toUpperCase());
  });

  expect(results).toEqual(["A", "B", "C"]);
});

test("27_callbacks-5: Process string with callback - transform to uppercase", () => {
  // Crea una funció 'processString' que accepti una cadena i un callback
  // La funció ha de convertir la cadena a majúscules i després invocar el callback
  // amb la cadena transformada

  const processString = (string, callback) => {
    callback(string.toUpperCase());
  };

  processString("hola món", (transformedString) => {
    expect(transformedString).toBe("HOLA MÓN");
  });
});

test("27_callbacks-6: Chained callbacks - multiple transformations", () => {
  // Crea funcions que demostrin callbacks encadenats
  // Primer duplica un número, després suma 10, finalment mostra el resultat

  const double = (num, callback) => {
    callback(num * 2);
  };

  const addTen = (num, callback) => {
    callback(num + 10);
  };

  let finalResult;

  double(5, (result1) => {
    addTen(result1, (result2) => {
      finalResult = result2;
    });
  });

  expect(finalResult).toBe(20); // (5 * 2) + 10 = 20
});
