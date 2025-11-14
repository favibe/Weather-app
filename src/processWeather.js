export function processWeather(data) {
  const tempC = data.currentConditions.temp;
  const tempF = tempC * 1.8 + 32;

  return {
    city: data.address,
    conditions: data.currentConditions.conditions,
    icon: data.currentConditions.icon, // e.g. "rain", "clear-day"
    tempC,
    tempF,
    localTime: data.currentConditions.datetime,
  };
}
