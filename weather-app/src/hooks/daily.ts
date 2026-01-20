import { useEffect, useState } from "react";
import type { LocationType } from "./location";
import { DetermineDailyForecast } from "../services/weatherService";

export type DailyForecastType = {
    day: string,
    tempMaxC: number,
    tempMinC: number,
    tempMaxF: number,
    tempMinF: number,
    code: number,
}

const useDailyWeather = (location: LocationType | null) => {
  const [dailyForecast, setDailyForecast] = useState<DailyForecastType[] | null>(null);

  useEffect(() => {

    if (!location) return;
    
    async function FetchDailyForecast() {
      const data = await DetermineDailyForecast(location!.latitude, location!.longitude);
      setDailyForecast(data);
    }

    FetchDailyForecast();
  }, [location]);

  return { dailyForecast };
};

export default useDailyWeather;
