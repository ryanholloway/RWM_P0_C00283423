export function cube(x: number): number {
  return x * x * x;
}

export function cubes(xs: number[]): number[] {
  return xs.map(cube);
}
