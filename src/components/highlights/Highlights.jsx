import './highlights.scss';

export function Highlights({type, value, measure, res}) {

  return(
    <div className="hl-card">
      <div className="hl__group">
        <p>{type}</p>
        <p className="hl-value">{value}<span>{measure}</span></p>
      </div>
      {type === 'Wind Status' &&
        <div className="wind-dir">wind-dir {res}</div>
      }
      {type === 'Humidity' &&
        <div className="prct-bar">prct-bar {value}</div>
      }
    </div>
  )
}

//http://api.weatherapi.com/v1/forecast.json?key=bd802df2bdd042d1a42211235232603&q=Valencia&days=6&aqi=no&alerts=no
