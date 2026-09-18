import {
    getWeatherForCities
} from "./api.js";


import {
    showLoading,
    showError,
    showCitiesWeather
} from "./ui.js";


const cityInput =
    document.getElementById("cityInput");

const searchButton =
    document.getElementById("searchButton");


searchButton.addEventListener(
    "click",
    searchWeather
);


async function searchWeather() {

    const input =
        cityInput.value.trim();


    if (input === "") {

        showError(
            "Por favor, escribe al menos una ciudad."
        );

        return;
    }


    // Separar las ciudades por coma
    const cities =
        input
            .split(",")
            .map(city => city.trim())
            .filter(city => city !== "");


    if (cities.length === 0) {

        showError(
            "Escribe al menos una ciudad válida."
        );

        return;
    }


    // Evitar ciudades repetidas
    const uniqueCities =
        [...new Set(
            cities.map(city => city.toLowerCase())
        )];


    showLoading();


    try {

        const weatherResults =
            await getWeatherForCities(
                uniqueCities
            );


        showCitiesWeather(
            weatherResults
        );


    } catch (error) {

        showError(
            error.message
        );
    }
}