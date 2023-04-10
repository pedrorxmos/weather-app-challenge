import { DayComponent } from '../../components/day/DayComponent';
import { Highlights } from '../../components/highlights/Highlights';
import './aside.scss';

export function Aside({days, current}) {
  
  return(
    <aside className="aside">
      <div className="aside__week">
        {days.slice(1, 6).map((day, index) => (
          <DayComponent date={(index > 0 ) ? day.datetime : 'Tomorrow'} type={day.icon} max={day.tempmax} min={day.tempmin}/>
        ))}
        
      </div>
      <div className="aside__highlitghts">
        <h2>Today's Highlights</h2>
        <div className="hl-list">
          <Highlights type="Wind Status" value={current.windspeed} measure="kph" res={current.winddir}/>
          <Highlights type="Humidity" value={current.humidity} measure="%"/>
          <Highlights type="Visibility" value={current.visibility} measure="km"/>
          <Highlights type="Air Pressure" value={current.pressure} measure="mb"/>
        </div>
      </div>

      <p className="copyrights">
        created by <a href="https://github.com/pedrorxmos/weather-app-challenge" target="_blank">pedrorxmos</a> - devChallenges.io
      </p>
    </aside>
  )
}