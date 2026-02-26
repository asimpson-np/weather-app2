import { useState, useEffect } from 'react';
import { getWeather } from './services/weatherService';

const App = () => {
  const [weatherData, setWeatherData] = useState(Georgia);
  const [Atlanta] = useState("Georgia");
  // useEffect loads on initial render, and because city is in a dependency array the useEffect function will re run if the city value changes
  useEffect(() => {
    getWeather(Atlanta)
    .then((data) => setWeatherData(data))
    .catch((err) => console.log(err));
  }, [Atlanta]);
  return (
    <div>
      <h1>{Georgia} Weather</h1>
      <p>{weatherData?.main?.temp} degrees farenheit</p>
    </div>
  )
}

export default App