document.getElementById('AuthForm').addEventListener('submit', function(e) {
    e.preventDefault();


    let login = document.getElementById('login').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;


    const loginRegex = /^[a-zA-Z0-9_]{3,16}$/;
    const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
    const phoneRegex = /^\+?\d{10,15}$/;


    login = login.replace(/[^a-zA-Z0-9_]/g, "");
    document.getElementById('login').value = login;
    if (email.search(emailRegex) === -1) {
        alert("Email неправильний!");
        return;
    }
    if (!login.match(loginRegex)) {
        alert("Login неправильний!");
        return;
    }
    if (!phone.match(phoneRegex)) {
        alert("Phone неправильний!");
        return;
    }

    alert("Дані введені правильно!");
});