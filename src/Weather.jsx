import React, { useState } from "react";
import { getWeather } from "./services/weatherService";

const Weather = () => {
  const [city, setCity] = useState("Atlanta");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await getWeather(city);
      setWeatherData(data);
      setError("");
    } catch (err) {
      setError("City not found");
      setWeatherData(null);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button type="submit">Search</button>
      </form>

      {error && <p>{error}</p>}

      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temp: {weatherData.main.temp}°F</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default Weather;