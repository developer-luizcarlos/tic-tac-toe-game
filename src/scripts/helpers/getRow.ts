export default function getRow(
  gameBoxes: NodeListOf<Element>,
  start: number,
  end: number
): Element[] {
  return Array.from(gameBoxes).filter((_, i) => {
    return i >= start && i <= end;
  });
}
