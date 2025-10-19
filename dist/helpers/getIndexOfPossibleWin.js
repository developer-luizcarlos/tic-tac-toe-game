import { getColumn, getDiagonal, getPlayedSegments, getRow, } from "./helpers.js";
export default function getIndexOfPossibleWin(gameBoxes, turn) {
    const firstRow = getRow(gameBoxes, 0, 2);
    const secondRow = getRow(gameBoxes, 3, 5);
    const thirdRow = getRow(gameBoxes, 6, 8);
    const firstColumn = getColumn(gameBoxes, [0, 3, 6]);
    const secondColumn = getColumn(gameBoxes, [1, 4, 7]);
    const thirdColumn = getColumn(gameBoxes, [2, 5, 8]);
    const firstDiagonal = getDiagonal(gameBoxes, [2, 4, 6]);
    const secondDiagonal = getDiagonal(gameBoxes, [0, 4, 8]);
    const segments = [];
    const addPotencialWinSegments = (c1, c2) => {
        if (c1.length === 2) {
            segments.push(c2);
        }
    };
    addPotencialWinSegments(getPlayedSegments(firstRow, turn), firstRow);
    addPotencialWinSegments(getPlayedSegments(secondRow, turn), secondRow);
    addPotencialWinSegments(getPlayedSegments(thirdRow, turn), thirdRow);
    addPotencialWinSegments(getPlayedSegments(firstColumn, turn), firstColumn);
    addPotencialWinSegments(getPlayedSegments(secondColumn, turn), secondColumn);
    addPotencialWinSegments(getPlayedSegments(thirdColumn, turn), thirdColumn);
    addPotencialWinSegments(getPlayedSegments(firstDiagonal, turn), firstDiagonal);
    addPotencialWinSegments(getPlayedSegments(secondDiagonal, turn), secondDiagonal);
    const findIndex = (item) => {
        const unmarkedBoxes = Array.from(gameBoxes).filter((b) => !b.classList.contains("game__box--marked"));
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
            .at(0);
        res = findIndex(emptyBox);
    });
    return res;
}
