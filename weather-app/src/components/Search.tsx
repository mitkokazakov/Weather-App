import React from 'react'

const Search = () => {
  return (
    <div className='w-full flex flex-col gap-2 mt-10 relative'>
        <div className='w-full relative'>
            <img src="/public/icon-search.svg" alt="" className='absolute left-3 top-[50%] translate-y-[-50%]'/>
            <input type="text" className="w-full bg-[#3d3b5e] rounded-lg pl-12 pr-4 py-2 text-white placeholder:text-slate-300 outline-none focus:outline-none" placeholder="Search for a city..." />
        </div>

        <div className='w-full bg-[#4455da] h-32 rounded-lg flex flex-col justify-center items-start text-white font-semibold tracking-widest duration-300 p-4'>

        </div>
        <button className="bg-[#4455da] rounded-lg px-4 py-2 text-white hover:bg-[#4a4870] tracking-widest font-semibold mt-3">Search</button>
    </div>
  )
}

export default Search
