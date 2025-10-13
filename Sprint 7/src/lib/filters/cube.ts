export function cube(x: number): number {
  return Math.pow(x, 3);
}

export function cubes(xs: number[]): number[] {
  return xs.map((value) => cube(value));
}
