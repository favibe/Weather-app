export async function fetchWeather(location) {
  const apiKey = "YOUR_API_KEY";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apiKey}&contentType=json`;

  const res = await fetch(url);
  return await res.json();
}
