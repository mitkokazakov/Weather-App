import { useEffect, useState } from "react";
import { getLongitudeAndLatitude } from "../services/locationService";

export type LocationType = {
  latitude: number;
  longitude: number;
};

export const useLocation = () => {
  const [location, setLocation] = useState<LocationType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getLongitudeAndLatitude()
      .then(setLocation)
      .catch((err) => {
        console.error("Location error:", err);
        setError("Failed to get location");
      })
      .finally(() => setLoading(false));
  }, []);

  return { location, loading, error, setLocation };
};