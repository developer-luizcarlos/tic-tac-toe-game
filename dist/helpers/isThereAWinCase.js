import { hasAllSameSymbol } from "./helpers.js";
export default function isThereAWinCase(segments) {
    return segments.some((item) => {
        return hasAllSameSymbol(item);
    });
}
