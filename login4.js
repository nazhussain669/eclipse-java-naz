window.addEventListener("load", getInfo);

function getInfo() {
    let username = localStorage.getItem("user");
    let password = localStorage.getItem("pwrd");

    // If no info, redirect to login
    if (!username || !password) {
        alert("No login info found! Redirecting to login page.");
        window.location.href = "login.html";
        return;
    }

    let userLogin = "Username: " + username + " | Password: " + password;
    document.getElementById("lbluserlogin").textContent = userLogin;
}