
function insert(num) {
    document.getElementById('result').value += num;
}

function clearScreen() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let value = document.getElementById('result').value;
    document.getElementById('result').value = value.substring(0, value.length - 1);
}

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
