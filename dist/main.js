// Imports
import GameSymbol from "./classes/GameSymbol.js";
import { hasWinner, isGameBoxMarked } from "./helpers/helpers.js";
//Global variables
let lastPlayed;
// Objects Creation
const gameSymbol = new GameSymbol("x");
// DOM Elements
const gameBoxes = document.querySelectorAll(".game__box");
// Functions Declaration
function markGameBox(box) {
    box.classList.add("game__box--marked");
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
    const randomBox = unmarkedBoxes[randomIndex];
    handleClick(randomBox);
}
function handleClick(box) {
    if (!hasWinner(gameBoxes)) {
        if (!isGameBoxMarked(box)) {
            lastPlayed = gameSymbol.getSymbol;
            markGameBox(box);
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
            handleClick(e.target);
            machinePlay();
        });
    });
}
