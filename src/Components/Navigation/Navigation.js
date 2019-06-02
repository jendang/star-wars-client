import React from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css';

// import 'tachyons';

const Navigation = () => {

  return (
    <div>
      <div className="ui secondary pointing menu ">
        <Link to="/" className="item">Home</Link>
      </div>
      <div className="right menu">
        <Link to="/" className="item">Films</Link>
        <Link to="/" className="item">Characters</Link>
        <Link to="/" className="item">Planets</Link>
      </div>
    </div>
  )


}
export default Navigation;