export default function getDiagonal(gameBoxes, indexes) {
    return Array.from(gameBoxes).filter((_, i) => {
        return i === indexes[0] || i === indexes[1] || i === indexes[2];
    });
}
