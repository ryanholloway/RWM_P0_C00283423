import { removeOddNumbers as myOddNumberRemover } from "../removeOddNumbers";
import { diffrences as peerDifferences } from "peer-filter-c00260441/src/lib/filters/diff";

export function combinedFilter(xs: number[]): number[] {
  const afterMine = myOddNumberRemover(xs);
  return peerDifferences(afterMine);
}
