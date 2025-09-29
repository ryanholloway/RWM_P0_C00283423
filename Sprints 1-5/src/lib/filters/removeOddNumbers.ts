export function removeOddNumbers(xs: number[]): number[] {
  return xs.filter((x) => x % 2 == 0);
}
