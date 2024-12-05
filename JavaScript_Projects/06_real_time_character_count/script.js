const text = document.getElementById("textarea");
const total = document.getElementById("total-count");
const remaining = document.getElementById("remaining-counter");

text.addEventListener("keyup", () => {
    updateCounter();
})

updateCounter()

function updateCounter() {
    total.innerHTML = text.value.length;
    remaining.innerHTML = text.getAttribute("maxlength") - text.value.length;
}