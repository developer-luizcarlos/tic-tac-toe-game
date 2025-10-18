export default function hasAllSameSymbol(elements: Element[]): boolean {
  return Array.from(elements).every((e) => {
    const firstElementTextContent = elements[0].textContent;

    return (
      e.textContent === firstElementTextContent &&
      firstElementTextContent.trim() !== ""
    );
  });
}
