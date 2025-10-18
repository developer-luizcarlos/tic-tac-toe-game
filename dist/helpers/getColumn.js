export default function getColumn(gameBoxes, indexes) {
    return Array.from(gameBoxes).filter((_, i) => {
        return indexes.indexOf(i) !== -1;
    });
}
