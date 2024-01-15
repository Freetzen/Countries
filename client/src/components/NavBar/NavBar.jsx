import './NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <div className="navBar">
      <div className="buttonNav">
        <Link to="/">
          <button className="button-nav">Exit</button>
        </Link>
      </div>

      <div className="buttonNav">
        <Link to="/home">
          <button className="button-nav">Home</button>
        </Link>
      </div>

      <div className="buttonNav">
        <Link to="/create-activity">
          <button className="button-nav">New Activity</button>
        </Link>
      </div>

    </div>
  );
}

export default NavBar