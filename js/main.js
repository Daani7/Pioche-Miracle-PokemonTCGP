const probabilities = {
    1: { 2: 0.3, 4: 0.3, 3: 0.1, 5: 0.1 },
    2: { 1: 0.2, 3: 0.3, 4: 0.3, 5: 0.1 },
    3: { 1: 0.1, 2: 0.3, 4: 0.3, 5: 0.2 },
    4: { 1: 0.3, 2: 0.3, 3: 0.1, 5: 0.2 },
    5: { 1: 0.2, 2: 0.1, 3: 0.3, 4: 0.3 },
};

function simulateMovement(startCard) {
    const moves = probabilities[startCard];
    const randomValue = Math.random();
    let cumulativeProbability = 0;

    for (const [position, probability] of Object.entries(moves)) {
        cumulativeProbability += probability;
        if (randomValue <= cumulativeProbability) {
        return parseInt(position);
        }
    }
}


document.getElementById('simulateButton').addEventListener('click', () => {
    const selectedCard = parseInt(document.getElementById('selectedCard').value);
    const finalPosition = simulateMovement(selectedCard);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `La carte ${selectedCard} se retrouve finalement en position ${finalPosition}.`;
});
