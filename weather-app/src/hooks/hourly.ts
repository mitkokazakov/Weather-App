import { useEffect, useState } from "react";
import { type LocationType } from "./location";
import { DetermineHourlyForecast } from "../services/weatherService";
import useUnits from "./units";


 const useHourlyWeather = (location: LocationType | null) => {
  const [hourly, setHourly] = useState({
  "1 AM": { temp: 0,tempF: 0, code: 0 },
  "3 AM": { temp: 0, tempF: 0, code: 0 },
  "5 AM": { temp: 0, tempF: 0, code: 0 },
  "7 AM": { temp: 0, tempF: 0, code: 0 },
  "9 AM": { temp: 0, tempF: 0, code: 0 },
  "11 AM": { temp: 0, tempF: 0, code: 0 },
  "1 PM": { temp: 0, tempF: 0, code: 0 },
  "3 PM": { temp: 0, tempF: 0, code: 0 },
  "5 PM": { temp: 0, tempF: 0, code: 0 },
  "7 PM": { temp: 0, tempF: 0, code: 0 },
  "9 PM": { temp: 0, tempF: 0, code: 0 },
  "11 PM": { temp: 0, tempF: 0, code: 0 },
});
  const [loading, setLoading] = useState(true);

//   const {units} = useUnits(location);

  useEffect(() => {
    if (!location) return;

    const fetchHourly = async () => {
      setLoading(true);
      const data = await DetermineHourlyForecast(
        location.latitude,
        location.longitude
      );
      setHourly(data);
      setLoading(false);
    };

    fetchHourly();
  }, [location]);

  return {
    hourly,
  };
};

export default useHourlyWeather;
