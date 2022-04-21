const STORAGE_KEY = "usernameStorage";
const showUsername = document.getElementById("username");


const setUsername = (name) => {
    showUsername.textContent = "AAAAAAAAAAAAAAAAAAA";
}

function login(loginForm) {
    username = loginForm.username.value;
    console.log(username);
    localStorage.setItem(STORAGE_KEY, username);
}

setUsername(localStorage.getItem(STORAGE_KEY));
