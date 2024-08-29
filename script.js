const apiKey = 'e353a92e9d7a4023e707f75006fd6963'; // Replace with your OpenWeatherMap API key
const searchButton = document.getElementById('search-button');
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');

searchButton.addEventListener('click', () => {
  const cityName = cityInput.value;
  if (!cityName) return; // Handle empty input

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${mumbai}&appid=${e353a92e9d7a4023e707f75006fd6963}&units=metric`)
    .then(response => response.json())
    .then(data => {
      const location = data.name;
      const temp = Math.round(data.main.temp);
      const conditions = data.weather[0].main;

      weatherInfo.innerHTML = `
        <p>Location: ${location}</p>
        <p>Temperature: ${temp}°C</p>
        <p>Conditions: ${conditions}</p>
      `;
    })
    .catch(error => console.error(error));
});
