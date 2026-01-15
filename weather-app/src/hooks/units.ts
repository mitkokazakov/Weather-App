import {  useEffect, useState } from "react";
import type { LocationType } from "./location";


const useUnits = (location: LocationType | null) => {
  const today = new Date();

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(today);

  const [units, setUnits] = useState({
    temperature: "Celsius",
    windSpeed: "km/h",
    precipitation: "Millimeters (mm)",
    day: formattedDate,
    city: "Oslo",
    country: "Norway",
    dayName: today.toLocaleDateString("en-US", { weekday: "long" }),
  });

  const HandleUnitsChange = (type: string, value: string) => {
    setUnits((prevUnits) => ({
      ...prevUnits,
      [type]: value,
    }));
  };



  useEffect(() => {
    if (!location) return;
    const determineTownByCoords = async () => {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.latitude}&lon=${location.longitude}&accept-language=en`
      );
      const data = await response.json();
      const city =
        data.address.city ||
        data.address.town ||
        data.address.village ||
        "Unknown";
      const country = data.address.country || "Unknown";

      HandleUnitsChange("city", city);
      HandleUnitsChange("country", country);
    };
    determineTownByCoords();
  }, [location]);

  return {
    units,
    HandleUnitsChange,
  };
};

export default useUnits;
