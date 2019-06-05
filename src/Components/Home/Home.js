import React from 'react'
import  './Home.css'
import logo from '../../Assets/starwarslogo.png'

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <h1>Welcome to STAR WARS world!!</h1>
                <img src={logo} alt={logo} />

            </div>
        )
    }
}

export default Home