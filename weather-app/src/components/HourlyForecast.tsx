import { useState } from "react";
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
  setDay,
  isLoading,
}: {
  handleUnitsChange: (unit: string, value: string) => void;
  units: any;
  hourly: HourlyWeather;
  daysName: {
    currentDay: string;
    daysList: string[];
  };
  setDay: (day: string) => void;
  isLoading: boolean;
}) => {
  const [isHourlyDropdownOpen, setIsHourlyDropdownOpen] = useState(false);

  function HandleHourlyDropdown() {
    setIsHourlyDropdownOpen(!isHourlyDropdownOpen);
  }

  return (
    <div className="w-full bg-[#25253f] rounded-xl p-4 text-white flex flex-col lg:row-span-2 lg:row-start-1 lg:col-start-3 lg:max-h-182.5 justify-center lg:justify-start items-center mt-8 ">
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
          <div className="w-54 bg-[#25253f] absolute top-10 z-10 right-0 rounded-lg px-2 py-3 flex flex-col justify-start items-start gap-2 duration-300 border border-slate-700">
            {daysName.daysList.map((day) => (
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

      <section className="w-full flex flex-col  items-center gap-4 mt-4  lg:overflow-y-scroll lg:pr-3 fancy-scroll mask-fade">
        

        {Array.from({ length: 24 }).map((_, index) => {
          const item = hourly?.[index];

          return (
            <div
              key={index}
              className="w-full pr-4 pl-1 py-2 flex justify-between items-center gap-2 bg-[#2f2f49] border border-slate-700 rounded-xl min-h-13"
            >
              {isLoading || !item ? (
                // 🔹 Skeleton row
                <div className="w-full flex justify-between items-center animate-pulse">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 bg-white/20 rounded-full" />
                    <div className="h-4 w-10 bg-white/20 rounded" />
                  </div>
                  <div className="h-4 w-6 bg-white/20 rounded" />
                </div>
              ) : (
                // 🔹 Real row
                <>
                  <div className="flex justify-center items-center gap-2">
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
                </>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default HourlyForecast;
