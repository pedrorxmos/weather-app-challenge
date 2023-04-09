import './home.scss';
import { LocationSVG } from '../../assets/icons';
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
      <div className="home__banner">
        <Banner/>
      </div>
    </header>
  )
}