// Imports
import GameSymbol from "./classes/GameSymbol.ts";
import { hasWinner, isGameBoxMarked } from "./helpers/helpers.ts";
import type { GameSymbolType } from "./types/GameSymbol.types.ts";
import type { TurnType } from "./types/Turn.types.ts";

//Global variables
let lastPlayed: GameSymbolType;

// Objects Creation
const gameSymbol = new GameSymbol("x");

// DOM Elements
const gameBoxes = document.querySelectorAll(".game__box");

// Functions Declaration
function markGameBox(box: HTMLElement, turn: TurnType): void {
  const turnClassName =
    turn === "player" ? "game__box--player-turn" : "game__box--machine-turn";
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
  const randomBox = unmarkedBoxes[randomIndex] as HTMLElement;

  play(randomBox, "machine");
}

function play(box: HTMLElement, turn: TurnType) {
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
      play(e.target as HTMLElement, "player");
      machinePlay();
    });
  });
}
