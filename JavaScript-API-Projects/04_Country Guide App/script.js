let btn = document.getElementById("search-btn");
let countryInpt = document.getElementById("country-inpt");
let result = document.getElementById("result");
btn.addEventListener("click", () => {
    let countryName = countryInpt.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    // console.log(finalURL);
    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            // console.log(data[0].capital[0]);
            // console.log(data[0].flags.svg);
            // console.log(Object.keys(data[0].currencies)[0]);
            // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
            result.innerHTML = `<img src="${data[0].flags.svg}" class="flag-img">
            <h2>capital : ${data[0].capital[0]}</h2>
            <h2>continent : ${data[0].continents[0]}</h2>
            <h2>population : ${data[0].population}</h2>
            <h2>currency : ${data[0].currencies[Object.keys(data[0].currencies)].name}</h2>
            `;
            // const renderedText = htmlElement.innerText;
        }).catch(() => {
            if (countryName.length == 0) {
                result.innerHTML = `<h3>The Input field cannot be empty.</h3>`
            } else {
                result.innerHTML = `<h3>Please enter a valid country name.</h3>`
            }
        })
})


