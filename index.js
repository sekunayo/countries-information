'use strict'

const countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Argentina',
    'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh',
    'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Botswana', 'Brazil', 'Brunei',
    'Bulgaria', 'Burkina Faso', 'Burundi', "Côte d'Ivoire", 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada',
    'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica',
    'Croatia', 'Cuba', 'Cyprus', 'Denmark', 'Djibouti',
    'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea',
    'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany',
    'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Hungary',
    'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan',
    'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein',
    'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania',
    'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar',
    'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan',
    'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia',
    'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe',
    'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands',
    'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria',
    'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey',
    'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States of America',
    'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
];

const mainContainer = document.querySelector('.body');
const modalContainer = document.querySelector('.modal-container');
const heading = document.querySelector('.heading');
const bodyContainer = document.querySelector('.body-container');
const modalContents = document.querySelector('.modal-contents');
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

const countryData = function (country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(response => {
        if (!response.ok) throw new Error(`Country not found ${response.status}`)
        return response.json()
    }).then(data => {
        mainContainer.style.display = "grid";
        heading.style.display = "flex";
        displayData(data[0]);
    }).catch(_ => {
        modalContainer.style.display = "flex";
    });
}

countries.forEach(element => {
    countryData(element);
});