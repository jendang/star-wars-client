import React from 'react'

const PlanetCard = ({ planet, image }) => {
    return (
            <div className="ui cards">
                <div className="card">
                    <div className="image">
                        <img src={image} alt="" />   
                    </div>
                    <div className="content">
                        <div className="header">{planet.name}</div>
                        <div className="meta">
                            Population: {planet.population}
                        </div>
                    </div>
                    <div className="extra content">
                        <span className="meta">
                            Climate-type {planet.climate}
                        </span>
                    </div>
                </div>
            </div>
    )
}

export default PlanetCard