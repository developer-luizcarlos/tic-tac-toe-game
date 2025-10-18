export default function getColumn(
  gameBoxes: NodeListOf<Element>,
  indexes: [number, number, number]
): Element[] {
  return Array.from(gameBoxes).filter((_, i) => {
    return indexes.indexOf(i) !== -1;
  });
}
