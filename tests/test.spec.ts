import { asArray } from "..";

describe("something", () => {
  it("should work", () => {
    expect(true).toBe(true);
  });
});

describe("asArray", () => {
  it("single number", () => {
    expect(asArray(1)).toEqual([1]);
  });

  it("single string", () => {
    expect(asArray("a")).toEqual(["a"]);
  });
});
