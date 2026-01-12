import { useState } from "react";

type WeatherType = {
    tempC: number;
    tempF: number;
    windKmh: number;
    windMph: number;
    precipitationMm: number;
    precipitationIn: number;
}

const useWeather = () => {

    const [weather, setWeather] =  useState({
        tempC: 23,
        tempF: 73,
        windKmh: 15,
        windMph: 9,
        precipitationMm: 2,
        precipitationIn: 0.08
    });
    
    const SetWeather = (data: WeatherType) => {
        setWeather(data)
    }

    return {
        weather,
        SetWeather
    }
}

export default useWeather;