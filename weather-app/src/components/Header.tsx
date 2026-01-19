import { useState } from "react";

const Header = ({handleUnitsChange, units}: {handleUnitsChange: (unit: string, value: string) => void, units: any}) => {

    const [isClickedUnits, setIsClickedUnits] =  useState(false);

    function HandleUnitsClick(){
        setIsClickedUnits(!isClickedUnits);
    }

    ////#2f2f49 bg for dropdown on hover or when clicked

  return (
    <div className="w-full ">
      
      <section className="w-full flex justify-between items-center relative">
        <div>
            <img src="/public/logo.svg" alt="logo"  className="h-7"/>
        </div>

        <div className="bg-[#2f2f49] flex justify-center items-center gap-2 px-3 py-1 rounded-lg cursor-pointer" onClick={HandleUnitsClick}>
            <img src="/public/icon-units.svg" alt="settings" />
            <p className="text-white">Units</p>
            <img src="/public/icon-dropdown.svg" alt="icon" />
        </div>

        {isClickedUnits && (<div className="bg-[#25253f] absolute top-10 right-0 rounded-lg px-2 py-3 flex flex-col justify-start items-start gap-2 duration-300 z-10">
            <p className="text-white">Switch to Imperial</p>


            <div className="flex flex-col justify-start items-start gap-2  divide-y-[0.1px] divide-slate-300">
                <div className=" flex flex-col w-full">
                <p className="text-sm text-slate-300">Temperature</p>
                <p className={`text-white font-semibold py-1 flex justify-between ${units.temperature === "Celsius" ? "bg-[#2f2f49] rounded-lg px-2" : ""}`} onClick={() => {handleUnitsChange("temperature","Celsius"); ; HandleUnitsClick()}}>Celsius (C) {units.temperature === "Celsius" ? <img src="./public/icon-checkmark.svg" alt="checkmark" /> : null}</p>
                <p className={`text-white font-semibold py-1 flex justify-between ${units.temperature === "Fahrenheit" ? "bg-[#2f2f49] rounded-lg px-2" : ""}`} onClick={() => {handleUnitsChange("temperature","Fahrenheit"); HandleUnitsClick()}}>Fahrenheit (F) {units.temperature === "Fahrenheit" ? <img src="./public/icon-checkmark.svg" alt="checkmark" /> : null}</p>
            </div>

            <div className=" flex flex-col w-full">
                <p className="text-slate-300 text-sm">Wind Speed</p>
                <p className={`text-white font-semibold py-1 flex justify-between ${units.windSpeed === "km/h" ? "bg-[#2f2f49] rounded-lg px-2" : ""}`} onClick={() => {handleUnitsChange("windSpeed","km/h"); HandleUnitsClick()}}>km/h {units.windSpeed === "km/h" ? <img src="./public/icon-checkmark.svg" alt="checkmark" /> : null}</p>
                <p className={`text-white font-semibold py-1 flex justify-between ${units.windSpeed === "mph" ? "bg-[#2f2f49] rounded-lg px-2" : ""}`} onClick={() => {handleUnitsChange("windSpeed","mph"); HandleUnitsClick()}}>mph {units.windSpeed === "mph" ? <img src="./public/icon-checkmark.svg" alt="checkmark" /> : null}</p>
            </div>

            <div className=" flex flex-col w-full">
                <p className="text-slate-300 text-sm">Precipitation</p>
                <p className={`text-white w-full font-semibold py-1 flex justify-between ${units.precipitation === "Millimeters (mm)" ? "bg-[#2f2f49] rounded-lg px-2" : ""}`} onClick={() => {handleUnitsChange("precipitation","Millimeters (mm)"); HandleUnitsClick()}}>Millimeters (mm) {units.precipitation === "Millimeters (mm)" ? <img src="./public/icon-checkmark.svg" alt="checkmark" /> : null}</p>
                <p className={`text-white font-semibold py-1 flex justify-between ${units.precipitation === "Inches (in)" ? "bg-[#2f2f49] rounded-lg px-2" : ""}`} onClick={() => {handleUnitsChange("precipitation","Inches (in)"); HandleUnitsClick()}}>Inches (in) {units.precipitation === "Inches (in)" ? <img src="./public/icon-checkmark.svg" alt="checkmark" /> : null}</p>
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
