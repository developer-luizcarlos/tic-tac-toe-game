import hasAllSameSymbol from "./hasAllSameSymbol.ts";

export default function isThereAWinCase(segments: Element[][]): boolean {
  return segments.some((item) => {
    return hasAllSameSymbol(item);
  });
}
