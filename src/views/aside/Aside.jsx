import { DayComponent } from '../../components/day/DayComponent';
import { Highlights } from '../../components/highlights/Highlights';
import './aside.scss';

export function Aside() {
  const week = [
    {
      date: 'Tomorrow',
      type: 'rain',
      max: 16,
      min: 11
    },
    {
      date: 'Sun, 7 Jun',
      type: 'fog',
      max: 16,
      min: 11
    },
    {
      date: 'Mon, 8 Jun',
      type: 'sleet',
      max: 16,
      min: 11
    },
    {
      date: 'Tue, 9 Jun',
      type: 'snow',
      max: 16,
      min: 11
    },
    {
      date: 'Wed, 10 Jun',
      type: 'wind',
      max: 16,
      min: 11
    }
  ];

  return(
    <main className="aside">
      <div className="aside__week">
        {week.map((day) => (
          <DayComponent date={day.date} type={day.type} max={day.max} min={day.min}/>
        ))}
        
      </div>
      <div className="aside__highlitghts">
        <h2>Today's Highlights</h2>
        <div className="hl-list">
          <Highlights type="Wind Status" value={7} measure="mph" res={['E', 95]}/>
          <Highlights type="Humidity" value={84} measure="%"/>
          <Highlights type="Visibility" value={6.4} measure="miles"/>
          <Highlights type="Air Pressure" value={998} measure="mb"/>
        </div>
      </div>

      <p className="copyrights">
        created by <a href="https://github.com/pedrorxmos/weather-app-challenge" target="_blank">pedrorxmos</a> - devChallenges.io
      </p>
    </main>
  )
}