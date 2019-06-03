import React from 'react'
import api from '../api/api'
import PlanetCard from './PlanetCard'
import './Planets.css'

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
                <div className="pageHeader">
                    <h1>Searching planets by climate type</h1>
                </div>
                <div>
                    <form className="formSubmit center" type="submit" onSubmit={this.onInitialSearch}>
                        <input 
                            type="text" 
                            ref={node => this.input = node} 
                            placeholder="Please enter the climate type you want to search!"
                        />
                        <button type="submit" className="ui black button">Search</button>         
                    </form>
                </div>
                <div className="renderCard">
                    {this.renderPlanets()}
                </div>                
            </div>
        )
    }
}

export default Planets