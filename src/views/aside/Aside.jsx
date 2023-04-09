import { DayComponent } from '../../components/day/DayComponent';
import './aside.scss';

export function Aside() {
  const week = [
    {
      date: 'Tomorrow',
      type: 'Shower',
      max: 16,
      min: 11
    },
    {
      date: 'Sun, 7 Jun',
      type: 'Shower',
      max: 16,
      min: 11
    },
    {
      date: 'Mon, 8 Jun',
      type: 'Shower',
      max: 16,
      min: 11
    },
    {
      date: 'Tue, 9 Jun',
      type: 'Shower',
      max: 16,
      min: 11
    },
    {
      date: 'Wed, 10 Jun',
      type: 'Shower',
      max: 16,
      min: 11
    }
  ]

  return(
    <main className="aside">
      <div className="aside__week">
        {week.map((day) => (
          <DayComponent date={day.date} type={day.type} max={day.max} min={day.min}/>
        ))}
        
      </div>
      <h2 className='h1'>Aside</h2>
    </main>
  )
}