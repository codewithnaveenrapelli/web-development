const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");
const result = document.getElementById("result")
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"

btn.addEventListener("click", () => {
    let input = document.getElementById("inpt-word").value;
    fetch(`${url} ${input}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
            <div class="word">
            <h3>${input}</h3>
            <button onclick="playSound()">
                <i class="fas fa-volume-up"></i>
            </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>${data[0].phonetic}</p>
            </div>
            <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>           
            <p class="word-example">${data[0].meanings[0].definitions[0].example || ""}</p>
            `;
            sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Couldn't find the word</h3>`
        });

});
const playSound = () => sound.play();