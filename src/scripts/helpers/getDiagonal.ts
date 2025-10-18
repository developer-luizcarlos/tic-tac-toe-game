export default function getDiagonal(
  gameBoxes: NodeListOf<Element>,
  indexes: [number, number, number]
): Element[] {
  return Array.from(gameBoxes).filter((_, i) => {
    return i === indexes[0] || i === indexes[1] || i === indexes[2];
  });
}
