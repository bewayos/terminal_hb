const inputField = document.getElementById('input');
const output = document.getElementById('output');
const correctDate = "2000-01-01"; // Замініть це значення на правильну дату

inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const userInput = inputField.value.trim();
        if (userInput === correctDate) {
            printGreeting();
        } else {
            printError();
        }
        inputField.value = '';
    }
});

function printGreeting() {
    const greeting = `
    Access Granted
    Initializing birthday protocol...
    
    ##########  HAPPY BIRTHDAY! ##########
    ##########  WISHING YOU ALL ##########
    ##########  THE BEST!  ###############
    
    Have an awesome day, [Friend's Name]!
    `;
    output.innerText += greeting;
}

function printError() {
    const errorMsg = `
    Access Denied
    Invalid Date. Please try again.
    `;
    output.innerText += errorMsg;
}
