import React from 'react'
import  './Home.css'
import logo from '../../Assets/starwarslogo.png'

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <h1>WELCOME TO STAR WARS WORLDS</h1>
                <img src={logo} alt={logo} />

            </div>
        )
    }
}

export default Home