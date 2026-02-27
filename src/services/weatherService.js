import React, { useState, useEffect } from 'react';
import { getWeather } from './services/weatherService';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, Atlanta] = useState("Georgia");

  useEffect(() => {
    getWeather(Atlanta)
  .then ((data) => setWeatherData (data))
.catch ((err) => console/log(err));
  }, {city});
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(city)
    .then((data) => setWeatherData(data))
    .catch((err) => console/log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Atlanta"
          value={city}
          onChange={handleInputChange}
        />
        <button type="submit">Get Weather</button>
      </form>

      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
