import { useEffect, useState } from "react";
import { getLongitudeAndLatitude } from "../services/locationService";

type LocationType = {
  latitude: number;
  longitude: number;
};

const useUnits = () => {
  const today = new Date();

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(today);

  const [location, setLocation] = useState<LocationType | null>(null);

  const [units, setUnits] = useState({
    temperature: "Celsius",
    windSpeed: "km/h",
    precipitation: "Millimeters (mm)",
    day: formattedDate,
    city: "Oslo",
    country: "Norway",
  });

  const HandleUnitsChange = (type: string, value: string) => {
    setUnits((prevUnits) => ({
      ...prevUnits,
      [type]: value,
    }));
  };

  useEffect(() => {
      getLongitudeAndLatitude()
        .then(setLocation)
        .catch((err) => {
          console.error("Location error:", err);
        });
    }, []);

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
