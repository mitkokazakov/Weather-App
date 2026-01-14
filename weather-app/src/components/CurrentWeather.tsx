import React from 'react'

const CurrentWeather = ({weather, units}: {weather: any, units: any}) => {

  return (
    <div className='flex flex-col items-center gap-5 text-white mt-8'>
      <section className='w-full  rounded-xl bg-[url(/public/bg-today-small.svg)] flex flex-col items-center px-4 py-14 bg-cover bg-center'>
            <h1 className='font-bold text-3xl tracking-widest'>{units.city}, {units.country}</h1>
            <h4 className='font-light text-lg mt-4 tracking-widest'>{units.day}</h4>

            <div className='flex justify-center items-center gap-5 mt-5'>
                <img src="/public/icon-sunny.webp" alt="weather" className='h-30 mt-2'/>
                <p className='font-bold text-8xl'>{units.temperature === "Celsius" ? weather.feelsLikeC : weather.feelsLikeF}°</p>
            </div>
      </section>

      <section className='w-full grid grid-cols-2 gap-4'>
            <div className=' p-4 flex flex-col items-start gap-5 bg-[#3d3b5e] rounded-xl'>
                <p className='font-light text-lg'>Feels like</p>
                <p className='text-3xl'>{units.temperature === "Celsius" ? weather.feelsLikeC : weather.feelsLikeF}°</p>
            </div>

            <div className=' p-4 flex flex-col items-start gap-5 bg-[#3d3b5e] rounded-xl'>
                <p className='font-light text-lg'>Humidity</p>
                <p className='text-3xl'>{weather.humidity}%</p>
            </div>

            <div className=' p-4 flex flex-col items-start gap-5 bg-[#3d3b5e] rounded-xl'>
                <p className='font-light text-lg'>Wind</p>
                <p className='text-3xl'>{units.windSpeed === "km/h" ? weather.windKmh : weather.windMph} mph</p>
            </div>

            <div className=' p-4 flex flex-col items-start gap-5 bg-[#3d3b5e] rounded-xl'>
                <p className='font-light text-lg'>Precipitation</p>
                <p className='text-3xl'>{units.precipitation === "Millimeters (mm)" ? weather.precipitationMm : weather.precipitationIn} in</p>
            </div>
      </section>
    </div>
  )
}

export default CurrentWeather
