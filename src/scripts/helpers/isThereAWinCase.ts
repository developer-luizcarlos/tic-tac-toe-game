import { hasAllSameSymbol } from "./helpers.ts";

export default function isThereAWinCase(segments: Element[][]): boolean {
  return segments.some((item) => {
    return hasAllSameSymbol(item);
  });
}
