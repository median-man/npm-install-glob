const example = require("../src/example");

describe("example", () => {
  test("returns 'Hello, Example'", () => {
    expect(example()).toEqual("Hello, Example");
  });
});
