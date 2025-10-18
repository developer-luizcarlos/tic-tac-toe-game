import getDiagonal from "./getDiagonal.js";
import getRow from "./getRow.js";
import hasAllSameSymbol from "./hasAllSameSymbol.js";
export default function hasWinner(gameBoxes) {
    const firstRow = getRow(gameBoxes, 0, 2);
    const secondRow = getRow(gameBoxes, 3, 5);
    const thirdRow = getRow(gameBoxes, 6, 8);
    const firstDiagonal = getDiagonal(gameBoxes, [2, 4, 6]);
    const secondDiagonal = getDiagonal(gameBoxes, [0, 4, 8]);
    const hasFirstRowSameSymbol = hasAllSameSymbol(firstRow);
    const hasSecondRowSameSymbol = hasAllSameSymbol(secondRow);
    const hasThirdRowSameSymbol = hasAllSameSymbol(thirdRow);
    const hasFirstDiagonalSameSymbol = hasAllSameSymbol(firstDiagonal);
    const hasSecondDiagonalSameSymbol = hasAllSameSymbol(secondDiagonal);
    const plays = [
        hasFirstRowSameSymbol,
        hasSecondRowSameSymbol,
        hasThirdRowSameSymbol,
        hasFirstDiagonalSameSymbol,
        hasSecondDiagonalSameSymbol,
    ];
    return plays.some((result) => result);
}
