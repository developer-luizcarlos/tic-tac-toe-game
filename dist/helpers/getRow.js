export default function getRow(gameBoxes, start, end) {
    return Array.from(gameBoxes).filter((_, i) => {
        return i >= start && i <= end;
    });
}
