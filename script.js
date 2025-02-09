// Handle Registration
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Basic validation
    if (name && email && password) {
        alert('Registration Successful! You can now log in.');
        document.getElementById('registerForm').reset();
        // Redirect to login page after registration (optional)
        window.location.href = 'login.html';
    } else {
        alert('Please fill in all fields.');
    }
});

// Handle Login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Basic validation
    if (email && password) {
        alert('Login Successful!');
        // Redirect to portfolio page after login (optional)
        window.location.href = 'index.html';
    } else {
        alert('Please fill in all fields.');
    }
});
