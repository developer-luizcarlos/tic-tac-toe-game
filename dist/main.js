// Imports
import GameSymbol from "./classes/GameSymbol.js";
// Objects Creation
const gameSymbol = new GameSymbol("x");
// DOM Elements
const gameBoxes = document.querySelectorAll(".game__box");
// Functions Declaration
function markGameBox(box) {
    const isBoxMarked = box.classList.contains("game__box--marked");
    if (!isBoxMarked) {
        box.classList.add("game__box--marked");
        box.textContent = gameSymbol.getSymbol();
    }
}
// Functions/Events Applied
if (gameBoxes) {
    gameBoxes.forEach((box) => {
        box.addEventListener("click", (e) => {
            const target = e.target;
            markGameBox(target);
        });
    });
}
