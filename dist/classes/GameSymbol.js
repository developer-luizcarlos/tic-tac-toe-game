// Imports
import {} from "../types/gameSymbol.types.js";
export default class GameSymbol {
    symbol;
    constructor(symbol) {
        this.symbol = symbol;
    }
    get getSymbol() {
        return this.symbol;
    }
    switchSymbol() {
        this.symbol = this.symbol === "x" ? "y" : "x";
    }
}
