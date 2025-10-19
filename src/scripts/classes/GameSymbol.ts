// Imports
import { type GameSymbolType } from "../types/gameSymbol.types.ts";

export default class GameSymbol {
  private symbol: GameSymbolType;

  constructor(symbol: GameSymbolType) {
    this.symbol = symbol;
  }

  public get getSymbol(): GameSymbolType {
    return this.symbol;
  }

  public switchSymbol() {
    this.symbol = this.symbol === "x" ? "y" : "x";
  }
}
