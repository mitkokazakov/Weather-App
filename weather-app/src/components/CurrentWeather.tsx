import React from 'react'

const CurrentWeather = () => {
  return (
    <div className='flex flex-col items-center gap-5 text-white mt-8'>
      <section className='w-full  rounded-xl bg-[url(/public/bg-today-small.svg)] flex flex-col items-center px-4 py-14 bg-cover bg-center'>
            <h1 className='font-bold text-3xl'>Berlin, Germany</h1>
            <h4 className='font-light text-lg mt-4'>Tuesday, Aug 5, 2025</h4>

            <div className='flex justify-center items-center gap-5'>
                <img src="/public/icon-sunny.webp" alt="weather" className='h-28'/>
                <p className='font-bold text-7xl'>68</p>
            </div>
      </section>

      <section className='w-full grid grid-cols-2 gap-4'>
            <div className=' p-4 flex flex-col items-start gap-5 bg-[#3d3b5e] rounded-xl'>
                <p className='font-light text-lg'>Feels like</p>
                <p className='text-3xl'>64</p>
            </div>

            <div className=' p-4 flex flex-col items-start gap-5 bg-[#3d3b5e] rounded-xl'>
                <p className='font-light text-lg'>Humidity</p>
                <p className='text-3xl'>46%</p>
            </div>

            <div className=' p-4 flex flex-col items-start gap-5 bg-[#3d3b5e] rounded-xl'>
                <p className='font-light text-lg'>Wind</p>
                <p className='text-3xl'>9 mph</p>
            </div>

            <div className=' p-4 flex flex-col items-start gap-5 bg-[#3d3b5e] rounded-xl'>
                <p className='font-light text-lg'>Precipitation</p>
                <p className='text-3xl'>0 in</p>
            </div>
      </section>
    </div>
  )
}

export default CurrentWeather
