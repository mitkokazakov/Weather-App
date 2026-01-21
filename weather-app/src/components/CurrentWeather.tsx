import { DetermineWeatherIcon } from "../services/weatherService";

const CurrentWeather = ({
  weather,
  units,
  isLoading,
}: {
  weather: any;
  units: any;
  isLoading: boolean;
}) => {
  console.log(weather.code);

  return (
    <div className="flex flex-col items-center gap-5 text-white mt-8">
      <section
        className={`w-full  rounded-xl ${isLoading ? "bg-[#3d3b5e] py-0" : "bg-[url(/public/bg-today-small.svg)] py-14"} flex flex-col items-center px-4  bg-cover bg-center`}
      >
        {
            isLoading ? null : <>
          <h1 className="font-bold text-3xl tracking-widest">
            {units.city}, {units.country}
          </h1>
          <h4 className="font-light text-lg mt-4 tracking-widest">
            {units.day}
          </h4>

          <div className="flex justify-center items-center gap-5 mt-5">
            <img
              src={DetermineWeatherIcon(weather.code)}
              alt="weather"
              className="h-30 mt-2"
            />

            <p className="font-bold text-8xl">
              {units.temperature === "Celsius"
                ? weather.feelsLikeC
                : weather.feelsLikeF}
              °
            </p>
          </div>
        </>
        }

        {
            isLoading ? <div className="w-full min-h-85 flex flex-col gap-5 justify-center items-center">
          <img
            src="/public/icon-loading.svg"
            alt="weather"
            className="h-30 mt-2"
          />
          <h1 className="text-2xl tracking-widest">Loading...</h1>
        </div> : null
        }
      </section>

      <section className="w-full grid grid-cols-2 gap-4">
        <div className=" p-4 flex flex-col items-start gap-5 bg-[#3d3b5e] rounded-xl">
          <p className="font-light text-lg">Feels like</p>
          {
            isLoading ? <p className="text-3xl"> - </p> : <p className="text-3xl">
            {units.temperature === "Celsius"
              ? weather.feelsLikeC
              : weather.feelsLikeF}
            °
          </p>
          }
        </div>

        <div className=" p-4 flex flex-col items-start gap-5 bg-[#3d3b5e] rounded-xl">
          <p className="font-light text-lg">Humidity</p>
          {
            isLoading ? <p className="text-3xl"> - </p> : <p className="text-3xl">{weather.humidity}%</p>
          }
        </div>

        <div className=" p-4 flex flex-col items-start gap-5 bg-[#3d3b5e] rounded-xl">
          <p className="font-light text-lg">Wind</p>
          {
            isLoading ? <p className="text-3xl"> - </p> : <p className="text-3xl">
            {units.windSpeed === "km/h" ? weather.windKmh : weather.windMph} mph
          </p>
          }
        </div>

        <div className=" p-4 flex flex-col items-start gap-5 bg-[#3d3b5e] rounded-xl">
          <p className="font-light text-lg">Precipitation</p>
          {
            isLoading ? <p className="text-3xl"> - </p> : <p className="text-3xl">
            {units.precipitation === "Millimeters (mm)"
              ? weather.precipitationMm
              : weather.precipitationIn}{" "}
            in
          </p>
          }
        </div>
      </section>
    </div>
  );
};

export default CurrentWeather;
