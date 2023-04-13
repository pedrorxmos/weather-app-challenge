import './selection.scss';
import { CloseSVG, SearchSVG } from '../../assets/icons';

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
      <form action={addLocation}>
        <div className="field field__icon">
          <SearchSVG/>
          <input type="text" name="location" id="location" />
        </div>
      </form>

      <div className="location__selection">
        <button className="btn-location">Location</button>
      </div>
    </nav>
  )
}