import { useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import DailyForecast from "./components/DailyForecast";
import Header from "./components/Header";
import HourlyForecast from "./components/HourlyForecast";
import Search from "./components/Search";
import useDailyWeather from "./hooks/daily";
import useWeather from "./hooks/data";
import useHourlyWeather from "./hooks/hourly";
import { useLocation } from "./hooks/location";
import useUnits from "./hooks/units";

function App() {
  const { location, setLocation } = useLocation();
  const { units, HandleUnitsChange } = useUnits(location);
  const { SetWeather, weather, loading } = useWeather(location);
  const { hourly, daysName, SetCurrentDay } = useHourlyWeather(location);
  const { dailyForecast } = useDailyWeather(location);

  const [error, setError] = useState<string | null>(null);

  return (
    <div className="w-full min-h-screen bg-[#03012d] p-4">
      <Header handleUnitsChange={HandleUnitsChange} units={units} />
      <Search
        handleUnitsChange={HandleUnitsChange}
        setWeather={SetWeather}
        setLocation={setLocation}
        setError={setError}
      />
      {/* {error ? <div className="text-white text-4xl font-bold tracking-widest">{error}</div> : <CurrentWeather weather={weather} units={units} isLoading={loading}/>}
      <DailyForecast units={units} dailyForecast={dailyForecast} isLoading={loading}/>
      <HourlyForecast handleUnitsChange={HandleUnitsChange} units={units} hourly={hourly} daysName={daysName} setDay={SetCurrentDay} isLoading={loading}/> */}

      {error ? (
        <div className="text-white text-3xl font-semibold tracking-widest text-center mt-16">
          {error}
        </div>
      ) : (
        <>
          <CurrentWeather weather={weather} units={units} isLoading={loading} />
          <DailyForecast
            units={units}
            dailyForecast={dailyForecast}
            isLoading={loading}
          />
          <HourlyForecast
            handleUnitsChange={HandleUnitsChange}
            units={units}
            hourly={hourly}
            daysName={daysName}
            setDay={SetCurrentDay}
            isLoading={loading}
          />
        </>
      )}
    </div>
  );
}

export default App;
