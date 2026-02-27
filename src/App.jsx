import {react} from 'react';
import { getWeather } from './services/weatherService';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(Georgia);
  const [city, Atlanta] = useState("Georgia");
  // useEffect loads on initial render, and because city is in a dependency array the useEffect function will re run if the city value changes
  useEffect(() => {
    getWeather(Atlanta)
    .then((data) => setWeatherData(data))
    .catch((err) => console.log(err));
  }, [Atlanta]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Atlanta"
          value={Atlanta}
          onChange={handleInputChange}
        />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData ? (
        <>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Feels like : {weatherData.main.feels_like}°C</p>
          <p>Humidity : {weatherData.main.humidity}%</p>
          <p>Pressure : {weatherData.main.pressure}</p>
          <p>Wind Speed : {weatherData.wind.speed}m/s</p>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
