test("05_template-literals-1: should support string interpolation", () => {
  const person = {
    name: "Kent C. Dodds",
    friends: [
      "Brooke Dodds",
      "Matt Zabriskie",
      "Aaron Frost",
      "Dave Geddes",
      "Joe Eames",
      "Ryan Florence",
    ],
  };
  // construeix una cadena utilitzant la interpolació de literals de plantilla
  const personsFriends = `${person.name} has 6 friends: ${person.friends.join(", ")}`;
  expect(personsFriends).toBe(
    "Kent C. Dodds has 6 friends: Brooke Dodds, Matt Zabriskie, Aaron Frost, Dave Geddes, Joe Eames, Ryan Florence",
  );
});

test("05_template-literals-2: should support multi-line strings", () => {
  // construeix una cadena amb múltiples línies sense necessitat de caràcters de nova línia escapats
  const multiLine = `
    How cool
    is this!?
  `;
  expect(multiLine).toBe("\n    How cool\n    is this!?\n  ");
});

test("05_template-literals-3: should support string escaping", () => {
  // escapa correctament una cadena en un literal de plantilla per a cadascun d'aquests casos
  expect(`Hi
there!`).toBe("Hi\nthere!");
  expect(`This is \`escaped\` backticks`).toBe("This is `escaped` backticks");
});

//////// EXTRA CREDIT ////////

// és probable que no utilitzis sovint l'etiquetatge, però pot ser útil!
test.skip("05_template-literals-4: should call the tagging function", () => {
  const tagIt = (literalString, ...interpolatedParts) => {
    // implementa aquesta funció per fer que el test passi
    //   return "fixme";
    // };

    const replacements = {
      World: "super-cool World",
      happy: "really happy",
    };

    return literalString.reduce((result, str, i) => {
      const part = interpolatedParts[i - 1];
      return result + (replacements[part] || part || "") + str;
    });
  };

  const noun = "World";
  const emotion = "happy";
  const result = tagIt`Hello ${noun}! Are you feeling ${emotion} today?`;
  expect(result).toBe(
    "Hello super-cool World! Are you feeling really happy today?",
  );
});

//Aquest últim amb skip està resolt amb IA perquè ha estat impossible ensortir-me'n,
// ja que, ara per ara, no l'entenc (hi retornaré més endavant).
