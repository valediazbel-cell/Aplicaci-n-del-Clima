const CACHE_DURATION = 60 * 60 * 1000; // 1 hora


function saveWeatherToCache(city, weatherData) {

    const cacheData = {
        data: weatherData,
        timestamp: Date.now()
    };

    localStorage.setItem(
        `weather_${city.toLowerCase()}`,
        JSON.stringify(cacheData)
    );
}


function getWeatherFromCache(city) {

    const cacheKey =
        `weather_${city.toLowerCase()}`;

    const cachedData =
        localStorage.getItem(cacheKey);

    if (!cachedData) {
        return null;
    }

    try {

        const cache =
            JSON.parse(cachedData);

        const cacheAge =
            Date.now() - cache.timestamp;

        if (cacheAge < CACHE_DURATION) {

            console.log(
                `Datos de ${city} obtenidos desde la caché.`
            );

            return cache.data;
        }

        localStorage.removeItem(cacheKey);

        return null;

    } catch (error) {

        localStorage.removeItem(cacheKey);

        return null;
    }
}


function getWeatherDescription(code) {

    const descriptions = {

        0: "Despejado",
        1: "Principalmente despejado",
        2: "Parcialmente nublado",
        3: "Nublado",
        45: "Niebla",
        48: "Niebla con escarcha",
        51: "Llovizna ligera",
        53: "Llovizna moderada",
        55: "Llovizna intensa",
        61: "Lluvia ligera",
        63: "Lluvia moderada",
        65: "Lluvia intensa",
        71: "Nevada ligera",
        73: "Nevada moderada",
        75: "Nevada intensa",
        80: "Chubascos ligeros",
        81: "Chubascos moderados",
        82: "Chubascos intensos",
        95: "Tormenta"
    };

    return descriptions[code] ||
        "Condición climática desconocida";
}


async function getWeather(cityName) {

    if (!cityName.trim()) {

        throw new Error(
            "Por favor, escribe una ciudad."
        );
    }


    // Revisar caché
    const cachedWeather =
        getWeatherFromCache(cityName);

    if (cachedWeather) {
        return cachedWeather;
    }


    try {

        // Buscar coordenadas de la ciudad
        const geocodingUrl =
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=es&format=json`;

        const geocodingResponse =
            await fetch(geocodingUrl);


        if (!geocodingResponse.ok) {

            throw new Error(
                "No se pudo buscar la ciudad."
            );
        }


        const geocodingData =
            await geocodingResponse.json();


        if (
            !geocodingData.results ||
            geocodingData.results.length === 0
        ) {

            throw new Error(
                `No se encontró la ciudad "${cityName}".`
            );
        }


        const location =
            geocodingData.results[0];


        // Consultar clima actual
        const weatherUrl =
            `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,weather_code&timezone=auto&wind_speed_unit=kmh&precipitation_unit=mm`;


        const weatherResponse =
            await fetch(weatherUrl);


        if (!weatherResponse.ok) {

            throw new Error(
                "No se pudo obtener el clima."
            );
        }


        const weatherData =
            await weatherResponse.json();


        if (!weatherData.current) {

            throw new Error(
                "La API no devolvió información del clima."
            );
        }


        const current =
            weatherData.current;


        const result = {

            city: location.name,

            country: location.country,

            temperature:
                current.temperature_2m,

            humidity:
                current.relative_humidity_2m,

            windSpeed:
                current.wind_speed_10m,

            precipitation:
                current.precipitation,

            description:
                getWeatherDescription(
                    current.weather_code
                )
        };


        // Guardar en caché
        saveWeatherToCache(
            cityName,
            result
        );


        return result;


    } catch (error) {

        if (error instanceof TypeError) {

            throw new Error(
                "No se pudo conectar con Open-Meteo. Revisa tu conexión a Internet."
            );
        }

        throw error;
    }
}


// Obtener el clima de varias ciudades
async function getWeatherForCities(cities) {

    const results = [];

    for (const city of cities) {

        try {

            const weather =
                await getWeather(city);

            results.push(weather);

        } catch (error) {

            results.push({

                city: city,

                error: error.message
            });
        }
    }

    return results;
}


export {
    getWeather,
    getWeatherForCities
};