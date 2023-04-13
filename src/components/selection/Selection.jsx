import './selection.scss';
import { CloseSVG, SearchSVG } from '../../assets/icons';
import { LocationButton } from './LocationButton';

export function Selection({locations, updateLocations, changeCity}) {

  const closeNav = () => {
    document.querySelector('.selection').classList.remove('open');
    document.querySelector('.overlay').classList.remove('open');
  }

  const addLocation = (event) => {
    event.preventDefault();
    const value = event.target.location.value;
    
    if(!locations.includes(value.toLowerCase()) & value !== ''){
      updateLocations([...locations, value.toLowerCase()]);
    }

    event.target.reset();
    changeCity(value);
    closeNav();
  }

  return(
    <>
      <nav className="selection">
        <div className="selection__actions">
          <button onClick={closeNav}><CloseSVG/></button>
        </div>
        <form onSubmit={addLocation} className='field-group' autoComplete='off'>
          <label className="field field__icon" htmlFor="location">
            <SearchSVG/>
            <input type="text" name="location" id="location" placeholder='search location'/>
          </label>

          <button type="submit" className="btn btn-secondary field-btn">Search</button>
        </form>

        <div className="selection__buttons">

          {locations.map((l, index) => (
            <LocationButton key={index} location={l} changeCity={changeCity} />
          ))}
        </div>
      </nav>
      <div className="overlay" onClick={closeNav}></div>
    </>
    
  )
}