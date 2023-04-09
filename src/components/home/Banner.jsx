import './banner.scss';

export function Banner({type}) {

  return(
    <div className="banner">
      <img src={`/src/assets/img/${type}.webp`} alt="Actual weather" />
    </div>
  )
}