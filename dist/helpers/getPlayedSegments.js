export default function getPlayedSegments(collection, turn) {
    const wantedClassName = turn === "machine" ? "game__box--machine-turn" : "game__box--player-turn";
    const unwantedClassName = turn === "machine" ? "game__box--player-turn" : "game__box--machine-turn";
    return collection.filter((element) => {
        return (element.classList.contains(wantedClassName) &&
            !element.classList.contains(unwantedClassName));
    });
}
