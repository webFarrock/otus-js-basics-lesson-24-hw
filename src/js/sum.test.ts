import { sum } from "./sum";

describe("sum", () => {
  it("sum with no value", () => {
    const s = sum();
    expect(+s(1)).toEqual(1);
    expect(+s(1)(2)).toEqual(3);
    expect(+s(3)(4)(5)).toEqual(12);
  });

  it("sum with initial value equal 3", () => {
    const s = sum(3);
    expect(+s(5)).toEqual(8);
    expect(+s(6)).toEqual(9);
    expect(+s(3)(2)).toEqual(8);
  });
});
