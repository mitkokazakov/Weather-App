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

  //   const weather = {
  //     tempC: data.current_weather.temperature as number,
  //     tempF: ((data.current_weather.temperature * 9) / 5 + 32),
  //     windKmh: data.current_weather.windspeed as number,
  //     windMph: data.current_weather.windspeed / 1.609,
  //     precipitationMm: data.hourly.precipitation[index] as number,
  //     precipitationIn: data.hourly.precipitation[index] / 25.4,
  //     feelsLikeC: data.hourly.apparent_temperature[index] as number,
  //     feelsLikeF: (data.hourly.apparent_temperature[index] * 9) / 5 + 32,
  //     humidity: data.hourly.relativehumidity_2m[index] as number,
  //   };

  const weather = {
    tempC: Number(data.current_weather.temperature.toFixed(1)),
    tempF: Number(((data.current_weather.temperature * 9) / 5 + 32).toFixed(1)),

    windKmh: Number(data.current_weather.windspeed.toFixed(1)),
    windMph: Number((data.current_weather.windspeed / 1.609).toFixed(1)),

    precipitationMm: Number(data.hourly.precipitation[index].toFixed(1)),
    precipitationIn: Number(
      (data.hourly.precipitation[index] / 25.4).toFixed(1)
    ),

    feelsLikeC: Number(data.hourly.apparent_temperature[index].toFixed(1)),
    feelsLikeF: Number(
      ((data.hourly.apparent_temperature[index] * 9) / 5 + 32).toFixed(1)
    ),

    humidity: Number(data.hourly.relativehumidity_2m[index].toFixed(1)),
  };

  return weather;
};

export const DetermineHourlyForecast = async (latitude: number,
  longitude: number) => {

    const resp = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=apparent_temperature,precipitation,relativehumidity_2m,weather_code&timezone=auto`
  );
  const data = await resp.json();
   const hourlyData = {
    "1 AM": {
      temp: Number(data.hourly.apparent_temperature[2]),
      tempF: Number(((data.hourly.apparent_temperature[2] * 9) / 5 + 32).toFixed(1)),
      code: data.hourly.weather_code[2],
    },
    "3 AM": {
      temp: Number(data.hourly.apparent_temperature[4]),
      tempF: Number(((data.hourly.apparent_temperature[4] * 9) / 5 + 32).toFixed(1)),
      code: data.hourly.weather_code[4],
    },
    "5 AM": {
      temp: Number(data.hourly.apparent_temperature[6]),
      tempF: Number(((data.hourly.apparent_temperature[6] * 9) / 5 + 32).toFixed(1)),
      code: data.hourly.weather_code[6],
    },
    "7 AM": {
      temp: Number(data.hourly.apparent_temperature[8]),
      tempF: Number(((data.hourly.apparent_temperature[8] * 9) / 5 + 32).toFixed(1)),
      code: data.hourly.weather_code[8],
    },
    "9 AM": {
      temp: Number(data.hourly.apparent_temperature[10]),
      tempF: Number(((data.hourly.apparent_temperature[10] * 9) / 5 + 32).toFixed(1)),
      code: data.hourly.weather_code[10],
    },
    "11 AM": {
      temp: Number(data.hourly.apparent_temperature[12]),
      tempF: Number(((data.hourly.apparent_temperature[12] * 9) / 5 + 32).toFixed(1)),
      code: data.hourly.weather_code[12],
    },
    "1 PM": {
      temp: Number(data.hourly.apparent_temperature[14]),
      tempF: Number(((data.hourly.apparent_temperature[14] * 9) / 5 + 32).toFixed(1)),
      code: data.hourly.weather_code[14],
    },
    "3 PM": {
      temp: Number(data.hourly.apparent_temperature[16]),
      tempF: Number(((data.hourly.apparent_temperature[16] * 9) / 5 + 32).toFixed(1)),
      code: data.hourly.weather_code[16],
    },
    "5 PM": {
      temp: Number(data.hourly.apparent_temperature[18]),
      tempF: Number(((data.hourly.apparent_temperature[18] * 9) / 5 + 32).toFixed(1)),
      code: data.hourly.weather_code[18],
    },
    "7 PM": {
      temp: Number(data.hourly.apparent_temperature[20]),
      tempF: Number(((data.hourly.apparent_temperature[20] * 9) / 5 + 32).toFixed(1)),
      code: data.hourly.weather_code[20],
    },
    "9 PM": {
      temp: Number(data.hourly.apparent_temperature[22]),
      tempF: Number(((data.hourly.apparent_temperature[22] * 9) / 5 + 32).toFixed(1)),
      code: data.hourly.weather_code[22],
    },
    "11 PM": {
      temp: Number(data.hourly.apparent_temperature[24]),
      tempF: Number(((data.hourly.apparent_temperature[24] * 9) / 5 + 32).toFixed(1)),
      code: data.hourly.weather_code[24],
    },
  };

   return hourlyData;
}
