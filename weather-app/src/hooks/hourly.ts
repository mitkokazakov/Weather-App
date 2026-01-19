import { useEffect, useState } from "react";
import { type LocationType } from "./location";
import { DetermineHourlyForecast } from "../services/weatherService";

type HourlyWeatherItem = {
  temp: number;
  tempF: number;
  code: number;
  labelHour: string;
};

const useHourlyWeather = (location: LocationType | null) => {
  const [hourly, setHourly] = useState<HourlyWeatherItem[]>([]);
  const [loading, setLoading] = useState(true);

  const [daysName, setDaysName] = useState({
    currentDay: "",
    daysList: [] as string[],
  });

  function SetCurrentDay(day: string){
    setDaysName((prev) => ({
      ...prev,
      currentDay: day,
    }));
  }

  function SetDaysName() {
    const today = new Date();
    const days: string[] = [];
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(today);

    days.push(formattedDate);

    for (let i = 1; i < 7; i++) {
      const nextDay = new Date();
      nextDay.setDate(today.getDate() + i);
      const dayName = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
      }).format(nextDay);
      days.push(dayName);
    }

    return {
      currentDay: days[0],
      daysList: days.slice(1),
    };
  }

  useEffect(() => {
    setDaysName(SetDaysName());
  }, []);

  useEffect(() => {
    if (!location) return;

    const fetchHourly = async () => {
      setLoading(true);
      const data = await DetermineHourlyForecast(
        location.latitude,
        location.longitude,
        daysName.currentDay
      );
      setHourly(data);
      setLoading(false);
    };

    fetchHourly();
  }, [location, daysName.currentDay]);

  return {
    hourly,
    daysName,
    SetCurrentDay
  };
};

export default useHourlyWeather;
