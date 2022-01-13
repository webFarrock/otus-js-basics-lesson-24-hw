import { spiral } from "./spiral";

describe("spiral", () => {
  it("spiral with square matrix", () => {
    const expectedResult = [0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12, 11];
    const result = spiral([
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
    ]);

    expect(result.join(",")).toEqual(expectedResult.join(","));
  });

  it("spiral with arbitrary matrix", () => {
    const expectedResult = [
      0, 1, 2, 3, 4, 5, 9, 123123, 19, 99, 81, 80, 79, 78, 77, 15, 10, 5, 6, 7, 8, 14, 18, 17, 16, 11, 12, 13,
    ];
    const result = spiral([
      [0, 1, 2, 3, 4, 5],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14, 123123],
      [15, 16, 17, 18, 19],
      [77, 78, 79, 80, 81, 99],
    ]);

    expect(result.join(",")).toEqual(expectedResult.join(","));
  });
});
