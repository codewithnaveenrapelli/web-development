const inputValue = document.getElementById("inputDob");
const btnValue = document.getElementById("btn");
const resultOutput = document.getElementById("result");

function calAge() {
    const birthdayValue = inputValue.value;
    if (birthdayValue === "") {
        alert("Please enter your birthday")
    } else {
        const age = getAge(birthdayValue);
        resultOutput.innerHTML = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(birthdayValue) {

    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let year = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
    const date = currentDate.getDate() - birthdayDate.getDate();
    if (month < 0 || (month === 0 && date)) {
        year--;
    }
    return year;
}

btnValue.addEventListener("click", calAge)
