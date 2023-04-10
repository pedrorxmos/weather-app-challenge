import './daycomponent.scss';

export function DayComponent({date, type, max, min}) {

  return(
    <div className="day-card">
      <div className="day__group">
        <p>{date}</p>
        <img src={`/src/assets/img/${type}.svg`} alt={`${date} weather`} />
      </div>
      <div className="day__maxmin">
        <p>{max}<span>ºC</span></p>
        <p>{min}<span>ºC</span></p>
      </div>
    </div>
  )
}