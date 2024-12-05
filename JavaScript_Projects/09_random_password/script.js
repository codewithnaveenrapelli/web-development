const btn = document.querySelector(".btn");
const input = document.getElementById("input")
const fa_copy = document.querySelector(".fa-copy")
const alert = document.querySelector(".alert-container")


btn.addEventListener("click", () => {
    createPassword();
});

fa_copy.addEventListener("click", () => {
    copyPassword();
    if (input.value) {
        alert.classList.add('active');
        setTimeout(() => {
            alert.classList.remove("active")
        })
    }
})

function createPassword() {
    const char = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomNum = Math.floor(Math.random() * char.length);
        password = password + char.substring(randomNum, randomNum + 1);
    }
    input.value = password;
    alert.innerText = password + " copied"
}

function copyPassword() {
    input.select();
    input.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(input.value);
}
/*
DOM Element Selection:

javascript
Copy code
const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");
Here, the code is selecting DOM elements using document.querySelector and document.getElementById.These elements are referenced later in the code.

    btnEl: Represents a button with the class "btn".
        inputEl: Represents an input field with the id "input".
            copyIconEl: Represents an element with the class "fa-copy".This is likely an icon used for copying.
                alertContainerEl: Represents an element with the class "alert-container".This is probably a container for displaying alerts.
Event Listeners:

    javascript
Copy code
btnEl.addEventListener("click", () => {
    createPassword();
});

copyIconEl.addEventListener("click", () => {
    copyPassword();
    if (inputEl.value) {
        alertContainerEl.classList.remove("active");
        setTimeout(() => {
            alertContainerEl.classList.add("active");
        }, 2000);
    }
});

The first event listener is attached to the button (btnEl). When the button is clicked, it calls the createPassword function.

The second event listener is attached to an element with the class "fa-copy" (copyIconEl). When this element (presumably an icon representing copying) is clicked, it calls the copyPassword function. Additionally, it checks if the input field (inputEl) has a value. If it does, it removes the "active" class from the alert container (alertContainerEl), and after a delay of 2000 milliseconds (2 seconds), it adds the "active" class back.

Password Generation:

javascript
Copy code
function createPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  let password = "";
  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }
  inputEl.value = password;
  alertContainerEl.innerText = password + " copied!";
}
The createPassword function generates a random password by iterating over a character set (chars) and appending random characters to the password string. The resulting password is then set as the value of the input field (inputEl). Additionally, the password (with an added message) is set as the text content of the alert container (alertContainerEl).

Clipboard Copying:

javascript
Copy code
function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputEl.value);
} 
The copyPassword function is responsible for copying the content of the input field (inputEl) to the clipboard. It uses the select and setSelectionRange methods to select the text in the input field, and then it uses the navigator.clipboard.writeText method to write the selected text to the clipboard.
*/