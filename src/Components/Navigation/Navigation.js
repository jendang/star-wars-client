import React from 'react';
import './Navigation.css';

// import 'tachyons';

const Navigation = () => {

  return (
    <nav className="navbar">
      <div className="navbar-item">Home</div>
      <div className="navbar-item">Films</div>
      <div className="navbar-item">Planets</div>
    </nav>
    // <nav className="navbar flex flex-row">
    //   <div className="navbar-item f3 underline grow">Home</div>
    //   <div className="navbar-item f3 underline grow">Films</div>
    //   {/* <div className="navbar-item f3 underline grow">Spaceships</div> */}
    //   <div className="navbar-item f3 underline grow">Planets</div>
    // </nav>
  )


}
export default Navigation;