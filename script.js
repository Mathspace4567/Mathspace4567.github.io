document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('id_username').value.trim();
    const passwordGroup = document.getElementById('password-group');
    const submitBtn = document.getElementById('submit-btn');

    if (passwordGroup.style.display === 'none') {
        // First step: Continue
        if (username === '4567') {
            // SECRET CODE: Load games iframe
            document.querySelector('.login-page').style.display = 'none';
            document.getElementById('game-iframe-container').style.display = 'block';
            
            // Change this URL to your actual games repo / index.html
            document.getElementById('game-iframe').src = "https://your-username.github.io/your-games-repo/";
            // Or local: "games/index.html" if you put the other repo inside this folder
        } else {
            // Normal flow
            passwordGroup.style.display = 'block';
            document.getElementById('id_username').readOnly = true;
            submitBtn.textContent = 'Log in';
            document.getElementById('id_password').focus();
        }
    } else {
        // Password entered - fake success
        alert("✅ Login successful! (Demo)");
    }
});

function backToLogin() {
    document.getElementById('game-iframe-container').style.display = 'none';
    document.querySelector('.login-page').style.display = 'flex';
    // Reset form
    document.getElementById('login-form').reset();
    document.getElementById('password-group').style.display = 'none';
    document.getElementById('id_username').readOnly = false;
    document.getElementById('submit-btn').textContent = 'Continue';
}
