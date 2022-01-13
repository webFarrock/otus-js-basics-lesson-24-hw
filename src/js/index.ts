import { currying } from "./currying";
import { sum } from "./sum";
import { Parallel } from "./parallel";
import { spiral } from "./spiral";

console.log("carrying:");
const func = (a: number, b: number, c: number, d: number, e: number) => a + b + c + d + e;
const hof = currying(func);

console.log(hof(1, 2, 3, 4, 5));
console.log(hof(2, 3, 4)(5, 6));
console.log(hof(3, 4)(5, 6)(7));
console.log(hof(4, 5)(6)(7, 8));
console.log(hof(5)(6)(7)(8)(9));

console.log("sum:");
const s = sum(3);
console.log(+s(5));
console.log(+s(6));
console.log(+s(3)(2));

const runner = new Parallel(2);
runner
  .jobs(
    () => new Promise((resolve) => setTimeout(resolve, 100, 1)),
    () => new Promise((resolve) => setTimeout(resolve, 500, 2)),
    () => new Promise((resolve) => setTimeout(resolve, 200, 3)),
    () => new Promise((resolve) => setTimeout(resolve, 900, 4)),
    () => new Promise((resolve) => setTimeout(resolve, 300, 5))
  )
  .then((result) => {
    console.log("parallel: ", result);
  });

console.log("spiral:");
const spiralResult = spiral([
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
]);

console.log(spiralResult);
