export function semverSort(values: string[]): string[] {
  return values.sort((a: string, b: string): number => {
    const aArr = explodeVer(a);
    const bArr = explodeVer(b);

    const maxLength = aArr.length > bArr.length ? aArr.length : bArr.length;

    for (let i = 0; i < maxLength; i++) {
      if (aArr[i] === undefined) {
        return -1;
      }
      if (bArr[i] === undefined) {
        return 1;
      }

      if (aArr[i] === bArr[i]) {
        continue;
      }

      return aArr[i] - bArr[i];
    }

    return 1;
  });
}

const explodeVer = (ver: string): number[] => {
  return ver.split(".").map((i) => Number(i));
};
