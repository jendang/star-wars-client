import React from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css';

// import 'tachyons';

const Navigation = () => {
  return (
    <div>
      <div className="ui secondary pointing menu">
        <Link to="/" className="item" style={{ color: "white", fontSize: "20px" }}>Home</Link>
        <Link to="/films" className="item" style={{ color: "white", fontSize: "20px" }}>Films</Link>
        {/* <Link to="/characters" className="item">Characters</Link> */}
        <Link to="/planets" className="item" style={{ color: "white", fontSize: "20px" }}>Planets</Link>
        <div className="right menu">
          <Link to="/" className="item" style={{ color: "white", fontSize: "20px" }}>Login/SignUp</Link>
        </div>
      </div>
    </div>
  )
}
export default Navigation;