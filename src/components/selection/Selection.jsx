import './selection.scss';
import { CloseSVG, SearchSVG } from '../../assets/icons';
import { LocationButton } from './LocationButton';

export function Selection() {

  const closeNav = () => {
    console.log('close')
  }

  const openNav = () => {
    console.log('open')
  }

  const addLocation = () => {
    console.log('location submited')
  }

  return(
    <nav className="selection">
      <div className="selection__actions">
        <button><CloseSVG/></button>
      </div>
      <form action={addLocation} className='field-group'>
        <label className="field field__icon" for="location">
          <SearchSVG/>
          <input type="text" name="location" id="location" placeholder='search location'/>
        </label>

        <button type="submit" className="btn btn-secondary field-btn">Search</button>
      </form>

      <div className="selection__buttons">
        <LocationButton location={'Location'}/>
        <LocationButton location={'Location 2'}/>
      </div>
    </nav>
  )
}