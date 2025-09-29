import { describe, it, expect } from "vitest";
import { cubes } from "./cube";

describe("Cube filter", () => {
  it("cubes a sequence", () => {
    const input = [1, 3, 5, 7, 9, 999];
    const expected = [1, 27, 125, 343, 729, 997002999];
    expect(cubes(input)).toEqual(expected);
  });
});
