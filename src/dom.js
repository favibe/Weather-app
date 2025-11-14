import { fetchWeather } from "./api";
import { processWeather } from "./processWeather";
import { displayWeather } from "./display";

let lastWeatherData = null;
let currentUnit = "C"; // C or F

export function setupFormListener() {
  const form = document.getElementById("weather-form");
  const input = document.getElementById("location-input");
  const display = document.getElementById("weather-display");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const location = input.value.trim();
    if (!location) return;

    display.innerHTML = "Loading...";

    try {
      const raw = await fetchWeather(location);
      lastWeatherData = processWeather(raw);
      displayWeather(lastWeatherData, currentUnit);
    } catch (err) {
      display.innerHTML = "Error: Could not fetch weather.";
      console.error(err);
    }
  });
}

export function setupTempToggle() {
  const cBtn = document.getElementById("celsius-btn");
  const fBtn = document.getElementById("fahrenheit-btn");

  cBtn.addEventListener("click", () => {
    currentUnit = "C";
    cBtn.classList.add("active");
    fBtn.classList.remove("active");

    if (lastWeatherData) displayWeather(lastWeatherData, currentUnit);
  });

  fBtn.addEventListener("click", () => {
    currentUnit = "F";
    fBtn.classList.add("active");
    cBtn.classList.remove("active");

    if (lastWeatherData) displayWeather(lastWeatherData, currentUnit);
  });
}
