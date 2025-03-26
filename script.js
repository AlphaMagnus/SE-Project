document.addEventListener("DOMContentLoaded", function () {
    checkLoginStatus();

    let loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            loginAs("donor");
        });
    }
});

function showForm(formType) {
    let loginForm = document.getElementById("loginForm");
    let registerForm = document.getElementById("registerForm");
    let loginBtn = document.getElementById("loginBtn");
    let registerBtn = document.getElementById("registerBtn");

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
}

function loginAsDonor() {
    window.location.href = "donor.html";
}

function loginAsHospital() {
    window.location.href = "hospital.html";
}

function redirectToAdmin() {
    window.location.href = "admin.html";
}

function checkLoginStatus() {
    let loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
        let loginButton = document.getElementById("loginBtn");
        if (loginButton) {
            loginButton.style.display = "none";
        }

        let userBox = document.createElement("div");
        userBox.classList.add("user-box");
        userBox.innerHTML = `<span>👤 ${loggedInUser}</span>`;
        document.querySelector(".container").appendChild(userBox);
    }
}


document.getElementById("donorbtn").addEventListener("click", function () {
    window.location.href = "donor.html";
});