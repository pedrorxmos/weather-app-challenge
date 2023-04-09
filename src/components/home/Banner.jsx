import './banner.scss';

export function Banner({type}) {
  let image = "Thunderstorm";

  return(
    <div className="banner">
      <img src={`/src/assets/img/${image}.webp`} alt="Actual weather" />
    </div>
  )
}