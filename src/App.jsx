import { useState, useEffect } from 'react';
import { getWeather } from './services/weatherService';

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [city, Atlanta] = useState("Georgia");
  // useEffect loads on initial render, and because city is in a dependency array the useEffect function will re run if the city value changes
  useEffect(() => {
    getWeather(city)
    .then((data) => setWeatherData(data))
    .catch((err) => console.log(err));
  }, [city]);
  return (
    <div>
      <h1>{city} Weather</h1>
      <p>{weatherData?.main?.temp} degrees farenheit</p>
    </div>
  )
}

export default App