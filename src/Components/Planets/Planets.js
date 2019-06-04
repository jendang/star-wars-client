import React from 'react'
import api from '../api/api'
import PlanetCard from './PlanetCard'
import './Planets.css'
import Loader from '../Loader/Loader'

const getPlanetsByClimate = (value) => {
    return api.get(`/planets/search?climate=${value}`)
}

class Planets extends React.Component {
    state = {
        planets: [],
        isLoading: false
    }

    fetchPlanets = (value) => {
        this.setState({ isLoading: true })
        return getPlanetsByClimate(value)
        .then(response => response.data)
        .then(result => this.setState({ planets: result.planets, isLoading: false }))
    }

    onInitialSearch = (e) => {
        e.preventDefault();
        const { value } = this.input;
        if (value === '') {
            return
        }
        this.fetchPlanets(value);
        
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
                <div className="center">
                    <form className="ui fluid labeled input" type="submit" onSubmit={this.onInitialSearch}>
                        <div className="ui label">Climate type</div>
                        <input 
                            type="text" 
                            ref={node => this.input = node} 
                            placeholder="for example: arid, temperature, windy, tropical, rocky ...."
                        />
                        
                    </form>
                </div>
                { this.state.isLoading && <Loader /> }
                    <div className="renderCard">
                        {this.renderPlanets()}
                    </div>                
                
            </div>
        )
    }
}

export default Planets