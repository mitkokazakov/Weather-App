import { useEffect, useState } from "react";
import { TownWeatherDetermine } from "../services/weatherService";
import { type LocationType } from "./location";

type WeatherType = {
  tempC: number;
  tempF: number;
  windKmh: number;
  windMph: number;
  precipitationMm: number;
  precipitationIn: number;
  humidity: number;
  feelsLikeC: number;
  feelsLikeF: number;
  code: number;
};



const useWeather = (location: LocationType | null) => {

  // const [location, setLocation] = useState<LocationType | null>(null);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({
    tempC: 23,
    tempF: 73,
    windKmh: 15,
    windMph: 9,
    precipitationMm: 2,
    precipitationIn: 0.08,
    humidity: 34,
    feelsLikeC: 23,
    feelsLikeF: 1,
  });

  // useEffect(() => {
  //   getLongitudeAndLatitude()
  //     .then(setLocation)
  //     .catch((err) => {
  //       console.error("Location error:", err);
  //       setLoading(false);
  //     });
  // }, []);

  console.log(location?.latitude, location?.longitude);
  

  useEffect(() => {
     if (!location) return;

    const currentWeatherFetch = async () => {
      const weather = await TownWeatherDetermine(location?.latitude , location?.longitude);

      setWeather(weather);
    };

    currentWeatherFetch();
  },[location]);

  const SetWeather = (data: WeatherType) => {
    setWeather(data);
  };

  return {
    weather,
    SetWeather,
  };
};

export default useWeather;
