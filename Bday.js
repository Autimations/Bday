// Function to get a color from the rainbow spectrum based on an index
function getRainbowColor(index) {
    var rainbowColors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#8b00ff'];
    return rainbowColors[index % rainbowColors.length];
}

// Function to change the color of a specific letter in rainbow order
function changeLetterColor(letterId, index) {
    var letterElement = document.getElementById(letterId);
    if (letterElement) {
        letterElement.style.color = getRainbowColor(index);
    }
}

// Change letter colors in rainbow order at regular intervals (every 1 second in this example)
var letterIndex = 0;
setInterval(function () {
    changeLetterColor('letter1', letterIndex++);
    changeLetterColor('letter2', letterIndex++);
    changeLetterColor('letter3', letterIndex++);
    changeLetterColor('letter4', letterIndex++);
    changeLetterColor('letter5', letterIndex++);
    changeLetterColor('letter6', letterIndex++);
    changeLetterColor('letter7', letterIndex++);
    changeLetterColor('letter8', letterIndex++);
    changeLetterColor('letter9', letterIndex++);
    changeLetterColor('letter10', letterIndex++);
    changeLetterColor('letter11', letterIndex++);
    changeLetterColor('letter12', letterIndex++);
    changeLetterColor('letter13', letterIndex++);
    changeLetterColor('letter14', letterIndex++);
    changeLetterColor('letter15', letterIndex++);
    changeLetterColor('letter16', letterIndex++);
    changeLetterColor('letter17', letterIndex++);
    // Add more letters as needed
}, 1000);