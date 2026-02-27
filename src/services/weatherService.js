export const getWeather = async (city) => {
  const API_KEY = "4685d553a4d035e54753d4f93f2dccc7"; // <-- Replace with your key

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return await response.json();
}