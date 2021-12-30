export interface iCurrying {
  (...args: any[]): iCurrying | iFnForCurrying;
}

export interface iFnForCurrying {
  (...args: any[]): any;
}

export const currying = (fn: iFnForCurrying): iCurrying => {
  return function curried(...args: any[]): iCurrying | iFnForCurrying {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...additionArgs: any[]) {
        return curried(...[...args, ...additionArgs]);
      };
    }
  };
};
