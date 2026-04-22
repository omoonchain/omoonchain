document.addEventListener("DOMContentLoaded", () => {
    // Staggered tile entrance — shuffled for organic feel
    const tiles = document.querySelectorAll('.tile');

    const shuffled = Array.from(tiles).sort(() => 0.5 - Math.random());

    shuffled.forEach((tile, index) => {
        tile.style.animationDelay = `${index * 0.08}s`;
    });
});
