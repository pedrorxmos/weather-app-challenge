import React, { useEffect, useState } from "react"
import { Aside, Home } from './views'


function App() {
  const [weather, setWeather] = useState(null);

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
    fetchWeatherData('jumilla')
  }, [])
  
  const cityName = weather.resolvedAddress.split(',')[0];
  return (
    <>
      {
        weather && 
        <main>
          <Home location={cityName} weather={weather.currentConditions} />
          <Aside />
        </main>
      }
      
    </>
  )
}

export default App
