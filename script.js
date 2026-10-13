
const defaultUsers = [
    {
        username: "admin",
        password: "admin123",
        role: "admin"
    },
    {
        username: "student",
        password: "stud123",
        role: "student"
    }
];

// Initialize demo users only if no users are stored.
if (localStorage.getItem("collegeUsers") === null) {
    localStorage.setItem(
        "collegeUsers",
        JSON.stringify(defaultUsers)
    );
}

document.getElementById("loginForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        const username =
            document.getElementById("username").value.trim();

        const password =
            document.getElementById("password").value;

        const role =
            document.getElementById("role").value;

        const users = JSON.parse(
            localStorage.getItem("collegeUsers") || "[]"
        );

        const user = users.find(function (u) {
            return u.username === username &&
                   u.password === password &&
                   u.role === role;
        });

        const message = document.getElementById("message");

        if (user) {
            localStorage.setItem(
                "loggedInUser",
                JSON.stringify({
                    username: user.username,
                    role: user.role
                })
            );

            window.location.href =
                "dashboard.html?role=" + user.role;
        } else {
            message.textContent =
                "Invalid username, password, or role!";
        }
    });