// Imports
import {} from "../types/GameSymbol.types.js";
export default class GameSymbol {
    symbol;
    constructor(symbol) {
        this.symbol = symbol;
    }
    getSymbol() {
        const currentSymbol = this.symbol;
        this.symbol = this.symbol === "x" ? "y" : "x";
        return currentSymbol;
    }
}
