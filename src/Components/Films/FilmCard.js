import React from 'react'
// import './FilmsList.css'
import { Link } from 'react-router-dom'

const FilmCard = ({ film, poster }) => {


    return (
        <div className="ui card">
            <Link to={`/films/${film.title}`} className="image">
                <img 
                    src={ require(`../../Assets/episodio${poster}.jpg`) } 
                    alt={`Episode${poster} poster`} 
                    style={{maxWidth: "500px", maxHeight:"300px"}}
                />
            </Link>
            <div className="content">
                <Link to={`/films/${film.title}`} className="header">
                    {film.title}
                </Link>
                <div className="meta">
                    Episode: {film.episode_id}
                </div>
            </div>
        </div>
    )
}

export default FilmCard