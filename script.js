
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        
        let isValid = true;
        let messages = [];

        // Validate username
        if(username.length < 3) {
            isValid = false;
            messages.push('Username must have at least 3 characters!');
        }
        // Validate email
        if(!(email.includes('@') && email.includes('.'))) {
            isValid = false;
            messages.push('Enter a valid email!');
        }

        // Validate password
        if(password.length < 8) {
            isValid = false
            messages.push('Enter a strong password with at least 8 characters!')
        }

        // Display the feedback
        feedbackDiv.style.display = 'block';
        if(isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    });
});
