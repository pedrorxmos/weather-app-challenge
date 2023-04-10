import { useState } from 'react';
import { DirectionSVG } from '../../assets/icons';
import './highlights.scss';
import { useEffect } from 'react';

export function Highlights({type, value, measure, res}) {

    let letter = 'N';
    if(type === 'Wind Status') {
      if(res < 20 && res >= 340)
        letter = 'N';
      else if((res >= 20 && res < 70))
        letter = 'NE';
      else if((res >= 70 && res < 110))
        letter = 'E';
      else if((res >= 110 && res < 160))
        letter = 'SE';
      else if((res >= 160 && res < 200))
        letter = 'S';
      else if((res >= 200 && res < 250))
        letter = 'SW';
      else if((res >= 250 && res < 290))
        letter = 'W';
      else if((res >= 290 && res < 340))
        letter = 'NW';
    }
  

  return(
    <div className="hl-card">
      <div className="hl__group">
        <p>{type}</p>
        <p className="hl-value">{value}<span>{measure}</span></p>
      </div>
      {type === 'Wind Status' &&
        <div className="wind-dir">
          <DirectionSVG style={{ transform: `rotate(${res}deg)`}}/>
          {letter}  
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
