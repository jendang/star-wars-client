import React from 'react'
import api from '../api/api'
import PlanetCard from './PlanetCard'

const getPlanetsByClimate = (value) => {
    return api.get(`/planets/search?climate=${value}`)
}

class Planets extends React.Component {
    state = {
        planets: [],
    }

    fetchPlanets = (value) => {
        return getPlanetsByClimate(value)
        .then(response => {
            console.log(response.data.planets)
            return response.data 

        })
        .then(result => this.setState({ planets: result.planets }))
    }

    onInitialSearch = (e) => {
        e.preventDefault();
        const { value } = this.input;
        if (value === '') {
          return
        }
        this.fetchPlanets(value, 1);
    }

    renderPlanets = () => {
        return this.state.planets.map(planet => {
            return (
                <PlanetCard 
                    key={planet.name}
                    planet={planet}
                />
            )
        })
    }
    
    render() {
        return (
            <div>
                <div className="ui container">
                    <div className="pageHeader">
                        <h1>Searching planets by climate type</h1>
                    </div>
                    {/* <div className="ui form" style={{ textAlign: "center"}}> */}
                        <form type="submit" onSubmit={this.onInitialSearch} className="ui form" style={{ textAlign: "center"}}>
                            {/* <div className="field"> */}
                                <input 
                                    type="text" 
                                    ref={node => this.input = node} 
                                    placeholder="Please enter the climate type you want to search!"
                                    style={{ width: "50%"}}
                                />
                                <button type="submit" className="ui black button">Search</button>
                            {/* </div> */}
                        </form>
                    {/* </div> */}
                    <div className="renderCard">
                        {this.renderPlanets()}
                    </div>                
                </div>
            </div>
        )
    }
}

export default Planets