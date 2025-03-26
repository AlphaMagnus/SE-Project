<script>
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("year").textContent = new Date().getFullYear();

        let loggedInUser = localStorage.getItem("loggedInUser");
        if (!loggedInUser) {
            window.location.href = "login.html"; // Redirect if not logged in
        } else {
            document.getElementById("donorName").textContent = "👤 " + loggedInUser;
        }

        document.getElementById("donationForm").addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Donation form submitted successfully!");
            // You can add form validation and submission logic here
        });
    });
</script>
