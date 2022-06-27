const Intern = require("../lib/Intern");

test("Can set school by user input", () => {
  const testValue = "CU";
  const e = new Intern("D", 2, "dy2395@columbia.edu", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("D", 2, "dy2395@columbia.edu", "CU");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "CU";
  const e = new Intern("D", 2, "dy2395@columbia.edu", testValue);
  expect(e.getSchool()).toBe(testValue);
});