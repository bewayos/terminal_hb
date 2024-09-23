const correctDate = '2000-01-01'; // Change to the correct birthdate

document.getElementById('input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const input = event.target.value;
        const outputElement = document.getElementById('output');

        if (input === correctDate) {
            outputElement.innerHTML += 'Happy Birthday! 🎉<br>';
        } else {
            outputElement.innerHTML += '> ' + input + '<br>Incorrect date! Please try again.<br>';
        }

        event.target.value = ''; // Clear the input field after submission
    }
});
