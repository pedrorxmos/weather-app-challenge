import React, { useEffect, useState } from "react"
import { Aside, Home } from './views'
import { getValues, updateValues } from "./hooks/localhost";

const locationsLSKey = 'locations';
const currentLSKey = 'current';
const unitLSKey = 'unit';

function App() {
  const [weather, setWeather] = useState(null);
  const [locations, setLocations] = useState(getValues(locationsLSKey));
  const [unit, setUnit] = useState((getValues(unitLSKey).length === 0) ? 'metric' : getValues(unitLSKey));

  const fetchWeatherData = (city) => {
    console.log('fetch1', unit);
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&key=LAACAY8XZPGVCRMSAQ93MC8UZ&contentType=json`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log('fetch2', unit);
        setWeather(data)
      })
  }

  useEffect(() => {
    fetchCurrent();
  }, [])

  const fetchCurrent = () => {
    const current = (getValues(currentLSKey).length === 0) ? 'valencia' : getValues(currentLSKey);
    fetchWeatherData(current)
  }

  const changeCity = (city) => {
    fetchWeatherData(city);
    updateValues(currentLSKey, city)
  }

  const updateLocations = (val) => {
    setLocations(val);
    updateValues(locationsLSKey, val);
  }

  const updateUnit = (val) => {
    setUnit(val);
    updateValues(unitLSKey, val);
    console.log('unit 1', unit);
    fetchCurrent();
    console.log('unit 2', unit);
  }
  
  return (
    <>
      {
        weather && 
        <main>
          <Home location={weather.resolvedAddress.split(',')[0]} weather={weather.currentConditions} changeCity={changeCity} locations={locations} updateLocations={updateLocations} unit={unit} />
          <Aside days={weather.days} current={weather.currentConditions} unit={unit} updateUnit={updateUnit} />
        </main>
      }
      
    </>
  )
}

export default App
