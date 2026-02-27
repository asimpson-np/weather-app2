// apiKey stores the environment variable VITE_WEATHER_API based on the documentation from Vite https://vite.dev/guide/env-and-mode
const apiKey = import.meta.env.VITE_WEATHER_API;

export async function getWeather(Georgia) {
    // using fetch to grab weather data from openweathermap 2.5 using the syntax provided by the API documentation https://openweathermap.org/current?collection=current_forecast
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Atlanta}&units=imperial&appid=${4685d553a4d035e54753d4f93f2dccc7}`);
    const data = await response.json();
    return data;
}