const calculadora = require("../models/calculadora");

test("it should sum 2 + 2 and return 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("it should sum 5 + 100 and return 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("it should return error if an argument its a string", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Error");
});

test("it should return error if an argument its empty", () => {
  const resultado = calculadora.somar(1);
  expect(resultado).toBe("Error");
});
