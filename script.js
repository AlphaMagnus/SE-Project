document.addEventListener("DOMContentLoaded", function () {
    // Fix for year element
    let yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    } else {
        console.error("Element with ID 'year' not found!");
    }

    let messageElement = document.getElementById("message");
    if (messageElement) {
        messageElement.textContent = "Thank you for your willingness to donate! We will contact you soon.";
    } else {
        console.error("Element with ID 'message' not found!");
    }

    checkLoginStatus(); // Ensure login status is checked only after DOM loads

    let loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form refresh

            let emailInput = document.querySelector("#loginForm input[type='email']");
            if (emailInput) {
                let email = emailInput.value;
                let username = email.split("@")[0]; // Extract username

                localStorage.setItem("loggedInUser", username); // Store user info
                window.location.href = "index.html"; // Redirect
            } else {
                console.error("Email input field not found!");
            }
        });
    }
});

function showMessage() {
    let messageElement = document.getElementById("message");
    if (messageElement) {
        messageElement.textContent = "Thank you for your willingness to donate! We will contact you soon.";
    } else {
        console.error("Element with ID 'message' not found!");
    }
}

function showForm(formType) {
    let loginForm = document.getElementById("loginForm");
    let registerForm = document.getElementById("registerForm");
    let loginBtn = document.getElementById("loginBtn");
    let registerBtn = document.getElementById("registerBtn");

    if (loginForm && registerForm && loginBtn && registerBtn) {
        if (formType === 'login') {
            loginForm.style.display = "block";
            registerForm.style.display = "none";
            loginBtn.classList.add("active");
            registerBtn.classList.remove("active");
        } else if (formType === 'register') {
            loginForm.style.display = "none";
            registerForm.style.display = "block";
            loginBtn.classList.remove("active");
            registerBtn.classList.add("active");
        }
    } else {
        console.error("One or more form elements not found!");
    }
}

function checkLoginStatus() {
    let loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
        let loginButton = document.getElementById("loginBtn");
        if (loginButton) {
            loginButton.style.display = "none"; // Hide login button
        }

        let userBox = document.createElement("div");
        userBox.classList.add("user-box");
        userBox.innerHTML = `<span>👤 ${loggedInUser}</span>`;
        document.querySelector("nav ul").appendChild(userBox);
    }
}
