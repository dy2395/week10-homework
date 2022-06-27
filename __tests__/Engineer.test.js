const Engineer = require("../lib/Engineer");

test("Can set GitHUb account by user input", () => {
  const testValue = "dy2395";
  const e = new Engineer("dd", 1, "dy2395@columbia.edu", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("dd", 1, "dy2395@columbia.edu", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "dy2395";
  const e = new Engineer("dd", 1, "dy2395@columbia.edu", testValue);
  expect(e.getGithub()).toBe(testValue);
});