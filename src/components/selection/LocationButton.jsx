export function LocationButton({location, updateCity}) {

  const city = () => {
    updateCity(location);
  }

  return(
    <button className="btn-location" onClick={city}>{location}</button>
  )
}