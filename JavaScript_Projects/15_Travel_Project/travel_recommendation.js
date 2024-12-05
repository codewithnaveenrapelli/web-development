
document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');
    if (searchButton) {
        searchButton.addEventListener('click', function () {
            const query = document.getElementById('searchInput').value.toLowerCase();
            fetch('./travel_recommendation_api.json')
                .then((response) => response.json())
                .then((data) => search(query, data));
        });
    } else {
        console.error("Search button not found.");
    }
});
function search(query, data) {
    let results = [];
    // Check for matches in beaches
    data.beaches.forEach(beach => {
        if (beach.name.toLowerCase().includes(query)) {
            results.push(beach);
        }
    });
    // Check for matches in temples
    data.temples.forEach(temple => {
        if (temple.name.toLowerCase().includes(query)) {
            results.push(temple);
        }
    });


    // Check for matches in countries and cities
    data.countries.forEach(country => {
        if (country.name.toLowerCase().includes(query)) {
            results.push(country);
        } else {
            country.cities.forEach(city => {
                if (city.name.toLowerCase().includes(query)) {
                    results.push(city);
                }
            });
        }
    });

    // Display results
    displayResults(results);
}
function displayResults(results) {
    const resultsDiv = document.getElementById('results-container');
    if (!resultsDiv) {
        console.error("Results div not found.");
        return;
    }

    // Clear previous results
    resultsDiv.innerHTML = '';

    if (results.length === 0) {
        resultsDiv.innerHTML = '<p>No results found.</p>';
        return;
    }

    results.forEach(item => {
        // Create elements for each result
        const resultCard = document.createElement('div');
        resultCard.className = 'result-card';

        const nameElement = document.createElement('h3');
        nameElement.textContent = item.name;
        resultCard.appendChild(nameElement);

        if (item.imageUrl) {
            const imageElement = document.createElement('img');
            imageElement.src = item.imageUrl;
            imageElement.alt = item.name;
            imageElement.className = 'result-image';
            resultCard.appendChild(imageElement);
        }

        if (item.description) {
            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = item.description;
            resultCard.appendChild(descriptionElement);
        }

        resultsDiv.appendChild(resultCard);
    });
}