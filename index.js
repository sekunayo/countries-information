'use strict'

const mainContainer = document.querySelector('.body');
const heading = document.querySelector('.heading');
const bodyContainer = document.querySelector('.body-container');
const displayData = function (input) {
    const html = `
    <div class="card">
    <div class="image-card">
        <img src=${input.flag} alt="" srcset="">
    </div>
    <div class="contents-card">
        <p> 🏳‍🌈 : <span class="capital">${input.capital}</span></p>
        <p> 👨‍👩‍👦‍👦 : <span class="Population">${input.population}</span></p>
        <p> 💸 : <span class="Currency"></span>${input.currencies[0].name}</p>
        <p> 🔤 : <span class="Languages"></span>${input.languages[0].name}</p>
        <p> ⏰ : <span class="Timezones">${input.timezones[0]}</span></p>
        <p> 📞 : <span class="Calling-codes">${input.callingCodes}</span></p>
    </div>
</div>`
    mainContainer.insertAdjacentHTML('afterbegin', html);
}

const countryData = function () {
    fetch("https://restcountries.eu/rest/v2/all").then(response => {
        if (!response.ok) throw new Error(`Country not found ${response.status}`)
        return response.json()
    }).then(data => {
        mainContainer.style.display = "grid";
        heading.style.display = "flex";
        data.forEach(element => {
            displayData(element);
        });
    }).catch(err => {
        renderError(err);
        mainContainer.style.display = "none";
        heading.style.display = "none";

    });
}
countryData();
function renderError(errorMessage){
    const html = `<p class="error">${errorMessage}</p>`;
    bodyContainer.insertAdjacentHTML('beforeend',html);

}