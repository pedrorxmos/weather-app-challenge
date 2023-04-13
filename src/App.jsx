import React, { useEffect, useState } from "react"
import { Aside, Home } from './views'
import { getValues, updateValues } from "./hooks/localhost";

const locationsLSKey = 'locations';
const currentLSKey = 'current';

function App() {
  const [weather, setWeather] = useState(null);
  const [locations, setLocations] = useState(getValues(locationsLSKey));

  const fetchWeatherData = (city) => {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=LAACAY8XZPGVCRMSAQ93MC8UZ&contentType=json`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setWeather(data)
      })
  }

  useEffect(() => {
    const current = (getValues(currentLSKey).length === 0) ? 'valencia' : getValues(currentLSKey);
    console.log(current);
    fetchWeatherData(current)
  }, [])

  const changeCity = (city) => {
    fetchWeatherData(city);
    updateValues(currentLSKey, city)
  }

  const updateLocations = (val) => {
    setLocations(val);
    updateValues(locationsLSKey, val);
  }
  
  return (
    <>
      {
        weather && 
        <main>
          <Home location={weather.resolvedAddress.split(',')[0]} weather={weather.currentConditions} changeCity={changeCity} locations={locations} updateLocations={updateLocations}/>
          <Aside days={weather.days} current={weather.currentConditions} />
        </main>
      }
      
    </>
  )
}

export default App
