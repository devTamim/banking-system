document.getElementById('login').addEventListener('click', function () {
    const emailField = document.getElementById('email');
    const emailData = emailField.value;
    const passField = document.getElementById('password');
    const passData = passField.value;

    if (emailData == "tamim@gmail.com" && passData == "privacy") {
        window.location.href = "bank.html";
    }

})