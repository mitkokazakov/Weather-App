

const Header = () => {
  return (
    <div className="w-full ">
      
      <section className="w-full flex justify-between items-center relative">
        <div>
            <img src="/public/logo.svg" alt="logo"  className="h-7"/>
        </div>

        <div className="bg-[#3d3b5e] flex justify-center items-center gap-2 px-3 py-1 rounded-lg cursor-pointer">
            <img src="/public/icon-units.svg" alt="settings" />
            <p className="text-white">Units</p>
            <img src="/public/icon-dropdown.svg" alt="icon" />
        </div>

        <div className="bg-[#3d3b5e] absolute top-10 right-0 rounded-lg px-4 py-3 flex flex-col justify-start items-start gap-2">
            <p className="text-white">Switch to Imperial</p>

            <div className="flex flex-col justify-start items-start gap-2  divide-y-[0.1px] divide-slate-300">
                <div className=" flex flex-col w-full">
                <p className="text-sm text-slate-300">Temperature</p>
                <p className="text-white font-semibold py-1">Celsius (C)</p>
                <p className="text-white font-semibold py-1">Fahrenheit (F)</p>
            </div>

            <div className=" flex flex-col w-full">
                <p className="text-slate-300 text-sm">Wind Speed</p>
                <p className="text-white font-semibold py-1">km/h</p>
                <p className="text-white font-semibold py-1">mph</p>
            </div>

            <div className=" flex flex-col w-full">
                <p className="text-slate-300 text-sm">Precipitation</p>
                <p className="text-white font-semibold py-1">Millimeters (mm)</p>
                <p className="text-white font-semibold py-1">Inches (in)</p>
            </div>
            </div>
        </div>
      </section>

      <h1 className="text-white text-center text-6xl font-bold mt-8 leading-tight">
        How's the sky looking today?
      </h1>
    </div>
  )
}

export default Header
