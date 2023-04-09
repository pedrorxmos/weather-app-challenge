import { DirectionSVG } from '../../assets/icons';
import './highlights.scss';

export function Highlights({type, value, measure, res}) {

  return(
    <div className="hl-card">
      <div className="hl__group">
        <p>{type}</p>
        <p className="hl-value">{value}<span>{measure}</span></p>
      </div>
      {type === 'Wind Status' &&
        <div className="wind-dir">
          <DirectionSVG style={{ transform: `rotate(${res[1]}deg)`}}/>
          {res[0]}  
        </div>
      }
      {type === 'Humidity' &&
        <div className="prct">
          <div className="prct__num">
            <span>0%</span><span>50%</span><span>100%</span>
          </div>
          <div className="prct__bar" style={{'--prct-value': value + '%'}}></div>
        </div>
      }
    </div>
  )
}

//http://api.weatherapi.com/v1/forecast.json?key=bd802df2bdd042d1a42211235232603&q=Valencia&days=6&aqi=no&alerts=no
