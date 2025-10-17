// Imports
import { type GameSymbolType } from "../types/GameSymbol.types.ts";

export default class GameSymbol {
  private symbol: GameSymbolType;

  constructor(symbol: GameSymbolType) {
    this.symbol = symbol;
  }

  public getSymbol(): GameSymbolType {
    const currentSymbol = this.symbol;
    this.symbol = this.symbol === "x" ? "y" : "x";

    return currentSymbol;
  }
}
