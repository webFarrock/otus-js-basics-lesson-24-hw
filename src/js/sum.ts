interface iSummer {
  (addValue: number): iSummer;
}

export function sum(initial = 0): iSummer {
  const summer = function (addValue: number): iSummer {
    return sum(initial + addValue);
  };
  summer.toString = () => initial;
  summer.valueOf = () => initial;

  return summer;
}
