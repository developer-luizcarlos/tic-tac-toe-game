import getColumn from "./getColumn.ts";
import getDiagonal from "./getDiagonal.ts";
import getRow from "./getRow.ts";

export default function getIndexOfPossibleMachineWin(
  gameBoxes: NodeListOf<Element>
) {
  const firstRow = getRow(gameBoxes, 0, 2);
  const secondRow = getRow(gameBoxes, 3, 5);
  const thirdRow = getRow(gameBoxes, 6, 8);

  const firstColumn = getColumn(gameBoxes, [0, 3, 6]);
  const secondColumn = getColumn(gameBoxes, [1, 4, 7]);
  const thirdColumn = getColumn(gameBoxes, [2, 5, 8]);

  const firstDiagonal = getDiagonal(gameBoxes, [2, 4, 6]);
  const secondDiagonal = getDiagonal(gameBoxes, [0, 4, 8]);

  const baz = (collection: Element[]): Element[] => {
    return collection.filter((el) => {
      return (
        el.classList.contains("game__box--machine-turn") &&
        !el.classList.contains("game__box--player-turn")
      );
    });
  };

  const segments: Element[][] = [];

  const foo = (c1: Element[], c2: Element[]): void => {
    if (c1.length === 2) {
      segments.push(c2);
    }
  };

  foo(baz(firstRow), firstRow);
  foo(baz(secondRow), secondRow);
  foo(baz(thirdRow), thirdRow);
  foo(baz(firstColumn), firstColumn);
  foo(baz(secondColumn), secondColumn);
  foo(baz(thirdColumn), thirdColumn);
  foo(baz(firstDiagonal), firstDiagonal);
  foo(baz(secondDiagonal), secondDiagonal);

  const findIndex = (item: Element): number => {
    const unmarkedBoxes = Array.from(gameBoxes).filter(
      (b) => !b.classList.contains("game__box--marked")
    );

    for (let index in unmarkedBoxes) {
      if (unmarkedBoxes[index] === item) {
        return parseFloat(index);
      }
    }

    return -1;
  };

  let res = -1;

  segments.forEach((s) => {
    const emptyBox = s
      .filter((el) => !el.classList.contains("game__box--marked"))
      .at(0)!;
    res = findIndex(emptyBox);
  });

  return res;
}
