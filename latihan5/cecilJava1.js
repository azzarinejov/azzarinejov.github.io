// JavaScript source code
const STORAGE_KEY = "usernameStorage";
const showUsername = document.getElementById("usernameProfile");

const setUsername = (name) => {
    showUsername.textContent = name;
}

setUsername(localStorage.getItem(STORAGE_KEY));


