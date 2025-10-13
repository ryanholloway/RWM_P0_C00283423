import { describe, it, expect } from "vitest";
import { combinedFilter } from "./combined";

describe("combinedFilter", () => {
  it("should handle basic sequence (removeOddNumbers → differences)", () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 9, 10];
    const expected = [2, 2, 2, 4];
    expect(combinedFilter(input)).toEqual(expected);
  });
});
