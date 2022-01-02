import { Parallel } from "./parallel";

describe("semverSort", () => {
  it("semverSort", async () => {
    const expectedResult = [1, 3, 2, 5, 4];
    const runner = new Parallel(2);
    const result = await runner.jobs(
      () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
      () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
      () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
      () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
      () => new Promise((resolve) => setTimeout(resolve, 30, 5))
    );

    expect(result.join(",")).toEqual(expectedResult.join(","));
  });
});
