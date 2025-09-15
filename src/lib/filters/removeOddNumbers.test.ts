import { describe, it, expect } from "vitest";
import { removeOddNumbers } from "./removeOddNumbers";

describe("Remove Odd Numbers Filter", () => {
  it("Removes all odd numbers", () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 9, 999];
    const expected = [2, 4, , 6, 7];
    expect(removeOddNumbers(input)).toEqual(expected);
  });
});
