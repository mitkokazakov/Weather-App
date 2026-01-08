
import { useEffect } from 'react';

const DailyForecast = ({info}: {info: any}) => {

    

    

    useEffect(() => {
        // This effect runs whenever units change
        console.log('Units have changed:', info);
    }, [info]);
    
  return (
    <div className='w-full mt-5'>
      <h1 className='text-white font-semibold text-xl mb-3 tracking-widest'>Daily forecast</h1>

      <section className='w-full grid grid-cols-3 gap-4'>
        <div className='p-4 flex flex-col justify-center items-center gap-2 text-white bg-[#3d3b5e] rounded-xl'>
            <p className='text-lg'>Tue</p>
            <img src="/public/icon-sunny.webp" alt="sunny" className='h-16'/>
            <div className='w-full flex justify-between items-center'>
                <p>23°</p>
                <p>18°</p>
            </div>
        </div>

        <div className='p-4 flex flex-col justify-center items-center gap-2 text-white bg-[#3d3b5e] rounded-xl'>
            <p className='text-lg'>Tue</p>
            <img src="/public/icon-sunny.webp" alt="sunny" className='h-16'/>
            <div className='w-full flex justify-between items-center'>
                <p>23°</p>
                <p>18°</p>
            </div>
        </div>

        <div className='p-4 flex flex-col justify-center items-center gap-2 text-white bg-[#3d3b5e] rounded-xl'>
            <p className='text-lg'>Tue</p>
            <img src="/public/icon-sunny.webp" alt="sunny" className='h-16'/>
            <div className='w-full flex justify-between items-center'>
                <p>23°</p>
                <p>18°</p>
            </div>
        </div>

        <div className='p-4 flex flex-col justify-center items-center gap-2 text-white bg-[#3d3b5e] rounded-xl'>
            <p className='text-lg'>Tue</p>
            <img src="/public/icon-sunny.webp" alt="sunny" className='h-16'/>
            <div className='w-full flex justify-between items-center'>
                <p>23°</p>
                <p>18°</p>
            </div>
        </div>

        <div className='p-4 flex flex-col justify-center items-center gap-2 text-white bg-[#3d3b5e] rounded-xl'>
            <p className='text-lg'>Tue</p>
            <img src="/public/icon-sunny.webp" alt="sunny" className='h-16'/>
            <div className='w-full flex justify-between items-center'>
                <p>23°</p>
                <p>18°</p>
            </div>
        </div>

        <div className='p-4 flex flex-col justify-center items-center gap-2 text-white bg-[#3d3b5e] rounded-xl'>
            <p className='text-lg'>Tue</p>
            <img src="/public/icon-sunny.webp" alt="sunny" className='h-16'/>
            <div className='w-full flex justify-between items-center'>
                <p>23°</p>
                <p>18°</p>
            </div>
        </div>

        <div className='p-4 flex flex-col justify-center items-center gap-2 text-white bg-[#3d3b5e] rounded-xl'>
            <p className='text-lg'>Tue</p>
            <img src="/public/icon-sunny.webp" alt="sunny" className='h-16'/>
            <div className='w-full flex justify-between items-center'>
                <p>23°</p>
                <p>18°</p>
            </div>
        </div>
      </section>
    </div>
  )
}

export default DailyForecast
