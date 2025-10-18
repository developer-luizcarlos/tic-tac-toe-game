import hasAllSameSymbol from "./hasAllSameSymbol.js";
export default function isThereAWinCase(segments) {
    return segments.some((item) => {
        return hasAllSameSymbol(item);
    });
}
