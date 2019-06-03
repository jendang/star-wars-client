import React from 'react'

const CharacterCard = ({ character }) => {
    return (
            <div className="ui cards">
                <div className="card">
                    <div className="image">
                        <img src={require("../../Assets/starwarslogo.png")} alt="" />   
                    </div>
                    <div className="content">
                        <div className="header">{character.name}</div>
                        <div className="meta">
                            Birth year: {character.birth_year}
                        </div>
                        <div className="meta">
                            Hair color: {character.hair_color}
                        </div>
                    </div>
                    <div className="extra content">
                        <span className="right floated">
                            Height {character.height}
                        </span>
                        <span>
                            <i className="user icon"></i>
                            Gender {character.gender}
                        </span>
                    </div>
                </div>
            </div>
    )
}

export default CharacterCard