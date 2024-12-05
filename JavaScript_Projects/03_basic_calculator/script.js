const btn = document.querySelectorAll("button");
const inputValue = document.getElementById("calculator");




for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        const buttonValue = btn[i].textContent;
        if (buttonValue === "C") {
            clear();
        } else if (buttonValue === "=") {
            calResult();
        } else {
            appendValue(buttonValue);
        }
    })
}

function clear() {
    inputValue.value = "";
}

function calResult() {
    inputValue.value = eval(inputValue.value);
}
function appendValue(buttonValue) {
    inputValue.value = inputValue.value + buttonValue;
}









