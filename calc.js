 // Function to handle input
 function input(value) {
    document.getElementById('screen').value += value;
}

// Function to clear the screen
function clearScreen() {
    document.getElementById('screen').value = '';
}

// Function to delete a character
function deleteChar() {
    let current = document.getElementById('screen').value;
    document.getElementById('screen').value = current.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    try {
        let result = eval(document.getElementById('screen').value);
        document.getElementById('screen').value = result;
    } catch (error) {
        document.getElementById('screen').value = 'Error';
    }
}
