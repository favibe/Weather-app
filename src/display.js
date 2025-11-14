export function displayWeather(weather, currentUnit = "C") {
  const display = document.getElementById("weather-display");

  // Visual Crossing online icon link
  const iconUrl = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${weather.icon}.png`;

  const temp =
    currentUnit === "C"
      ? `${weather.tempC.toFixed(1)}°C`
      : `${weather.tempF.toFixed(1)}°F`;

  display.innerHTML = `
    <h2>${weather.city}</h2>
    <p>Local time: ${weather.localTime}</p>
    <img src="${iconUrl}" alt="${weather.conditions}" />
    <p>${weather.conditions}</p>
    <p class="temperature">${temp}</p>
  `;
}
