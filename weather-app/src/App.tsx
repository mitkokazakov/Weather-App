import CurrentWeather from "./components/CurrentWeather"
import DailyForecast from "./components/DailyForecast"
import Header from "./components/Header"
import HourlyForecast from "./components/HourlyForecast"
import Search from "./components/Search"
import useWeather from "./hooks/data"
import useHourlyWeather from "./hooks/hourly"
import { useLocation } from "./hooks/location"
import useUnits from "./hooks/units"

const apiKey = "a5254b2031874dbeb49115909230304";

function App() {
  const { location, setLocation } = useLocation();
  const {units, HandleUnitsChange} = useUnits(location);
  const {SetWeather, weather} = useWeather(location);
  const {hourly,daysName, SetCurrentDay} = useHourlyWeather(location);
  

  return (
    <div className='w-full min-h-screen bg-[#03012d] p-4'>
      <Header handleUnitsChange={HandleUnitsChange} />
      <Search handleUnitsChange={HandleUnitsChange} setWeather={SetWeather} setLocation={setLocation}/>
      <CurrentWeather weather={weather} units={units} />
      <DailyForecast info={units}/>
      <HourlyForecast handleUnitsChange={HandleUnitsChange} units={units} hourly={hourly} daysName={daysName} setDay={SetCurrentDay}/>
    </div>
  )
}

export default App
