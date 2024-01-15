import './LandingPage.css'
import { Link } from "react-router-dom"


const LandingPage = () => {
  return (
    <div className='landingPage'>
        
       <div className='landingPageChild'>
       <Link to='/home'>
       <button className='buttonLanding'>
       home Page
       </button>
       </Link>
       </div>

    </div>
  )
}

export default LandingPage