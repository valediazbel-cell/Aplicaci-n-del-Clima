const weatherResult =
    document.getElementById("weatherResult");

const citiesContainer =
    document.getElementById("citiesContainer");


function showLoading() {

    weatherResult.textContent =
        "🌤️ Consultando el clima...";

    citiesContainer.innerHTML = "";
}


function showWeather(
    city,
    country,
    temperature,
    description
) {

    weatherResult.textContent =
        `🌡️ Temperatura en ${city} (${country}): ${temperature} °C`;
}


function showError(message) {

    weatherResult.textContent =
        `❌ ${message}`;

    citiesContainer.innerHTML = "";
}


function showCitiesWeather(cities) {
    citiesContainer.innerHTML = "";

    cities.forEach(weather => {

        const card =
            document.createElement("article");

        card.classList.add("weather-card");

        if (weather.error) {

            card.innerHTML = `
                <h2>📍 ${weather.city}</h2>

                <p class="error-message">
                    ❌ ${weather.error}
                </p>
            `;

            citiesContainer.appendChild(card);

            return;
        }


        /* ======================================
           Elegir fondo según el clima
        ====================================== */

        const description =
            weather.description.toLowerCase();


        if (
            description.includes("despejado") ||
            description.includes("claro")
        ) {
            card.classList.add("sunny");

        } else if (
            description.includes("lluvia") ||
            description.includes("llovizna") ||
            description.includes("chubasco")
        ) {
            card.classList.add("rainy");

        } else if (
            description.includes("nieve") ||
            description.includes("nevada")
        ) {
            card.classList.add("snowy");

        } else if (
            description.includes("tormenta")
        ) {
            card.classList.add("stormy");

        } else {
            card.classList.add("cloudy");
        }


        /* ======================================
           Crear tarjeta
        ====================================== */

        card.innerHTML = `
            <div class="weather-card-header">

                <div>
                    <h2>${weather.city}</h2>

                    <span>
                        ${weather.country}
                    </span>
                </div>

                <div class="weather-temperature">
                    ${weather.temperature} °C
                </div>

            </div>


            <p class="weather-description">
                ☁️ ${weather.description}
            </p>


            <div class="weather-details">

                <div class="weather-detail">

                    <span>💧</span>

                    <div>
                        <small>Humedad</small>

                        <strong>
                            ${weather.humidity}%
                        </strong>
                    </div>

                </div>


                <div class="weather-detail">

                    <span>💨</span>

                    <div>
                        <small>Viento</small>

                        <strong>
                            ${weather.windSpeed} km/h
                        </strong>
                    </div>

                </div>


                <div class="weather-detail">

                    <span>🌧️</span>

                    <div>
                        <small>Precipitación</small>

                        <strong>
                            ${weather.precipitation} mm
                        </strong>
                    </div>

                </div>

            </div>
        `;


        citiesContainer.appendChild(card);
    });
}


export {
    showLoading,
    showWeather,
    showError,
    showCitiesWeather
};