import React, { useState } from "react";
import { getWeather } from "./services/weatherService";
import "./App.css";

const Weather = () => {
  const [city, setCity] = useState("Atlanta");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);

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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="card">
        <div className="top-bar">
          <h1>Weather App</h1>
          <button onClick={toggleDarkMode} className="toggle-btn">
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
          />
          <button type="submit">Search</button>
        </form>

        {error && <p className="error">{error}</p>}

        {weatherData && (
          <div className="weather-info fade-in">
            <h2>{weatherData.name}</h2>

            {/* 🌡 Weather Icon */}
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="weather icon"
            />

            <p>{weatherData.weather[0].description}</p>
            <h3>{weatherData.main.temp}°F</h3>
            <p>Humidity: {weatherData.main.humidity}%</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;