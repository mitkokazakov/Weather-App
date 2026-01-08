import CurrentWeather from "./components/CurrentWeather"
import DailyForecast from "./components/DailyForecast"
import Header from "./components/Header"
import HourlyForecast from "./components/HourlyForecast"
import Search from "./components/Search"

function App() {
  

  return (
    <div className='w-full min-h-screen bg-[#03012d] p-4'>
      <Header />
      <Search />
      <CurrentWeather />
      <DailyForecast />
      <HourlyForecast />
    </div>
  )
}

export default App
