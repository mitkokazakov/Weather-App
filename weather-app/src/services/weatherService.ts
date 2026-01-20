import type { DailyForecastType } from "../hooks/daily";

export const TownWeatherDetermine = async (
  latitude: number,
  longitude: number,
) => {
  const resp = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=apparent_temperature,precipitation,relativehumidity_2m&timezone=auto`,
  );
  const data = await resp.json();

  const time = data.current_weather.time;

  const date = new Date(time);
  date.setMinutes(0, 0, 0); // force HH:00

  const pad = (n: number) => String(n).padStart(2, "0");

  console.log(date);
  
  const timeStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` +
  `T${pad(date.getHours())}:00`;
  const index = data.hourly.time.indexOf(timeStr);


  const weather = {
    tempC: Number(data.current_weather.temperature.toFixed(1)),
    tempF: Number(((data.current_weather.temperature * 9) / 5 + 32).toFixed(1)),

    windKmh: Number(data.current_weather.windspeed.toFixed(1)),
    windMph: Number((data.current_weather.windspeed / 1.609).toFixed(1)),

    precipitationMm: Number(data.hourly.precipitation[index].toFixed(1)),
    precipitationIn: Number(
      (data.hourly.precipitation[index] / 25.4).toFixed(1),
    ),

    feelsLikeC: Number(data.hourly.apparent_temperature[index].toFixed(1)),
    feelsLikeF: Number(
      ((data.hourly.apparent_temperature[index] * 9) / 5 + 32).toFixed(1),
    ),

    humidity: Number(data.hourly.relativehumidity_2m[index].toFixed(1)),
    code: data.current_weather.weathercode,
  };

  return weather;
};

export const DetermineHourlyForecast = async (
  latitude: number,
  longitude: number,
  day: string,
) => {
  const resp = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=apparent_temperature,precipitation,relativehumidity_2m,weather_code&timezone=auto`,
  );
  const data = await resp.json();

  const hourlyTemps = [];

  for (let index = 0; index < data.hourly.time.length; index++) {
    const element = data.hourly.time[index];

    const formattedElement = new Date(element);

    const elementName = formattedElement.toLocaleDateString("en-US", {
      weekday: "long",
    });

    if (elementName === day) {
      const rawHour = new Date(data.hourly.time[index]);

      const labelHour = rawHour.toLocaleTimeString("en-US", {
        hour: "numeric",
        hour12: true,
      });

      const tempC = Number(data.hourly.apparent_temperature[index].toFixed(1));
      const tempF = Number(
        ((data.hourly.apparent_temperature[index] * 9) / 5 + 32).toFixed(1),
      );

      let obj = {
        temp: tempC,
        tempF: tempF,
        code: data.hourly.weather_code[index],
        labelHour: labelHour,
      };
      hourlyTemps.push(obj);
    }
  }

  return hourlyTemps;
};

const weatherIconsMap: Record<number, string> = {
  0: "/icon-sunny.webp",
  1: "/icon-partly-cloudy.webp",
  2: "/icon-partly-cloudy.webp",
  3: "/icon-overcast.webp",
  45: "/icon-fog.webp",
  48: "/icon-fog.webp",
  51: "/icon-drizzle.webp",
  53: "/icon-drizzle.webp",
  55: "/icon-drizzle.webp",
  56: "/icon-drizzle.webp",
  57: "/icon-drizzle.webp",
  66: "/icon-drizzle.webp",
  67: "/icon-drizzle.webp",
  61: "/icon-rain.webp",
  63: "/icon-rain.webp",
  65: "/icon-rain.webp",
  80: "/icon-rain.webp",
  81: "/icon-rain.webp",
  82: "/icon-rain.webp",
  71: "/icon-snow.webp",
  73: "/icon-snow.webp",
  75: "/icon-snow.webp",
  77: "/icon-snow.webp",
  85: "/icon-snow.webp",
  86: "/icon-snow.webp",
  95: "/icon-storm.webp",
  96: "/icon-storm.webp",
  99: "/icon-storm.webp",
};

export const DetermineWeatherIcon = (code: number) => {
  return weatherIconsMap[code] || "./public/icon-fog.webp";
};

export const DetermineDailyForecast = async (
  latitude: number,
  longitude: number,
) => {
  const resp = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`,
  );
  const data = await resp.json();

  const dailyForecast: DailyForecastType[] = [];

  for (let index = 0; index < data.daily.time.length; index++) {
    const element = data.daily.time[index];
    const formattedElement = new Date(element);

    const day = formattedElement.toLocaleDateString("en-US", {
      weekday: "short",
    });

    const tempMaxC = Number(data.daily.temperature_2m_max[index].toFixed(1));
    const tempMinC = Number(data.daily.temperature_2m_min[index].toFixed(1));
    const tempMaxF = Number(((data.daily.temperature_2m_max[index] * 9) / 5 + 32).toFixed(1));
    const tempMinF = Number(((data.daily.temperature_2m_min[index] * 9) / 5 + 32).toFixed(1));
    const code = data.daily.weathercode[index];

    dailyForecast.push({
      day,
      tempMaxC,
      tempMinC,
      tempMaxF,
      tempMinF,
      code
    });
  }

  return dailyForecast;
};