import './home.scss';
import { LocationSVG, PinSVG } from '../../assets/icons';
import { Banner } from '../../components/home/Banner';
import { transformDate } from '../../hooks/date';
import { Selection } from '../../components/selection/Selection';

const key = import.meta.env.VITE_APP_WEATHER_API_KEY;

export function Home({location, weather, changeCity, locations, updateLocations, unit}) {

  const units = {
    metric: 'C',
    us: 'F'
  }
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCity);
    } else { 
     console.log("Geolocation is not supported by this browser.");
    }
  }

  const getCity = (position) => {
    const request = new XMLHttpRequest();
    request.open('GET', `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&sensor=true&key=${key}`);
    //request.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
    request.responseType = 'json';
    request.send();
    request.onload = function () {
      request.response.results.forEach(result => {
        if(result.types[0] === "administrative_area_level_4") {
          changeCity(result.formatted_address.split(',')[0])
        }
        
      })
    }
  }

  const openNav = () => {
    document.querySelector('.selection').classList.add('open');
    document.querySelector('.overlay').classList.add('open');
  }


  return(
    <header className="home">
      <nav className="home__actions">
        <button className="btn action__search" onClick={openNav}>
          Search for places
        </button>

        <button className="btn btn-round btn-icon" onClick={getLocation}>
          <LocationSVG/>
        </button>
      </nav>
      <Banner type={weather.icon}/>
      <div className="home__info">
        <p className="info-deg">{Math.round(weather.temp)}<span>º{units[unit]}</span></p>
        <p className="info-type">{weather.conditions}</p>
        <div className="info-date">
          <p>Today</p>
          <span className="dot"></span>
          <p>{transformDate('')}</p>
        </div>
        <div className="info-city">
          <PinSVG/>
          <p>{location}</p>
        </div>
      </div>

      <Selection locations={locations} updateLocations={updateLocations} changeCity={changeCity}/>
    </header>
  )
}