document.getElementById('birthdateInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const input = event.target.value;
        const correctDate = '2000-01-01';  // Change to your friend's birthdate
        
        if (input === correctDate) {
            const greetingDiv = document.getElementById('greeting');
            greetingDiv.textContent = 'Happy Birthday! 🎉';
            greetingDiv.classList.remove('hidden');
        } else {
            alert('Incorrect date! Please try again.');
        }
    }
});
