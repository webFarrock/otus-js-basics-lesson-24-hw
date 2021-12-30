enum Side {
  TOP,
  RIGHT,
  BOTTOM,
  LEFT,
}

export function spiral(inputArr: number[][]): number[] {
  const copyArr = inputArr.slice();
  const result: number[] = [];

  while (copyArr.length) {
    for (let side = Side.TOP; side <= Side.LEFT; side++) {
      if (!copyArr.length) {
        break;
      }

      if (side == Side.TOP) {
        result.push(...(copyArr.shift() as number[]));
        continue;
      }

      if (side == Side.RIGHT) {
        for (let row = 0; row < copyArr.length; row++) {
          result.push(copyArr[row].pop() as number);
        }
        continue;
      }

      if (side == Side.BOTTOM) {
        let elems = copyArr.pop() as number[];
        elems = elems.reverse();
        result.push(...elems);
        continue;
      }

      if (side == Side.LEFT) {
        for (let row = copyArr.length - 1; row >= 0; row--) {
          result.push(copyArr[row].shift() as number);
        }
        continue;
      }
    }
  }

  return result;
}
