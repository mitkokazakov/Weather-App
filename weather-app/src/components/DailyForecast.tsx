import type { DailyForecastType } from "../hooks/daily";
import { DetermineWeatherIcon } from "../services/weatherService";

const DailyForecast = ({
  dailyForecast,
  units,
  isLoading,
}: {
  dailyForecast: DailyForecastType[] | null;
  units: any;
  isLoading: boolean;
}) => {
  return (
    <div className="w-full mt-5 lg:mt-0 lg:col-start-1 lg:col-end-3 lg:col-span-2 lg:self-end ">
      <h1 className="text-white font-semibold text-xl mb-3 tracking-widest">
        Daily forecast
      </h1>

      <section className="w-full grid grid-cols-3 lg:grid-cols-7 lg:grid-rows-1 gap-4">
        {Array.from({length: 7}).map((_, index) =>{ 
          const day =  dailyForecast?.[index];

          return (
            <div
              className="p-4 md:p-2 flex flex-col  justify-center items-center gap-2 text-white bg-[#3d3b5e] rounded-xl"
              key={index}
            >
              

                {isLoading || !day ? (
          // 🔹 Skeleton (keeps size)
          <div className="w-full h-full flex flex-col items-center gap-3 animate-pulse">
            <div className="h-5 w-16 bg-white/20 rounded-xl" />
            <div className="h-12 w-12 bg-white/20 rounded-full" />
            <div className="w-full flex justify-between">
              <div className="h-4 w-8 bg-white/20 rounded-xl" />
              <div className="h-4 w-8 bg-white/20 rounded-xl" />
            </div>
          </div>
        ) : (
          // 🔹 Real content
          <>
            <p className="text-lg">{day.day}</p>

            <img
              src={DetermineWeatherIcon(day.code)}
              alt="weather"
              className="h-12"
            />

            <div className="w-full flex justify-between">
              <p className="md:text-xs xl:text-base">
                {units.temperature === "Celsius"
                  ? day.tempMaxC
                  : day.tempMaxF}
                °
              </p>
              <p className="md:text-xs xl:text-base">
                {units.temperature === "Celsius"
                  ? day.tempMinC
                  : day.tempMinF}
                °
              </p>
            </div>
          </>
        )}

                
            </div>
          )})}
      </section>
    </div>
  );
};

export default DailyForecast;
