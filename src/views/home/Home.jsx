import './home.scss';
import { LocationSVG, PinSVG } from '../../assets/icons';
import { Banner } from '../../components/home/Banner';

export function Home() {
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
      <Banner type={"Thunderstorm"}/>
      <div className="home__info">
        <p className="info-deg">15<span>ºC</span></p>
        <p className="info-type">Thunderstorm</p>
        <div className="info-date">
          <p>Today</p>
          <span class="dot"></span>
          <p>Fri. 5 Jun</p>
        </div>
        <div className="info-city">
          <PinSVG/>
          <p>Helsinki</p>
        </div>
      </div>
    </header>
  )
}