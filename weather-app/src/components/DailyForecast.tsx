
import type { DailyForecastType } from '../hooks/daily';
import { DetermineWeatherIcon } from '../services/weatherService';

const DailyForecast = ({dailyForecast, units}: {dailyForecast: DailyForecastType[] | null, units: any}) => {

  return (
    <div className='w-full mt-5'>
      <h1 className='text-white font-semibold text-xl mb-3 tracking-widest'>Daily forecast</h1>

      <section className='w-full grid grid-cols-3 gap-4'>
        {dailyForecast && dailyForecast.map((day, index) => (
            <div className='p-4 flex flex-col justify-center items-center gap-2 text-white bg-[#3d3b5e] rounded-xl' key={index}>
            <p className='text-lg'>{day.day}</p>
            <img src={DetermineWeatherIcon(day.code)} alt="sunny" className='h-16'/>
            <div className='w-full flex justify-between items-center'>
                <p>{units.temperature == "Celsius" ? day.tempMaxC : day.tempMaxF}°</p>
                <p>{units.temperature == "Celsius" ? day.tempMinC : day.tempMinF}°</p>
            </div>
        </div>
        ))}
        
      </section>
    </div>
  )
}

export default DailyForecast
