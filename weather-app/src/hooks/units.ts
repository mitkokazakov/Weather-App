import { useState } from "react";

const useUnits = () => {

    const [units, setUnits] =  useState({
        temperature: 'Celsius',
        windSpeed: 'km/h',
        precipitation: 'Millimeters (mm)',
        day: "Monday"
    });
    
    const HandleUnitsChange = (type: string, value: string) => {
        setUnits((prevUnits) => ({
            ...prevUnits,
            [type]: value
        }));
    }

    return {
        units,
        HandleUnitsChange
    }
}

export default useUnits;