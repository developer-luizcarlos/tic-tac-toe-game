// Imports
import GameSymbol from "./classes/GameSymbol.js";
import getIndexOfPossibleMachineWin from "./helpers/getIndexOfPossibleMachineWin.js";
import { hasWinner, isGameBoxMarked } from "./helpers/helpers.js";
//Global variables
let lastPlayed;
// Objects Creation
const gameSymbol = new GameSymbol("x");
// DOM Elements
const gameBoxes = document.querySelectorAll(".game__box");
// Functions Declaration
function markGameBox(box, turn) {
    const turnClassName = turn === "player" ? "game__box--player-turn" : "game__box--machine-turn";
    box.classList.add("game__box--marked", turnClassName);
    box.textContent = gameSymbol.getSymbol;
}
function machinePlay() {
    const unmarkedBoxes = Array.from(gameBoxes).filter((b) => {
        return !b.classList.contains("game__box--marked");
    });
    if (!unmarkedBoxes.length) {
        return;
    }
    const randomIndex = Math.floor(Math.random() * unmarkedBoxes.length);
    const index = getIndexOfPossibleMachineWin(gameBoxes) !== -1
        ? getIndexOfPossibleMachineWin(gameBoxes)
        : randomIndex;
    const randomBox = unmarkedBoxes[index];
    play(randomBox, "machine");
}
function play(box, turn) {
    if (!hasWinner(gameBoxes)) {
        if (!isGameBoxMarked(box)) {
            lastPlayed = gameSymbol.getSymbol;
            markGameBox(box, turn);
            gameSymbol.switchSymbol();
        }
        if (hasWinner(gameBoxes)) {
            alert(`${lastPlayed} is the winer!!!`);
        }
    }
}
// Functions/Events Applied
if (gameBoxes) {
    gameBoxes.forEach((box) => {
        box.addEventListener("click", (e) => {
            play(e.target, "player");
            machinePlay();
        });
    });
}
