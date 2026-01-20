import { useEffect, useState } from "react";
import { DetermineWeatherIcon } from "../services/weatherService";

type HourlyWeatherItem = {
  temp: number;
  tempF: number;
  code: number;
  labelHour: string;
};

type HourlyWeather = HourlyWeatherItem[];

const HourlyForecast = ({
  handleUnitsChange,
  units,
  hourly,
  daysName,
  setDay
}: {
  handleUnitsChange: (unit: string, value: string) => void;
  units: any;
  hourly: HourlyWeather;
  daysName: {
    currentDay: string;
    daysList: string[];
  };
  setDay: (day: string) => void;
}) => {
  const [isHourlyDropdownOpen, setIsHourlyDropdownOpen] = useState(false);

  function HandleHourlyDropdown() {
    setIsHourlyDropdownOpen(!isHourlyDropdownOpen);
  }

  return (
    <div className="w-full bg-[#25253f] rounded-xl p-4 text-white flex flex-col justify-center items-center mt-8">
      <section className="w-full flex justify-between items-center relative">
        <h1 className="font-semibold text-xl tracking-widest">
          Hourly forecast
        </h1>
        <div
          className="bg-[#3c3a5c] flex justify-center items-center gap-2 px-3 py-1 rounded-lg cursor-pointer"
          onClick={HandleHourlyDropdown}
        >
          <p className="text-white">{daysName.currentDay}</p>
          <img src="/public/icon-dropdown.svg" alt="icon" />
        </div>

        {isHourlyDropdownOpen && (
          <div className="w-54 bg-[#25253f] absolute top-10 right-0 rounded-lg px-2 py-3 flex flex-col justify-start items-start gap-2 duration-300 border border-slate-700">
            { daysName.daysList.map((day, index) => (
              <p
                className=" text-white hover:bg-[#2f2f49] py-2 px-2 w-full rounded-lg"
                onClick={() => {
                  handleUnitsChange("day", day);
                  setDay(day);
                  HandleHourlyDropdown();
                }}
                key={day}
              >
                {day}
              </p>
            ))}
            
          </div>
        )}
      </section>

      <section className="w-full flex flex-col justify-center items-center gap-4 mt-4">
        {hourly.map((item: HourlyWeatherItem) => (
          <div
            className="w-full pr-4 pl-1 py-2 flex justify-between items-center gap-2 text-white bg-[#2f2f49] border border-slate-700 rounded-xl"
            key={item.labelHour}
          >
            <div className=" flex justify-center items-center">
              
              <img
                src={DetermineWeatherIcon(item.code)}
                alt="weather"
                className="h-10"
              />
              <p className="text-lg">{item.labelHour}</p>
            </div>

            <p>
              {units.temperature === "Celsius" ? item.temp : item.tempF}°
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HourlyForecast;
