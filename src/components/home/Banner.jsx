import './banner.scss';

export function Banner({type}) {

  return(
    <div className="banner">
      <img src={new URL(`/src/assets/img/${type}.svg`, import.meta.url)} alt="Actual weather" />
    </div>
  )
}