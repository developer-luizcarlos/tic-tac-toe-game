"use strict";
// DOM Elements
const gameBoxes = document.querySelectorAll(".game__box");
// Functions Declarations
function markGameBox(box, symbol) {
    const isBoxMarked = box.classList.contains("game__box--marked");
    if (!isBoxMarked) {
        box.classList.add("game__box--marked");
        box.textContent = symbol;
    }
}
// Functions/Events Applied
if (gameBoxes) {
    gameBoxes.forEach((box) => {
        box.addEventListener("click", (e) => {
            const target = e.target;
            markGameBox(target, "x");
        });
    });
}
