const Employee = require("../lib/Employee");

test("Can set name by user input", () => {
  const name = "Denise";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id by user input", () => {
  const testValue = 37;
  const e = new Employee("Denise", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email by user input", () => {
  const testValue = "dy2395@columbia.edu";
  const e = new Employee("Denise", 37, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Denise";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 37;
  const e = new Employee("Denise", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "dy2395@columbia.edu";
  const e = new Employee("Denise", 37, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Denise", 37, "dy2395@columbia.edu");
  expect(e.getRole()).toBe(testValue);
});