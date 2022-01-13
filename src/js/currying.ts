type RemainingParameters<Provided extends any[], Expected extends any[]> = Expected extends [infer E1, ...infer EX]
  ? Provided extends [infer P1, ...infer PX]
    ? RemainingParameters<PX, EX>
    : Expected
  : [];

type Curry<Fn extends (...args: any[]) => any, Expected extends any[] = Parameters<Fn>, RType = ReturnType<Fn>> = <
  Provided extends Partial<Expected>
>(
  ...args: Provided
) => RemainingParameters<Provided, Expected> extends []
  ? RType
  : Curry<Fn, RemainingParameters<Provided, Expected>, RType>;

export function currying<Fn extends (...args: any[]) => any>(func: Fn): Curry<Fn>;

export function currying(fn: (...args: any[]) => any): any {
  return function curried(...args: any[]) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...additionArgs: any[]) {
        return curried(...[...args, ...additionArgs]);
      };
    }
  };
}
