const Manager = require("../lib/Manager");

test("Can set office number via user input", () => {
  const testValue = 101
  const e = new Manager("Danqi", 1, "dy2395@columbia.edu", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Danqi", 1, "dy2395@columbia.edu", 101);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 101;
  const e = new Manager("Danqi", 1, "dy2395@columbia.edu", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});