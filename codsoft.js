// Get the display element
const display = document.getElementById('display');

// Function to append characters to the display
function append(character) {
    display.value += character;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character in the display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

// Function for square root
function squareRoot() {
    display.value = Math.sqrt(eval(display.value));
}

// Function for power
function power() {
    display.value = Math.pow(eval(display.value), 2);
}
