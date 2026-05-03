test("07_object-literal-1: can use shorthand for property names", () => {
  const createMonster = (name, power) => {
    // Utilitza la nova sintaxi del literal d'Object, per tornar un literal que permeti passar els testos
    // return {
    //   type: 'Monster',
    //   name: name,
    //   power: power,
    //   attack(target){
    //     return `${this.name} attacked ${target.name}`;
    //   }
    // }
    return {
      type: "Monster",
      name,
      power,
      attack(target) {
        return `${this.name} attacked ${target.name}`;
      },
    };
  };

  const godzilla = createMonster("Godzilla", 1000);
  const mechaGodzilla = createMonster("MechaGodzilla", 5000);
  expect(godzilla.name).toBe("Godzilla");
  expect(godzilla.power).toBe(1000);
  expect(godzilla.attack(mechaGodzilla)).toBe(
    "Godzilla attacked MechaGodzilla",
  );
});

test("07_object-literal-2: can use expressions as property names", () => {
  const createCandy = (type, description) => {
    return {
      tasty: true,
      type,
      [type.toUpperCase() + type.length]: description,
      // afegeix una expressió com a nom de propietat on el nom de la propietat sigui el resultat de type.toUpperCase() + type.length
      // sembla forçat? Ho és... 😅
    };
  };

  const twixDescription =
    "Twix és una barra de xocolata feta per Mars, Inc., que consisteix en galeta amb altres " +
    "cobertures i recobriments de confiteria. Les barres Twix es venen en parelles, tot i que també hi ha barres individuals més petites.";
  const twixType = "twix";
  const snickers = createCandy("twix", twixDescription);
  expect(snickers.tasty).toBe(true);
  expect(snickers.type).toBe(twixType);
  expect(snickers.TWIX4).toBe(twixDescription);
});

/*
eslint
  no-unused-vars:0
  prefer-rest-params:0
*/
