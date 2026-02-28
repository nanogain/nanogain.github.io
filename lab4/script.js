document.querySelector("#zipcode").addEventListener("input", ZipCode);
document.querySelector("#password").addEventListener("click", suggestPassword);
document.querySelector("#submit").addEventListener("click", checkPassword);
document.querySelector("#submit").addEventListener("click", checkPasswordMatch);

let passwordMessage = document.createElement("span");
passwordMessage.id = "passwordMessage";
document.querySelector("#password").insertAdjacentElement("afterend", passwordMessage);

let secondMessage = document.createElement("span");
secondMessage.id = "usernameMessage";
document.querySelector("#username").insertAdjacentElement("afterend", secondMessage);

let thirdMessage = document.createElement("span");
thirdMessage.id = "confirmPasswordMessage";
document.querySelector("#confirmPassword").insertAdjacentElement("afterend", thirdMessage);

async function ZipCode() {
    try {
        let zipCodeInput = document.querySelector("#zipcode").value;
        let zipCodeResult = await fetch(`https://csumb.space/api/cityInfoAPI.php?zip=${zipCodeInput}`);
        if (!zipCodeResult.ok) {
            throw new Error("Error Accessing API endpoint.");
        }
        let zipCodeData = await zipCodeResult.json();
        console.log(zipCodeData);
        if (zipCodeData == false) {
            document.querySelector("#city").textContent = "Zip code not found";
            document.querySelector("#latitude").textContent = "";
            document.querySelector("#longitude").textContent = "";
        } else {
            document.querySelector("#city").textContent = zipCodeData.city;
            document.querySelector("#latitude").textContent = zipCodeData.latitude;
            document.querySelector("#longitude").textContent = zipCodeData.longitude;
        }
    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing the API");
        } else {
            console.log();
        }
    }
}

document.querySelector("#username").addEventListener("input", checkUsername);

function checkUsername() {
    let username = document.querySelector("#username").value;
    let unavailable = ["eeny", "meeny", "miny", "maria"];
    let message = document.querySelector("#usernameMessage");
    if (unavailable.includes(username.toLowerCase())) {
        message.textContent = "Username not available";
        message.style.color = "red";
    } else if (username === "") {
        message.textContent = "";
    } else {
        message.textContent = "Username available";
        message.style.color = "green";
    }
}

function suggestPassword() {
    let password = "";
    for (let i = 0; i < 12; i++) {
        const caractereAleatoire = String.fromCharCode(32 + Math.floor(Math.random() * 95));
        password += caractereAleatoire;
    }
    document.querySelector("#suggestedPassword").textContent = password;
}

function checkPassword() {
    let password = document.querySelector("#password").value;
    let message = document.querySelector("#passwordMessage");
    if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters";
        message.style.color = "red";
    } else {
        message.textContent = "";
    }
}

function checkPasswordMatch() {
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirmPassword").value;
    let message = document.querySelector("#confirmPasswordMessage");
    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match";
        message.style.color = "red";
    } else {
        message.textContent = "";
    }
}

function checkUsernameLength() {
    let username = document.querySelector("#username").value;
    let message = document.querySelector("#usernameMessage");
    if (username.length < 3) {
        message.textContent = "Username must be at least 3 characters";
        message.style.color = "red";
    } else {
        message.textContent = "";
    }
}

document.querySelector("#submit").addEventListener("click", checkUsernameLength);