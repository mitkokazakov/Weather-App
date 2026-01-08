import { useState } from "react";

const HourlyForecast = ( {handleUnitsChange}: {handleUnitsChange: (unit: string, value: string) => void}) => {

    const [isHourlyDropdownOpen, setIsHourlyDropdownOpen] = useState(false);

    function HandleHourlyDropdown(){
        setIsHourlyDropdownOpen(!isHourlyDropdownOpen);
    }

    

  return (
    <div className="w-full bg-[#3d3b5e] rounded-xl p-4 text-white flex flex-col justify-center items-center mt-8">
      <section className="w-full flex justify-between items-center relative">
        <h1 className="font-semibold text-xl tracking-widest">
          Hourly forecast
        </h1>
        <div
          className="bg-[#d5d4d9] flex justify-center items-center gap-2 px-3 py-1 rounded-lg cursor-pointer"
          onClick={HandleHourlyDropdown}
        >
          <p className="text-white">Tuesday</p>
          <img src="/public/icon-dropdown.svg" alt="icon" />
        </div>

        {isHourlyDropdownOpen && (
            <div className="w-54 bg-slate-300 absolute top-10 right-0 rounded-lg px-2 py-3 flex flex-col justify-start items-start gap-2 duration-300">
          <p className=" text-white bg-slate-500 py-1 px-2 w-full rounded-lg" onClick={() => {handleUnitsChange("day","Monday"); HandleHourlyDropdown()}} >
            Monday
          </p>
          <p className=" text-white bg-slate-500 py-1 px-2 w-full rounded-lg" onClick={() => {handleUnitsChange("day","Tuesday"); HandleHourlyDropdown()}}  >
            Tuesday
          </p>

          <p className=" text-white bg-slate-500 py-1 px-2 w-full rounded-lg" onClick={() => {handleUnitsChange("day","Wednesday"); HandleHourlyDropdown()}}>
            Wednesday
          </p>

          <p className=" text-white bg-slate-500 py-1 px-2 w-full rounded-lg" onClick={() => {handleUnitsChange("day","Thursday"); HandleHourlyDropdown()}} >
            Thursday
          </p>

          <p className=" text-white bg-slate-500 py-1 px-2 w-full rounded-lg" onClick={() => {handleUnitsChange("day","Friday"); HandleHourlyDropdown()}} >
            Friday
          </p>

          <p className=" text-white bg-slate-500 py-1 px-2 w-full rounded-lg" onClick={() => {handleUnitsChange("day","Saturday"); HandleHourlyDropdown()}} >
            Saturday
          </p>

          <p className=" text-white bg-slate-500 py-1 px-2 w-full rounded-lg" onClick={() => {handleUnitsChange("day","Sunday"); HandleHourlyDropdown()}} >
            Sunday
          </p>

          
        </div>
        )}
      </section>

      <section className="w-full flex flex-col justify-center items-center gap-4 mt-4">
        <div className="w-full pr-4 pl-1 py-2 flex justify-between items-center gap-2 text-white bg-slate-400 rounded-xl">
          <div className=" flex justify-center items-center">
            <img src="/public/icon-sunny.webp" alt="weather" className="h-10" />
            <p className="text-lg">12 AM</p>
          </div>

          <p>23°</p>
        </div>

        <div className="w-full pr-4 pl-1 py-2 flex justify-between items-center gap-2 text-white bg-slate-400 rounded-xl">
          <div className=" flex justify-center items-center">
            <img src="/public/icon-sunny.webp" alt="weather" className="h-10" />
            <p className="text-lg">12 AM</p>
          </div>

          <p>23°</p>
        </div>

        <div className="w-full pr-4 pl-1 py-2 flex justify-between items-center gap-2 text-white bg-slate-400 rounded-xl">
          <div className=" flex justify-center items-center">
            <img src="/public/icon-sunny.webp" alt="weather" className="h-10" />
            <p className="text-lg">12 AM</p>
          </div>

          <p>23°</p>
        </div>

        <div className="w-full pr-4 pl-1 py-2 flex justify-between items-center gap-2 text-white bg-slate-400 rounded-xl">
          <div className=" flex justify-center items-center">
            <img src="/public/icon-sunny.webp" alt="weather" className="h-10" />
            <p className="text-lg">12 AM</p>
          </div>

          <p>23°</p>
        </div>

        <div className="w-full pr-4 pl-1 py-2 flex justify-between items-center gap-2 text-white bg-slate-400 rounded-xl">
          <div className=" flex justify-center items-center">
            <img src="/public/icon-sunny.webp" alt="weather" className="h-10" />
            <p className="text-lg">12 AM</p>
          </div>

          <p>23°</p>
        </div>

        <div className="w-full pr-4 pl-1 py-2 flex justify-between items-center gap-2 text-white bg-slate-400 rounded-xl">
          <div className=" flex justify-center items-center">
            <img src="/public/icon-sunny.webp" alt="weather" className="h-10" />
            <p className="text-lg">12 AM</p>
          </div>

          <p>23°</p>
        </div>
      </section>
    </div>
  );
};

export default HourlyForecast;
