import { describe, it, expect } from "vitest";
import { combinedFilter } from "./combined";

describe("combined (removeOddNumbers → differences)", () => {
  it("basic sequence", () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 9, 10];
    const expected = [2, 2, 2, 4];
    expect(combinedFilter(input)).toEqual(expected);
  });

  it("edge cases", () => {
    expect(combinedFilter([])).toEqual([]);
    // refine expected to your two filters:
    // expect(combinedFilter([0])).toEqual([<expected>]);
  });
});
