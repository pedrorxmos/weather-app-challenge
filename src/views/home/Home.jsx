import './home.scss';
import { LocationSVG, PinSVG } from '../../assets/icons';
import { Banner } from '../../components/home/Banner';
import { transformDate } from '../../hooks/date';

export function Home({location, weather}) {

  // const date = new Date();
  // const num = date.getDate();
  // const month = date.getMonth();
  // const day = date.getDay();

  // const year = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  // const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', ' Thursday', 'Friday', 'Saturday'];

  return(
    <header className="home">
      <nav className="home__actions">
        <button className="btn action__search">
          Search for places
        </button>

        <button className="btn btn-round btn-icon">
          <LocationSVG/>
        </button>
      </nav>
      <Banner type={weather.icon}/>
      <div className="home__info">
        <p className="info-deg">{Math.round(weather.temp)}<span>ºC</span></p>
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
    </header>
  )
}