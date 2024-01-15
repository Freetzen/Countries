import './CardActivity.css'

const CardActivity = ({id, name, difficulty, duration, season}) => {



  return (
    <div>
        <div className="cardActivity">
        <h1><span>Name of Activity:</span> {name}</h1>
        <h3><span>Difficulty:</span> {difficulty}</h3>
        <h3><span>Duration:</span> {duration}</h3>
        <h3><span>Season:</span> {season}</h3>
        <h3><span>ID:</span> {id}</h3>
        </div>
    </div>
  )
}

export default CardActivity