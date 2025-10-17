// Imports
import GameSymbol from "./classes/GameSymbol.js";
//Global variables
let lastPlayed;
// Objects Creation
const gameSymbol = new GameSymbol("x");
// DOM Elements
const gameBoxes = document.querySelectorAll(".game__box");
// Functions Declaration
function hasWinner() {
    const firstRow = Array.from(gameBoxes).filter((_, i) => i >= 0 && i <= 2);
    const secondRow = Array.from(gameBoxes).filter((_, i) => i >= 3 && i <= 5);
    const thirdRow = Array.from(gameBoxes).filter((_, i) => i >= 6 && i <= 8);
    const firstDiagonal = Array.from(gameBoxes).filter((_, i) => i === 2 || i === 4 || i === 6);
    const secondDiagonal = Array.from(gameBoxes).filter((_, i) => i === 0 || i === 4 || i === 8);
    const hasAllSameSymbol = (row) => {
        return row.every((e) => {
            return (e.textContent === row[0].textContent && row[0].textContent.trim() !== "");
        });
    };
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
function markGameBox(box) {
    const isBoxMarked = box.classList.contains("game__box--marked");
    if (!isBoxMarked) {
        box.classList.add("game__box--marked");
        box.textContent = gameSymbol.getSymbol;
    }
}
// Functions/Events Applied
if (gameBoxes) {
    gameBoxes.forEach((box) => {
        box.addEventListener("click", (e) => {
            if (!hasWinner()) {
                const target = e.target;
                markGameBox(target);
                lastPlayed = gameSymbol.getSymbol;
                gameSymbol.switchSymbol();
                if (hasWinner()) {
                    console.log(lastPlayed);
                }
            }
        });
    });
}
