const btn = document.getElementById("Calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const total = document.getElementById("total");

function calculateTip() {
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * (tipValue / 100);
    total.innerHTML = totalValue.toFixed(2);
}

btn.addEventListener("click", calculateTip)