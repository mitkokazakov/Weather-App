import CurrentWeather from "./components/CurrentWeather"
import DailyForecast from "./components/DailyForecast"
import Header from "./components/Header"
import HourlyForecast from "./components/HourlyForecast"
import Search from "./components/Search"
import useUnits from "./hooks/units"

function App() {
  
  const {units, HandleUnitsChange} = useUnits();

  return (
    <div className='w-full min-h-screen bg-[#03012d] p-4'>
      <Header handleUnitsChange={HandleUnitsChange} />
      <Search />
      <CurrentWeather />
      <DailyForecast info={units}/>
      <HourlyForecast handleUnitsChange={HandleUnitsChange} />
    </div>
  )
}

export default App
