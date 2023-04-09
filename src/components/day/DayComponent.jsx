import './daycomponent.scss';

export function DayComponent({date, type, max, min}) {

  return(
    <div className="day-card">
      <p className="day__date">{date}</p>
      <img src={`/src/assets/img/${type}.webp`} alt={`${date} weather`} />
      <div className="day__maxmin">
        <p>{max}<span>ºC</span></p>
        <p>{min}<span>ºC</span></p>
      </div>
    </div>
  )
}