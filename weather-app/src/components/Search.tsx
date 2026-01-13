import React, { useEffect, useState } from "react";
import { TownWeatherDetermine } from "../services/weatherService";
const geoAPIKey = "0a5bd9649f5b43368998e700d82aa7d9";

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
};

const Search = ({
  handleUnitsChange,
  setWeather,
}: {
  handleUnitsChange: (unit: string, value: string) => void;
  setWeather: (data: WeatherType) => void;
}) => {
  const [isTyping, setIsTyping] = useState(false);
  const [city, setCity] = useState("");
  const [locations, setLocations] = useState([]);

  async function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setCity(value);
    setIsTyping(value.length >= 3);
  }

  async function ClickSearchButton() {
    handleUnitsChange("city", city);
    setIsTyping(false);
  }

  const FetchWeather = async (latitude: number, longitude: number) => {
    
    const weather = await TownWeatherDetermine(latitude, longitude);
    setWeather(weather);
  };

  useEffect(() => {
    if (city.length < 3) {
      setLocations([]);
      return;
    }

    const controller = new AbortController();

    const FetchTowns = async () => {
      const resp = await fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${city}&apiKey=${geoAPIKey}`
      );
      const data = await resp.json();

      if (!data.features) {
        setLocations([]);
        return;
      }

      const locations = data.features
        .filter(
          (f: any) =>
            typeof f.properties.city === "string" &&
            f.properties.city.trim().length > 2
        )
        .map((f: any) => ({
          name: f.properties.city,
          country: f.properties.country,
          lat: f.properties.lat,
          lon: f.properties.lon,
        }));

      setLocations(locations);

      return () => controller.abort();
    };

    FetchTowns();
  }, [city]);

  return (
    <div className="w-full flex flex-col gap-2 mt-10 relative">
      <div className="w-full relative">
        <img
          src="/public/icon-search.svg"
          alt=""
          className="absolute left-3 top-[50%] translate-y-[-50%]"
        />
        <input
          type="text"
          className="w-full bg-[#3d3b5e] rounded-lg pl-12 pr-4 py-2 text-white placeholder:text-slate-300 outline-none focus:outline-none"
          placeholder="Search for a city..."
          onChange={handleInputChange}
          value={city}
        />
      </div>

      {isTyping && (
        <div className="w-full bg-[#4455da]  rounded-lg flex flex-col justify-center items-start text-white font-semibold tracking-widest duration-300 p-4">
          {locations &&
            locations.map((l: any, index: number) => (
              <p
                className="cursor-pointer hover:underline py-2"
                key={l.name + index}
                onClick={() => {
                  FetchWeather(l.lat, l.lon);
                  handleUnitsChange("city", l.name);
                  handleUnitsChange("country", l.country);
                  setIsTyping(false);
                  setCity("");
                }}
              >
                {l.name}, {l.country}
              </p>
            ))}
        </div>
      )}

      <button
        className="bg-[#4455da] rounded-lg px-4 py-2 text-white hover:bg-[#4a4870] tracking-widest font-semibold mt-3"
        onClick={ClickSearchButton}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
