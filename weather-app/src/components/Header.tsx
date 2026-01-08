import { useState } from "react";

const Header = ({handleUnitsChange}: {handleUnitsChange: (unit: string, value: string) => void}) => {

    const [isClickedUnits, setIsClickedUnits] =  useState(false);

    function HandleUnitsClick(){
        setIsClickedUnits(!isClickedUnits);
    }

    

  return (
    <div className="w-full ">
      
      <section className="w-full flex justify-between items-center relative">
        <div>
            <img src="/public/logo.svg" alt="logo"  className="h-7"/>
        </div>

        <div className="bg-[#3d3b5e] flex justify-center items-center gap-2 px-3 py-1 rounded-lg cursor-pointer" onClick={HandleUnitsClick}>
            <img src="/public/icon-units.svg" alt="settings" />
            <p className="text-white">Units</p>
            <img src="/public/icon-dropdown.svg" alt="icon" />
        </div>

        {isClickedUnits && (<div className="bg-[#3d3b5e] absolute top-10 right-0 rounded-lg px-4 py-3 flex flex-col justify-start items-start gap-2 duration-300">
            <p className="text-white">Switch to Imperial</p>

            <div className="flex flex-col justify-start items-start gap-2  divide-y-[0.1px] divide-slate-300">
                <div className=" flex flex-col w-full">
                <p className="text-sm text-slate-300">Temperature</p>
                <p className="text-white font-semibold py-1" onClick={() => {handleUnitsChange("temperature","Celsius"); ; HandleUnitsClick()}}>Celsius (C)</p>
                <p className="text-white font-semibold py-1" onClick={() => {handleUnitsChange("temperature","Fahrenheit"); HandleUnitsClick()}}>Fahrenheit (F)</p>
            </div>

            <div className=" flex flex-col w-full">
                <p className="text-slate-300 text-sm">Wind Speed</p>
                <p className="text-white font-semibold py-1" onClick={() => {handleUnitsChange("windSpeed","km/h"); HandleUnitsClick()}}>km/h</p>
                <p className="text-white font-semibold py-1" onClick={() => {handleUnitsChange("windSpeed","mph"); HandleUnitsClick()}}>mph</p>
            </div>

            <div className=" flex flex-col w-full">
                <p className="text-slate-300 text-sm">Precipitation</p>
                <p className="text-white font-semibold py-1" onClick={() => {handleUnitsChange("precipitation","Millimeters (mm)"); HandleUnitsClick()}}>Millimeters (mm)</p>
                <p className="text-white font-semibold py-1" onClick={() => {handleUnitsChange("precipitation","Inches (in)"); HandleUnitsClick()}}>Inches (in)</p>
            </div>
            </div>
        </div>)}
      </section>

      <h1 className="text-white text-center text-6xl font-bold mt-8 leading-tight">
        How's the sky looking today?
      </h1>
    </div>
  )
}

export default Header
