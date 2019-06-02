import React from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css';

// import 'tachyons';

const Navigation = () => {
  return (
    <div>
      <div className="ui secondary pointing menu ">
        <Link to="/" className="item">Home</Link>
        <Link to="/films" className="item">Films</Link>
        <Link to="/characters" className="item">Characters</Link>
        <Link to="/planets" className="item">Planets</Link>
        <div className="right menu">
          <Link to="/" className="item">Login/SignUp</Link>
        </div>
      </div>
    </div>
  )
}
export default Navigation;