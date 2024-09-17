// Function to insert numbers and operators into the screen
function insert(num) {
    document.getElementById('result').value += num;
}

// Function to clear the screen
function clearScreen() {
    document.getElementById('result').value = '';
}

// Function to delete the last character
function deleteLast() {
    let value = document.getElementById('result').value;
    document.getElementById('result').value = value.substring(0, value.length - 1);
}

// Function to calculate the result
function calculate() {
    try {
        let expression = document.getElementById('result').value;
        if (expression) {
            document.getElementById('result').value = eval(expression);
        }
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}
