import { transformDate } from '../../hooks/date';
import './daycomponent.scss';

export function DayComponent({date, type, max, min, unit}) {

  const units = {
    metric: 'C',
    us: 'F'
  }

  return(
    <div className="day-card">
      <div className="day__group">
        <p>{(date !== 'Tomorrow') ? transformDate(date) : date}</p>
        <img src={new URL(`/src/assets/img/${type}.svg`, import.meta.url)} alt={`${date} weather`} />
      </div>
      <div className="day__maxmin">
        <p>{Math.round(max)}<span>º{units[unit]}</span></p>
        <p>{Math.round(min)}<span>º{units[unit]}</span></p>
      </div>
    </div>
  )
}