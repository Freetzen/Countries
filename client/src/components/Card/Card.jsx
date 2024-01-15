import './Card.css'
import { Link } from "react-router-dom"


const Card = (props) => {
  return (
    <div className='card'>
      <Link to={`/detail/${props.id}`}>
        <div className='cardCountry'>
        <img src={props.flags} alt={props.id} className="imgRaM" key={props.id}/>
        <h2>{props.name}</h2>
        <h3>{props.continents}</h3>
      </div>
      </Link>
    </div>
  )
}

export default Card