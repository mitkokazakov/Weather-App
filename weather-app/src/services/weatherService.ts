export const TownWeatherDetermine = async (
  latitude: number,
  longitude: number
) => {
  const resp = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=apparent_temperature,precipitation,relativehumidity_2m&timezone=auto`
  );
  const data = await resp.json();

  const time = data.current_weather.time;

  const date = new Date(time);
  date.setMinutes(0, 0, 0); // force HH:00
  const timeStr = date.toISOString().slice(0, 16);
  const index = data.hourly.time.indexOf(timeStr);

  console.log(timeStr);

  console.log(index);

  const weather = {
    tempC: data.current_weather.temperature as number,
    tempF: (data.current_weather.temperature * 9) / 5 + 32,
    windKmh: data.current_weather.windspeed as number,
    windMph: data.current_weather.windspeed / 1.609,
    precipitationMm: data.hourly.precipitation[index] as number,
    precipitationIn: data.hourly.precipitation[index] / 25.4,
    feelsLikeC: data.hourly.apparent_temperature[index] as number, // Placeholder
    feelsLikeF: (data.hourly.apparent_temperature[index] * 9) / 5 + 32, // Placeholder
    humidity: data.hourly.relativehumidity_2m[index] as number,
  };

  return weather;
};
