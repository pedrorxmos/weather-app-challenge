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
    fetchWeatherData('valencia')
  }, [])
  
  return (
    <>
      {
        weather && 
        <main>
          <Home location={weather.resolvedAddress.split(',')[0]} weather={weather.currentConditions} />
          <Aside days={weather.days} current={weather.currentConditions} />
        </main>
      }
      
    </>
  )
}

export default App
