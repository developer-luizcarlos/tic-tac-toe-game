import getColumn from "./getColumn.js";
import getDiagonal from "./getDiagonal.js";
import getRow from "./getRow.js";
import isThereAWinCase from "./isThereAWinCase.js";
export default function hasWinner(gameBoxes) {
    const firstRow = getRow(gameBoxes, 0, 2);
    const secondRow = getRow(gameBoxes, 3, 5);
    const thirdRow = getRow(gameBoxes, 6, 8);
    const firstColumn = getColumn(gameBoxes, [0, 3, 6]);
    const secondColumn = getColumn(gameBoxes, [1, 4, 7]);
    const thirdColumn = getColumn(gameBoxes, [2, 5, 8]);
    const firstDiagonal = getDiagonal(gameBoxes, [2, 4, 6]);
    const secondDiagonal = getDiagonal(gameBoxes, [0, 4, 8]);
    const segments = [
        firstColumn,
        secondColumn,
        thirdColumn,
        firstRow,
        secondRow,
        thirdRow,
        firstDiagonal,
        secondDiagonal,
    ];
    return isThereAWinCase(segments);
}
